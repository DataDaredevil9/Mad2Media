import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Work', path: '/work' },
        { name: 'Services', path: '/services' },
        { name: 'About', path: '/about' },
        { name: 'Culture', path: '/culture' },
    ];

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <Link to="/" className="logo-link" onClick={() => window.scrollTo(0, 0)}>
                    <img src="/logo.png" alt="Mad2Media" className="nav-logo-img" />
                </Link>

                <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={location.pathname === link.path ? 'active' : ''}
                            onClick={() => {
                                setIsOpen(false);
                                window.scrollTo(0, 0);
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/contact" className="nav-cta" onClick={() => {
                        setIsOpen(false);
                        window.scrollTo(0, 0);
                    }}>Let's Talk</Link>
                </div>

                <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
