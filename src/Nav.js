import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { HomeOutlined, 
        ProfileOutlined, 
        FileProtectOutlined, 
        ContactsOutlined, 
        SmileOutlined } 
        from '@ant-design/icons';

const Nav = (props) => {
  const { current } = props
  return (
    <div>
      <Menu selectedKeys={[current]} mode="horizontal">
        <Menu.Item key='home'>
          <Link to={`/`}>
            <HomeOutlined />Home
          </Link>
        </Menu.Item>
        <Menu.Item key='profile'>
          <Link to={'/profile'}>
          <ProfileOutlined />Profile
          </Link>
        </Menu.Item>
        <Menu.Item key='protected'>
          <Link to={'/protected'}>
            <FileProtectOutlined />Protected
          </Link>
        </Menu.Item>
        <Menu.Item key='about'>
          <Link to={'/about'}>
          <SmileOutlined />
             About Us
          </Link>
        </Menu.Item>
        <Menu.Item key='contact'>
          <Link to={'/contactus'}>
          <ContactsOutlined />
             Contact Us
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default Nav
