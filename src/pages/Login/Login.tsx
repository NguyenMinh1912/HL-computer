import React, {FunctionComponent} from 'react';
import 'antd/dist/antd.css';
import {Button, Checkbox, Form, Input} from 'antd';
import authenticateService from "../../core/services/AuthenticateService";
import LoginRequest from "../Admin/model/request/LoginRequest";
import {useNavigate} from "react-router-dom";
import storageService from "../../core/services/StorageService";
import NotificationUtils from "../../common/Utils/NotificationUtils";


const Login: FunctionComponent = () => {

    const navigate = useNavigate();

    // @ts-ignore
    const loginRequest = new LoginRequest();

    const onFinish = async (values: any) => {
        loginRequest.username = values.username;
        loginRequest.password = values.password;

        const userInfo = await authenticateService.login(loginRequest).then(value => {
            storageService.set('userInfo', value);
        });

        if (authenticateService.isLogin() && authenticateService.isAdmin()) {
            navigate("/dashboard", {replace: true});
        }
        NotificationUtils.successNoti("Đăng nhập");

    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password/>
            </Form.Item>

            <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Login;