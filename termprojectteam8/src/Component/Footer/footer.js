import React from 'react';
import { InstagramOutlined, TwitterOutlined, FacebookOutlined } from '@ant-design/icons';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.footerContent}>
                <div style={styles.socialIcons}>
                    <InstagramOutlined style={styles.icon} />
                    <TwitterOutlined style={styles.icon} />
                    <FacebookOutlined style={styles.icon} />
                </div>
            </div>
            <br/>
            <div>
                <p style={styles.footerText}>© 2023 Access Nova Scotia. All rights reserved.</p>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        background: 'rgb(241 241 240)',
        padding: '16px',
        textAlign: 'center', // Center align the content
    },
    footerContent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    socialIcons: {
        display: 'flex',
        justifyContent: 'center', // Center align the icons horizontally
        alignItems: 'center', // Center align the icons vertically
    },
    icon: {
        fontSize: '24px',
        color: 'rgb(0, 107, 182)',
        margin: '0 10px',
        cursor: 'pointer',
    },
    footerText: {
        color: 'rgb(0, 107, 182)',
        fontSize: '18px',
        margin: 0, // Remove any default margin
    },
};

export default Footer;
