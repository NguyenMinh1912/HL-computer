import React, {FunctionComponent, useState} from "react";
import "antd/dist/antd.css";
import "./index.css";
import {
    BarChartOutlined,
    ContainerOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    ShoppingCartOutlined,
    UserOutlined
} from "@ant-design/icons";
import {Button, Dropdown, Layout, Menu} from "antd";
import {Link, Outlet} from "react-router-dom";
import {ItemType} from "antd/lib/menu/hooks/useItems";
import {LogOutButton} from "./common/Header/LogOutButton";

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

const menu = (
    <Menu
        items={[
            {
                label: '1st menu item',
                key: '1',
                icon: <UserOutlined/>,
            },
            {
                label: '2nd menu item',
                key: '2',
                icon: <UserOutlined/>,
            },
            {
                label: 'Logout',
                key: '3',
                icon: <LogOutButton/>,
            },
        ]}
    />
);


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
                    <div className="user-icon">
                        <Dropdown.Button overlay={menu} placement="topRight" icon={<UserOutlined/>}>
                        </Dropdown.Button>
                    </div>
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
