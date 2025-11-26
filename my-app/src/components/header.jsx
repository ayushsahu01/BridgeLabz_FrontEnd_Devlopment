import React from 'react';
import { Link } from 'react-router-dom';
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
                    <li className="nav-item"><Link to="/">Home</Link></li>
                    <li className="nav-item"><Link to="/profile">Profile</Link></li>
                    <li className="nav-item"><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;