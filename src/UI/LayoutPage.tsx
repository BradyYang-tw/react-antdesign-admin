import React, { useState } from 'react';
import {
  HomeOutlined,
  FormOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import './LayoutPage.css'
import logo from '../static/logo.svg';
import {Outlet, useNavigate, NavLink, Link } from 'react-router-dom';
import WaitingOrder from '../components/WaitingOrder';

const { Header, Sider, Content } = Layout;

const LayoutPage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
// const navigate = useNavigate();
// const handleClick = () => {
//   console.log('click');
//   // navigate('/orderFood')
// }

  return (
    <Layout className='base-layout'>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <img className="logo" src={logo} alt="" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
                key: '1',
                icon: <HomeOutlined />,
                label: <Link to="/Home">Home</Link>,
                // onClick: handleClick
              },
              {
                key: '2',
                icon: <FormOutlined />,
                label: <Link to="/orderFood">我要開團</Link>,
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: '6666',
              },
            {
              key: '4',
              icon: <UserOutlined />,
              label: '使用者管理',
            },
            {
              key: '5',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '6',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className='layout-header'  style={{ padding: '2vw', background: colorBgContainer}}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
          <h1 className='header-title'>Wistron 一起吃吃喝喝</h1> 
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutPage;