import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IconCamera, IconMic, IconVideo, IconZap } from './Icons';
import Sticker from './Sticker';

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="container hero-container-grid">

                {/* Decorative Stickers */}
                <Sticker x="35%" y="180px" rotate={12} scale={1.3} color="var(--color-lime)">MAD!</Sticker>
                <Sticker x="80%" y="120px" rotate={-5} scale={1} color="var(--color-purple)">✨</Sticker>

                {/* Left Column: Text */}
                <div className="hero-text-content">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.2
                                }
                            }
                        }}
                    >
                        <motion.h1
                            className="hero-heading"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                        >
                            We Make Brands <br />
                            <span className="text-gradient">Go Mad.</span>
                        </motion.h1>

                        <motion.p
                            className="hero-subtext"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                        >
                            Mad ideas. Measured results. The agency that breaks the internet, not your budget.
                        </motion.p>

                        <motion.div
                            className="hero-buttons"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                        >
                            <Link to="/contact" className="btn btn-primary pulse-btn">Start The Madness</Link>
                            <Link to="/work" className="btn btn-secondary">Our Work</Link>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Right Column: 3D Image & Icons */}
                <div className="hero-visuals">
                    {/* Central Mascot */}
                    <motion.div
                        className="mascot-container"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: [0, -20, 0]
                        }}
                        transition={{
                            opacity: { duration: 0.8 },
                            scale: { duration: 0.8 },
                            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                        }}
                    >
                        <img src="/mascot.png" alt="Mad2Media Mascot" className="mascot-image" />

                        {/* Orbiting Icons */}
                        <motion.div className="orbit-icon icon-1" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                            <div className="icon-inner"><IconCamera style={{ width: 40, color: 'white' }} /></div>
                        </motion.div>
                        <motion.div className="orbit-icon icon-2" animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}>
                            <div className="icon-inner"><IconMic style={{ width: 40, color: 'white' }} /></div>
                        </motion.div>
                        <motion.div className="orbit-icon icon-3" animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }}>
                            <div className="icon-inner"><IconZap style={{ width: 40, color: 'white' }} /></div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Ticker Section */}
            <div className="ticker-wrap">
                <div className="ticker-content">
                    {[1, 2].map((i) => (
                        <React.Fragment key={i}>
                            <div className="ticker-item">SOCIAL MEDIA <span>•</span></div>
                            <div className="ticker-item">PERFORMANCE MARKETING <span>•</span></div>
                            <div className="ticker-item">CONTENT CREATION <span>•</span></div>
                            <div className="ticker-item">BRANDING <span>•</span></div>
                            <div className="ticker-item">WEBSITE DESIGN <span>•</span></div>
                            <div className="ticker-item">INFLUENCER MARKETING <span>•</span></div>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* Background Decoration */}
            <div className="bg-shapes">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
            </div>
        </div>
    );
};

export default HeroSection;
