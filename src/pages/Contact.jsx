import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="page contact-page"
        >
            <div className="container" style={{ paddingTop: '150px', paddingBottom: '100px' }}>
                <div className="contact-grid">
                    <div className="contact-info">
                        <h1 className="text-gradient" style={{ fontSize: '4rem', lineHeight: 1.1 }}>Let's Create<br />Chaos Together.</h1>
                        <p style={{ fontSize: '1.5rem', marginTop: '2rem' }}>We reply faster than trends change.</p>
                        <div style={{ marginTop: '4rem' }}>
                            <p style={{ fontSize: '1.2rem' }}>hello@mad2media.com</p>
                            <p style={{ fontSize: '1.2rem' }}>+1 555 MAD NESS</p>
                        </div>
                    </div>

                    <form className="contact-form">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="Your Email" />
                        </div>
                        <div className="form-group">
                            <label>Brand</label>
                            <input type="text" placeholder="Your Brand" />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea placeholder="Tell us your wildest dreams" rows="4"></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Send It</button>
                    </form>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
