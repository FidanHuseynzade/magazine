import React, { useState } from 'react';
import { Button, Drawer, Menu } from 'antd';
import { MenuProps } from 'antd/es/menu';
import { Link } from 'react-router-dom';
import PagesIcon from '@mui/icons-material/Pages';
import FeedIcon from '@mui/icons-material/Feed';
import LinkIcon from '@mui/icons-material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import './UserNavbar.css';

interface MenuItem {
  label: React.ReactNode;
  key: string;
  icon?: React.ReactNode;
  to?: string;
  href?: string;
  children?: MenuItem[];
}

const items: MenuItem[] = [
  {
    label: 'Home',
    key: 'mail',
    icon: <FeedIcon />,
    to: '/',
  },
  {
    label: 'Pages',
    key: 'SubMenu',
    icon: <PagesIcon />,
    children: [
      {
        label: 'Login',
        key: 'setting:1',
        to: '/login',
      },
      {
        label: 'Register',
        key: 'setting:2',
        to: '/register',
      },
    ],
  },
  {
    label: (
      <a href="https://www.instagram.com/glorymagazines?igsh=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer">
        Link
      </a>
    ),
    key: 'alipay',
    icon: <LinkIcon />,
    href: 'https://www.instagram.com/glorymagazines?igsh=OGQ5ZDc2ODk2ZA==',
  },
];

const Navbar: React.FC = () => {
  const [current, setCurrent] = useState<string>('mail');
  const [visible, setVisible] = useState<boolean>(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
    onClose();
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <img
        src="https://pbs.twimg.com/profile_images/1467293619681996801/kfwm-JIt_400x400.jpg"
        alt="Profile"
        style={{ width: '60px', height: '60px', borderRadius: '50%', marginRight: '10px' }}
      />
      <h1>Glory Magazines</h1>
      <div >
        <Button type="primary" onClick={showDrawer}>
          <MenuIcon/>
        </Button>
        <Drawer placement="right" onClose={onClose} visible={visible}>
          <Menu onClick={onClick} selectedKeys={[current]} mode="vertical">
            {items.map((item) =>
              item.children ? (
                <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
                  {item.children.map((childItem) => (
                    <Menu.Item key={childItem.key} onClick={onClose}>
                      {childItem.to ? <Link to={childItem.to}>{childItem.label}</Link> : childItem.label}
                    </Menu.Item>
                  ))}
                </Menu.SubMenu>
              ) : (
                <Menu.Item key={item.key} icon={item.icon} onClick={onClose}>
                  {item.to ? <Link to={item.to}>{item.label}</Link> : item.label}
                </Menu.Item>
              )
            )}
          </Menu>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;