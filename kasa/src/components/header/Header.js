import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/LOGO.png'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="logo kasa" />
            <ul>
                <NavLink className={(nav)=>(nav.isActive ?"active":"")} to="/">
                    <li>Acceuil</li>
                </NavLink>
                <NavLink className={(nav)=>(nav.isActive ?"active":"")} to="/about">
                    <li>A Propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Header;