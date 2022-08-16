import {useEffect, useState} from "react";
import {Form, Input, Modal, Select} from "antd";
import ConfigTypeService from "../../../../core/services/admin/ConfigTypeService";
import ConfigTypeConstant from "../../../../core/constant/ConfigTypeConstant";
import CategoryService from "../../../../core/services/admin/CategoryService";
import categoryService from "../../../../core/services/admin/CategoryService";
import CategoryRequest from "../../model/request/CategoryRequest";
import NotificationUtils from "../../../../common/Utils/NotificationUtils";
import CategoryResponse from "../../model/response/CategoryResponse";


// @ts-ignore
const UpdateForm = ({id,visible, onCancel}) => {
    const [componentDisabled, setComponentDisabled] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [form] = Form.useForm();
    const [config, setConfig] = useState([{meaning: "UNDEFINED"}]);
    const [category, setCategory] = useState([{name: ""}]);
    const [currentCategory, setCurrentCategory] = useState<CategoryResponse>(new CategoryResponse());

    useEffect(() => {
        (async () => {
            const configRes = await ConfigTypeService.getConfigByType(ConfigTypeConstant.PC_TYPE);
            const cateRes = await CategoryService.getAllCategory();
            const currentCateg = await CategoryService.getById(id.id);
            // @ts-ignore
            setConfig(configRes.result);
            // @ts-ignore
            setCategory(cateRes.result);
            // @ts-ignore
            setCurrentCategory(currentCateg.result);
        })();
    }, []);

    // @ts-ignore
    const onFormLayoutChange = ({disabled}) => {
        setComponentDisabled(disabled);
    };

    const onSearch = (value: string) => {
        console.log('search:', value);
    };

    return (
        <Modal
            width={700} title="Basic Modal"
            visible={visible}
            confirmLoading={confirmLoading}
            onCancel={onCancel}
            onOk={() => {
                form.validateFields()
                    .then((value: any) => {
                        const categoryRequest: CategoryRequest = {
                            id: id,
                            name: value.name,
                            parentId: value.parentId
                        }
                        console.log(categoryRequest);
                        categoryService.saveOrUpdate(categoryRequest)
                            .then((res) => {
                                if(res.statusCode === '200'){
                                    NotificationUtils.successNoti("Cập nhật danh mục");
                                }
                            }).catch((error) => {
                            NotificationUtils.failNoti("Cập nhật danh mục");
                        });
                        visible = false;
                    }).catch((error) => {
                    console.log("ERROR: ", error)
                })

            }}
        >
            <Form
                form={form}
                labelCol={{
                    span: 6,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                onValuesChange={onFormLayoutChange}
                disabled={componentDisabled}
            >
                <Form.Item
                    label="Tên danh mục:"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: "Xin hãy nhập tên danh mục"
                        },
                        {
                            max: 50,
                            message: "Tên không được vượt quá 50 kí tự"
                        }
                    ]}
                >
                    <Input defaultValue={currentCategory.name}/>
                </Form.Item>
                <Form.Item
                    label="Chọn danh mục cha:"
                    name="parentId"
                    rules={[
                        {
                            required: true,
                            message: "Xin hãy chọn danh mục cha"
                        },
                    ]}
                >
                    <Select
                        defaultValue={currentCategory.parentId}
                        showSearch
                        placeholder="Chọn danh mục cha"
                        optionFilterProp="children"
                        onSearch={onSearch}
                    >
                        {category.map((data, index) => (
                                <Select.Option key={index} value={index}>
                                    {data.name}
                                </Select.Option>
                            )
                        )}
                    </Select>
                </Form.Item>
            </Form>
        </Modal>

    )
}

export {UpdateForm};