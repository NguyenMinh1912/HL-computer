import React, {FunctionComponent, useEffect, useState} from "react";
import "antd/dist/antd.css";
import "./index.css";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    ContainerOutlined,
    ShoppingCartOutlined,
    BarChartOutlined
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import {Outlet, useNavigate} from "react-router-dom";
import authenticateService from "../../core/services/AuthenticateService";
import storageService from "../../core/services/StorageService";

const { Header, Sider, Content } = Layout;

const Admin: FunctionComponent = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();

    useEffect( () => {


    }, [])

    const sideBarRouter = () => {
        console.log("minhsama")
    }

    const navigateToPath = (path: string) => {
        navigate(path, { replace: true });
    }

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                    items={[
                        {
                            key: "1",
                            icon: <BarChartOutlined />,
                            label: "DashBoard",
                            onClick: (e) => {
                                navigateToPath('dashboard');
                            }
                        },
                        {
                            key: "2",
                            icon: <ShoppingCartOutlined />,
                            label: "Product",
                            onClick: (e) => {
                                navigateToPath('products');
                            }
                        },
                        {
                            key: "3",
                            icon: <ContainerOutlined />,
                            label: "Category",
                            onClick: (e) => {
                                navigateToPath('categories');
                            }
                        }
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0
                    }}
                >
                    {React.createElement(
                        collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                        {
                            className: "trigger",
                            onClick: () => setCollapsed(!collapsed)
                        }
                    )}
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: "24px 16px",
                        padding: 24,
                        minHeight: 1000
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export {Admin};
