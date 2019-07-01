import React from 'react';
import './footer.css';
const Footer = () => {
    console.log('render footer..');
    const footerText = `© 2019 Anatta Inc. All rights reserved.`;
    return (
        <footer className="footer-container">
            <img alt="Anatta logo" className="footerLogo" src='/images/icon-72x72.png'></img>
            <label>{footerText}</label>
        </footer>
    );
};
export default Footer;