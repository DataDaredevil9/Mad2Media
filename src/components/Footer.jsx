import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import Sticker from './Sticker';

const Footer = () => {
    return (
        <footer className="footer" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="container footer-content">
                <Sticker x="80%" y="20px" rotate={10} scale={0.7} color="var(--color-lime)">MADNESS ONLY</Sticker>
                <div className="footer-cta">
                    <h3>Brand hai. Ab presence bhi honi chahiye.</h3>
                    <Link to="/contact" className="cta-button" onClick={() => window.scrollTo(0, 0)}>Baat Karein?</Link>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Mad2Media.</p>
                    <p>Bas itna hi. Baaki coffee pe.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
