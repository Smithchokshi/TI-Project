import React from 'react';
import logo from '../../Assets/logo.svg';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const Header = () => {
  const profileMenu = (
    <Menu>
      <Menu.Item key="1">
        <a href="/profile">Profile</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a
          href="/login"
          onClick={() => {
            localStorage.setItem('isAuthenticated', 'false');
          }}
        >
          Sign Out
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <header style={styles.header}>
      {/* Second Curve (behind the current curve) */}
      <div style={styles.secondHeaderCurve}></div>
      {/* Logo  */}
      <div style={styles.logoContainer}>
        <a href="/dashboard">
          {' '}
          {/* Wrap the image inside anchor tag */}
          <img src={logo} alt="Logo" style={styles.logo} />
        </a>
      </div>
      <div style={styles.headerCurve}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <a style={{ color: 'white', transform: 'skewX(-330deg)' }} href="/dashboard">
              HOME
            </a>
          </li>
          <li style={styles.navItem}>
            <a style={{ color: 'white', transform: 'skewX(-330deg)' }} href="/about">
              ABOUT US
            </a>
          </li>
          <li style={styles.navItem}>
            <a style={{ color: 'white', transform: 'skewX(-330deg)' }} href="/contact">
              CONTACT
            </a>
          </li>
          <li style={styles.navItem}>
            <Dropdown overlay={profileMenu} placement="bottomRight" arrow>
              <a style={{ color: 'white', transform: 'skewX(-330deg)' }}>
                <span>SETTINGS</span>
                <DownOutlined style={styles.dropdownIcon} />
              </a>
            </Dropdown>
          </li>
        </ul>
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative', // Required for positioning the curves
  },
  secondHeaderCurve: {
    content: '',
    position: 'absolute',
    top: '24px',
    right: '-2%', // Adjust this value to control the starting point of the second curve
    width: '65%', // Adjust the width to create the desired curve
    height: '100%',
    background: '#36BFF3', // Background color for the second curve
    zIndex: 0, // Place the second curve behind the first curve
    transform: 'skewX(330deg)', // Skew the second curve slightly for a unique look
  },
  logoContainer: {
    flex: '0 0 6%', // 20% width for the logo
    marginLeft: '14%',
  },
  logo: {
    width: '100%', // Make sure the logo scales within the container
    transform: 'scale(3)',
  },
  // Adding styles for the ::after pseudo-element to create the curved layer
  headerCurve: {
    position: 'absolute',
    top: '50%',
    right: '-53px',
    width: '65%',
    height: '50%',
    background: 'rgb(0, 107, 182)',
    borderRadius: '0px',
    zIndex: '1',
    transform: 'skewX(330deg)',
  },
  navList: {
    listStyle: 'none',
    padding: '10px 100px 10px 10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    fontSize: '20px',
    color: 'white',
  },
  navItem: {
    margin: '0 10px',
    color: 'white',
  },
  dropdownIcon: {
    fontSize: '14px',
    marginLeft: '5px',
  },
  dropdownText: {
    color: 'white',
  },
};

export default Header;
