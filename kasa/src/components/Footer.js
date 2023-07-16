import React from 'react';
import blackLogo from './blackLogo.png'

const Footer = () => {
    return (
        <div className='footer'>
        <img src={blackLogo} alt="logo blanc" />
        <p>2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;