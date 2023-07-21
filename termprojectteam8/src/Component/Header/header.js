import React from 'react';
import logo from '../../Assets/logo.svg';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const Header = () => {
    const profileMenu = (
        <Menu>
            <Menu.Item key="1">
                <a href="/profile">
                    Profile
                </a>
            </Menu.Item>
            <Menu.Item key="2">
                <a href="/signout">
                    Sign Out
                </a>
            </Menu.Item>
        </Menu>
    );

    return (
        <header style={styles.header}>
            {/* Logo */}
            <div style={styles.logoContainer}>
                <a href="/dashboard"> {/* Wrap the image inside anchor tag */}
                    <img src={logo} alt="Logo" style={styles.logo} />
                </a>            </div>
            <div style={styles.headerCurve}>
                <ul style={styles.navList}>
                    <li style={styles.navItem}>
                        <a style={{color:'white'}} href="/dashboard">HOME</a>
                    </li>
                    <li style={styles.navItem}>
                        <a style={{color:'white'}} href="/about">ABOUT US</a>
                    </li>
                    <li style={styles.navItem}>
                        <a style={{color:'white'}} href="/contact">CONTACT</a>
                    </li>
                    <li style={styles.navItem}>
                        <Dropdown overlay={profileMenu} placement="bottomRight" arrow>
                            <a style={{color:'white'}} href="/dashboard">
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
        background: 'rgb(241 241 240)',
        position: 'relative', // Required for positioning the ::after pseudo-element
        border: '1px solid',

    },
    logoContainer: {
        flex: '0 0 6%', // 20% width for the logo
        marginLeft: '14%',
    },
    logo: {
        width: '100%', // Make sure the logo scales within the container
    },
    // Adding styles for the ::after pseudo-element to create the curved layer
    headerCurve: {
        content: '',
        position: 'absolute',
        top: 0,
        right: 0,
        width: '60%', // Adjust the width to create the desired curve
        height: '100%',
        background: 'rgb(0 107 182)',
        borderRadius: '-5% 0 0 0%', // Create a half-circle curve on the right
        zIndex: 1, // Change zIndex to 1 or any positive value to make it visible
        transform: 'skewX(0deg)', // Skew the curved layer slightly for a unique look
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)', // Add a subtle shadow for depth
    },
    navList: {
        listStyle: 'none',
        padding: 10,
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
