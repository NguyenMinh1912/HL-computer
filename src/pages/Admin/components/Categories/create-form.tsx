import { useEffect, useState} from "react";
import {Button, Form, Input, Modal, Select} from "antd";
import ConfigTypeService from "../../../../core/services/admin/ConfigTypeService";
import ConfigTypeConstant from "../../../../core/constant/ConfigTypeConstant";
import CategoryService from "../../../../core/services/admin/CategoryService";


// @ts-ignore
const CreateForm = ({visible,onCancel}) => {

    const [componentDisabled, setComponentDisabled] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [form] = Form.useForm();
    const [config, setConfig] = useState([{meaning: "UNDEFINED"}]);
    const [category, setCategory] = useState([{name: ""}]);

    useEffect( () => {
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

    const onFinish = (value: any) => {
        console.log("value", value);
    }


    return (
        <Modal
            width={700} title="Basic Modal"
            visible={visible}
            confirmLoading={confirmLoading}
            onCancel={onCancel}
            onOk={() => {
                form.validateFields()
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
                onFinish={onFinish}
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
                    label="Chọn loại danh mục:"
                    name="type"
                    rules={[
                        {
                            required: true,
                            message: "Xin hãy chọn loại danh mục"
                        },
                    ]}
                >
                    <Select
                        showSearch
                        placeholder = "Chọn loại danh mục"
                        optionFilterProp="children"
                        onSearch={onSearch}
                    >
                        {config.map((data, index) => (
                                <Select.Option key={index} value={index}>
                                    {data.meaning}
                                </Select.Option>
                            )
                        )}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Chọn danh mục cha:"
                    name="parent_id"
                    rules={[
                        {
                            required: true,
                            message: "Xin hãy chọn danh mục cha"
                        },
                    ]}
                >
                    <Select
                        showSearch
                        placeholder = "Chọn danh mục cha"
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