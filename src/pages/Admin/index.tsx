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
import {Button, Layout, Menu} from "antd";
import {Link, Outlet, useNavigate} from "react-router-dom";
import {ItemType} from "antd/lib/menu/hooks/useItems";

const {Header, Sider, Content} = Layout;

const items: ItemType[] = [
    {
        key: "1",
        icon: <BarChartOutlined/>,
        label: (
            <Link to={'dashboard'}>Dashboard</Link>
        ),
    },
    {
        key: "2",
        icon: <ShoppingCartOutlined/>,
        label: (
            <Link to={'products'}>Product</Link>
        ),
    },
    {
        key: "3",
        icon: <ContainerOutlined/>,
        label: (
            <Link to={'categories'}>Category</Link>
        ),
    }
];

const Admin: FunctionComponent = () => {
    const [collapsed, setCollapsed] = useState(false);


    const CollaseMenuIcon: FunctionComponent<{
        onClick?: () => void,
        collase?: boolean,
    }> = ({collase = false, ...props}) => {
        const Icon = collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>;
        return <Button ghost icon={Icon} onClick={props.onClick}/>;
    }

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <CollaseMenuIcon onClick={() => setCollapsed(!collapsed)}/>

                {/*<div className="logo"/>*/}

                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                    items={items}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    color={"white"}
                    className="site-layout-background"
                    style={{
                        padding: 0
                    }}
                >
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: "24px 16px",
                        padding: 24,
                        height: '100vh'
                    }}
                >
                    <Outlet/>
                </Content>
            </Layout>
        </Layout>
    );
};

export {Admin};
