import React, { useEffect, useState } from 'react';
import logo from '../../Assets/logo.svg';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './header.css';

const Header = () => {
  const [user, setUser] = useState('');

  const profileMenu = (
    <Menu>
      <Menu.Item key="2">
        <a
          href="/login"
          onClick={() => {
            localStorage.setItem('isAuthenticated', 'false');
            localStorage.setItem('loggedInUser', null);
          }}
        >
          {' '}
          Sign Out
        </a>
      </Menu.Item>
    </Menu>
  );

  const mobileMenu = (
    <Menu>
      <Menu.Item key="1">
        <a href="/dashboard">Home</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a href="/about">About</a>
      </Menu.Item>
      <Menu.Item key="3">
        <a href="/contact">Contact</a>
      </Menu.Item>
      <Menu.Item key="4">
        <a
            href="/signout"
            onClick={() => {
                localStorage.setItem('isAuthenticated', 'false');
                localStorage.setItem('loggedInUser', null);
            }}
        >Sign Out</a>
      </Menu.Item>
    </Menu>
  );

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('loggedInUser')));
  }, []);

  return (
    <header className="header">
      {/* Second Curve (behind the current curve) */}
      <div className="secondHeaderCurve"></div>
      {/* Logo  */}
      <div className="logoContainer1">
        <a href="/dashboard">
          {' '}
          {/* Wrap the image inside anchor tag */}
          <img src={logo} alt="Logo" className="logo1" />
        </a>
      </div>
      <div className="headerCurve">
        <ul className={user?.isAdmin ? 'adminHeader' : "navList"}>
          {!user?.isAdmin && (
            <>
              <li className="navItem">
                <a style={{ color: 'white', transform: 'skewX(-330deg)' }} href="/dashboard">
                  HOME
                </a>
              </li>
              <li className="navItem">
                <a style={{ color: 'white', transform: 'skewX(-330deg)' }} href="/about">
                  ABOUT US
                </a>
              </li>
              <li className="navItem">
                <a style={{ color: 'white', transform: 'skewX(-330deg)' }} href="/contact">
                  CONTACT
                </a>
              </li>
            </>
          )}
          <li className="navItem">
            <Dropdown overlay={profileMenu} placement="bottomRight" arrow>
              <a style={{ color: 'white', transform: 'skewX(-330deg)' }}>
                <span>Hi, {user?.fullName}</span>
                <DownOutlined className="dropdownIcon" />
              </a>
            </Dropdown>
          </li>
        </ul>
        <ul className="navList2">
          <li className="navItem">
            <Dropdown overlay={mobileMenu} placement="bottomRight" arrow>
              <a style={{ color: 'white' }}>
                <span>Hi, {user?.fullName}</span>
                <DownOutlined className="dropdownIcon" />
              </a>
            </Dropdown>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
