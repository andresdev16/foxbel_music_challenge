import React from 'react';
import { Menu, Layout } from 'antd'
import './Navigation.less'

const { Header, Content, Footer, Sider } = Layout;

const Navigation = () => (
    <Layout>
        <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
            console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
        }}
        className="Navigation"
        >
        <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                <Menu.Item key="1" >
                nav 1
                </Menu.Item>
                <Menu.Item key="2" >
                nav 2
                </Menu.Item>
                <Menu.Item key="3" >
                nav 3
                </Menu.Item>
                <Menu.Item key="4" >
                nav 4
                </Menu.Item>
            </Menu>
        </Sider>

    </Layout>
)

export default Navigation