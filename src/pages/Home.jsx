import React, { useRef } from 'react';
import HeroSection from '../components/HeroSection';
import ExperimentCard from '../components/ExperimentCard';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Home.css';
import Sticker from '../components/Sticker';

const Home = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    const experiments = [
        {
            title: "Social",
            tagline: "Post nahi karte",
            tagline2: "Feed todte hain.",
            color: "#ccff00",
            image: "/social.png"
        },
        {
            title: "Performance",
            tagline: "Boost nahi karte.",
            tagline2: "ROI badhate hain.",
            color: "#7F00FF",
            image: "/performance.png"
        },
        {
            title: "Content",
            tagline: "Viral hone ka try nahi.",
            tagline2: "Viral ho jaata hai.",
            color: "#ff6f61",
            image: "/content.png"
        }
    ];

    const reasons = [
        "PPT dekh ke neend aaye? Hum nahi banate",
        "Buzzwords bolna aata hai, use karna nahi",
        "Thoda madness, full control",
        "Flex nahi, figures dikhaate hain"
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="page home-page"
        >
            <HeroSection />

            {/* Scrolling Tagline */}
            <div ref={targetRef} className="scrolling-tagline" style={{ marginTop: '100px' }}>
                <motion.div style={{ x }}>
                    <span>EXPERIMENT • CREATE • DISRUPT • MADNESS • INNOVATE • </span>
                    <span>EXPERIMENT • CREATE • DISRUPT • MADNESS • INNOVATE • </span>
                </motion.div>
            </div>

            {/* Experiments Section */}
            <section className="section-padding container" style={{ position: 'relative' }}>
                <Sticker x="90%" y="-20px" rotate={15} scale={0.8} color="var(--color-coral)">NEW</Sticker>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h2 className="text-lime section-title">Our Experiments</h2>
                    <p className="section-subtitle">Not your usual services.</p>
                </motion.div>

                <div className="experiments-grid">
                    {experiments.map((exp, index) => (
                        <Link to="/services" key={index} style={{ textDecoration: 'none' }}>
                            <ExperimentCard {...exp} delay={index * 0.2} />
                        </Link>
                    ))}
                </div>
            </section>

            {/* Why Mad2Media */}
            <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
                <Sticker x="5%" y="20%" rotate={-10} scale={1.1} color="var(--color-lime)">LEGIT</Sticker>
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '800px',
                    height: '800px',
                    background: 'radial-gradient(circle, rgba(204, 255, 0, 0.1) 0%, rgba(255,255,255,0) 70%)',
                    zIndex: -1,
                    pointerEvents: 'none'
                }}></div>
                <div className="container">
                    <h2 className="why-title">Why Mad2Media?</h2>
                    <div className="reasons-grid">
                        {reasons.map((reason, index) => (
                            <motion.div
                                key={index}
                                className="reason-item"
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <span className="reason-number">0{index + 1}</span>
                                <span className="reason-text">{reason}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Work (Simplified) */}
            <section className="section-padding container" style={{ position: 'relative' }}>
                <Sticker x="85%" y="40px" rotate={5} scale={1.2} color="var(--color-purple)">🔥 LIVE</Sticker>
                <h2 className="text-coral section-title">Selected Madness</h2>
                <div className="work-scroll">
                    {[
                        { name: "LA FORESTA", image: "/la_foresta.jpg" },
                        { name: "LABURNUM DEVELOPERS", image: "/laburnum.jpg" },
                        { name: "GURUKRAPA", image: "/gurukrapa.jpg" },
                        { name: "RAMDEV", image: "/ramdev.jpg" }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className={`work-card-home ${item.image ? 'with-image' : ''}`}
                            style={item.image ? { '--work-image': `url(${item.image})` } : {}}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <h3>{item.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </section>
        </motion.div>
    );
};

export default Home;
