import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
    const services = [
        {
            id: '01',
            title: 'Social Media Marketing',
            quote: "Hum post nahi karte. Feed todte hai.",
            desc: "Full stack social management from strategy to shitposting.",
            image: "/social.png",
            color: "#ccff00"
        },
        {
            id: '02',
            title: 'Performance Marketing',
            quote: "Hum boost nahi karte. ROI badhate hai",
            desc: "Ads that stop the scroll and steal the wallet.",
            image: "/performance.png",
            color: "#7F00FF"
        },
        {
            id: '03',
            title: 'Influencer Marketing',
            quote: "Shoutouts nahi, impact karwate hain.",
            desc: "We find the loud ones.",
            image: "/influencer.png",
            color: "#ff0080"
        },
        {
            id: '04',
            title: 'Content & Creatives',
            quote: "Content sirf dikhta nahi, yaad rehta hai.",
            desc: "But beautiful sells better. We do both.",
            image: "/content.png",
            color: "#ff6f61"
        },
        {
            id: '05',
            title: 'Branding & Identity',
            quote: "Logo nahi, pehchaan banate hain.",
            desc: "We don't just design visuals, we design feelings.",
            image: "/mascot.png", /* Reusing mascot as placeholder for Identity */
            color: "#FFD700"
        },
        {
            id: '06',
            title: 'Website Designing',
            quote: "URL nahi, experience dete hain.",
            desc: "Sites that don't just load, they hypnotize.",
            image: "/performance.png", /* Reusing rocket as placeholder for Launch/Web */
            color: "#00FFFF"
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="page services-page"
        >
            <div className="container" style={{ paddingTop: '150px' }}>
                <div className="section-header center-text mb-5">
                    <motion.h1
                        className="mad-title"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        What We're <span className="stroke-text">Mad</span> At
                    </motion.h1>
                    <p className="subtitle">Our Obsessions, Your Growth.</p>
                </div>

                <div className="services-list-new">
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            className={`service-row ${i % 2 !== 0 ? 'row-reverse' : ''}`}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "backOut" }}
                        >
                            <div className="service-visual">
                                <div className="blob-bg" style={{ background: s.color }}></div>
                                <motion.img
                                    src={s.image}
                                    alt={s.title}
                                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                            <div className="service-info">
                                <div className="service-number text-outline">{s.id}</div>
                                <h2>{s.title}</h2>
                                <h3 style={{ color: s.color }}>"{s.quote}"</h3>
                                <p>{s.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Services;
