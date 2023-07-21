import React from 'react';
import logo from '../../imge4.png';
import {Col, Row} from "antd"; // Replace 'logo.png' with your logo image path
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BellOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';

const Header = () => {
    const notificationMenu = (
        <Menu>
            <Menu.Item key="1">Notification 1</Menu.Item>
            <Menu.Item key="2">Notification 2</Menu.Item>
            <Menu.Item key="3">Notification 3</Menu.Item>
        </Menu>
    );

    const profileMenu = (
        <Menu>
            <Menu.Item key="1">Profile</Menu.Item>
            <Menu.Item key="2">Settings</Menu.Item>
            <Menu.Item key="3">Logout</Menu.Item>
        </Menu>
    );
    return (
        <header style={styles.header}>
            {/* Logo */}
            <div style={styles.logoContainer}>
                <img src={logo} alt="Logo" style={styles.logo} />
            </div>
            <div style={styles.headerCurve}>
                <ul style={styles.navList}>
                    <li style={styles.navItem}><a href="/">HOME</a></li>
                    <li style={styles.navItem}><a href="/about">ABOUT US</a></li>
                    <li style={styles.navItem}><a href="/contact">CONTACT</a></li>
                </ul>
            </div> {/* The ::after pseudo-element */}
            <div style={styles.headerIcons}>
{/*                 Notification Icon
                <BellOutlined style={styles.icon} />

                 User Profile Icon
                <UserOutlined style={styles.icon} />

                 Logout Button
                <LogoutOutlined style={styles.icon} />*/}
            </div>
        </header>
    );
};

const styles = {
    header: {
        display: 'flex',
        alignItems: 'center',
        background: '#fff',
        padding: '16px',
        position: 'relative', // Required for positioning the ::after pseudo-element
    },
    logoContainer: {
        flex: '0 0 8%', // 20% width for the logo
        marginLeft: '14%'
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
        width: '50%', // Adjust the width to create the desired curve
        height: '100%',
        background: '#36BFF3',
        borderRadius: '-5% 0 0 0%', // Create a half-circle curve on the right
        zIndex: 1, // Change zIndex to 1 or any positive value to make it visible
        transform: 'skewX(-30deg)', // Skew the curved layer slightly for a unique look
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)', // Add a subtle shadow for depth
    },
    headerIcons: {
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        top: '50%', // Center the icons vertically
        right: 0,
        transform: 'translateY(-50%)', // Center the icons vertically
        zIndex: 2, // Set zIndex to 2 to bring the icons above the curve layer
    },
    icon: {
        fontSize: '24px',
        color: '#fff',
        margin: '0 10px', // Add spacing between icons
        cursor: 'pointer',
    },
    dropdownIcon: {
        fontSize: '14px',
        color: '#fff',
        marginLeft: '5px',
    },
    navList: {
        listStyle: 'none',
        padding: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
    },
    navItem: {
        margin: '0 10px',
    },

};

export default Header;
