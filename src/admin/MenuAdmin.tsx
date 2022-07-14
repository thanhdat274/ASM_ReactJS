import { PhoneOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import { Link, Outlet } from 'react-router-dom'
import styled from 'styled-components';
import { FaWeightHanging } from "react-icons/fa";
import LogoImage from '../assets/images/logo.png'

const { Header, Content, Sider } = Layout;

const item3: MenuProps['items'] = [
    {
        key: "categories", icon: <SettingOutlined />,
        label: <Link to="/admin/category">Categories</Link>
    },
    {
        key: "cellphone", icon: <FaWeightHanging/>,
        label: <Link to="/admin">Sản phẩm</Link>
    },
]

const MenuAdmin: React.FC = () => (
    <Layout>
        <HeaderCustom>
            <Logo src={LogoImage} />
        </HeaderCustom>
        <Layout>
            <Sider width={200} style={{ height: '100%' }} className="site-layout-background">
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                    items={item3}
                />
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
                <ContentCustom>
                    <Outlet />
                </ContentCustom>
            </Layout>
        </Layout>
    </Layout>
);

const HeaderCustom = styled(Header)`
    background-color: #00B0D7;
    height: 64px;
    display: flex;
    align-items: center;
`

const Logo = styled.img`
    width: 64px;
    height: auto;
`

const ContentCustom = styled(Content)`
  height: 100%;
`
export default MenuAdmin;
