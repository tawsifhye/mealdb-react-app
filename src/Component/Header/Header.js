import logo from '../../logo.png'
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <li>
                <a href="/home">Home</a>
                <a href="/api">API</a>
                <a href="/forum">Forum</a>
            </li>
            <input className='search-field' type="text" />
        </div>
    );
};

export default Header;