import React from 'react';
import './header.css';
import logo from '../logo.svg';

function Header() {
    return (
        <header className="header-container">
            <div className="logo-container">
                <img src={logo} alt="logo" className="logo-img" />
            </div>
            <nav>
                <ul className="nav-menu">
                    <li className="nav-item">Home</li>
                    <li className="nav-item">About</li>
                    <li className="nav-item">Contact</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;