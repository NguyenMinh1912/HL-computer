import React, {FunctionComponent, useState} from "react";
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

const { Header, Sider, Content } = Layout;

const Admin: FunctionComponent = () => {
    const [collapsed, setCollapsed] = useState(false);

    const sideBarRouter = () => {
        console.log("minhsama")
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
                            onClick: sideBarRouter
                        },
                        {
                            key: "2",
                            icon: <ShoppingCartOutlined />,
                            label: "Product",

                        },
                        {
                            key: "3",
                            icon: <ContainerOutlined />,
                            label: "Category"
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
                    Content
                </Content>
            </Layout>
        </Layout>
    );
};

export {Admin};
