import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './LOGO.png'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="logo kasa" />
            <ul>
                <NavLink to="/">
                    <li>Acceuil</li>
                </NavLink>
                <NavLink to="/about">
                    <li>A Propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Header;