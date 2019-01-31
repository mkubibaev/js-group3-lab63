import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <NavLink to="/" className="logo">My Blog</NavLink>
                    <ul className="nav">
                        <li><NavLink to="/" exact>Home</NavLink></li>
                        <li><NavLink to="/posts/add">Add</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contacts">Contacts</NavLink></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;