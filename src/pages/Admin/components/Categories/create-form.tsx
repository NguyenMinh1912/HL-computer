import {useEffect, useState} from "react";
import {Button, Form, Input, Modal, Select} from "antd";
import ConfigTypeService from "../../../../core/services/admin/ConfigTypeService";
import ConfigTypeConstant from "../../../../core/constant/ConfigTypeConstant";
import CategoryService from "../../../../core/services/admin/CategoryService";
import CategoryRequest from "../../model/request/CategoryRequest";
import categoryService from "../../../../core/services/admin/CategoryService";
import NotificationUtils from "../../../../common/Utils/NotificationUtils";


// @ts-ignore
const CreateForm = ({visible, onCancel,isLoadData}) => {

    const [componentDisabled, setComponentDisabled] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [form] = Form.useForm();
    const [config, setConfig] = useState([{meaning: "UNDEFINED"}]);
    const [category, setCategory] = useState([{name: ""}]);

    useEffect(() => {
        (async () => {
            const configRes = await ConfigTypeService.getConfigByType(ConfigTypeConstant.PC_TYPE);
            const cateRes = await CategoryService.getAllCategory();
            // @ts-ignore
            setConfig(configRes.result);
            // @ts-ignore
            setCategory(cateRes.result);
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
                            name: value.name,
                            parentId: value.parentId
                        }
                        categoryService.saveOrUpdate(categoryRequest)
                            .then((res) => {
                                if(res.statusCode === '200'){
                                    NotificationUtils.successNoti("Thêm danh mục");
                                    isLoadData();
                                }
                            }).catch((error) => {
                            NotificationUtils.failNoti("Thêm danh mục");
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
                    <Input/>
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

export {CreateForm};