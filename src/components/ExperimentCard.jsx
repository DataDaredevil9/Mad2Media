import React from 'react';
import { motion } from 'framer-motion';
import './ExperimentCard.css';

const ExperimentCard = ({ title, tagline, tagline2, desc, color, delay, icon, image }) => {
    return (
        <motion.div
            className="experiment-card"
            style={{ borderColor: color, background: 'white' }}
            whileHover={{
                rotateY: 10,
                rotateX: -5,
                scale: 1.05,
                boxShadow: `0 20px 40px ${color}33`,
                zIndex: 10
            }}
            initial={{ opacity: 0, y: 50, rotateX: 20 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                delay: delay,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }}
        >
            <div className="card-header" style={{ color: color, display: 'flex', alignItems: 'center', gap: '1rem', flexDirection: image ? 'column' : 'row', alignItems: image ? 'flex-start' : 'center' }}>
                {image && (
                    <div style={{ width: '100%', height: '200px', marginBottom: '1rem', overflow: 'hidden', borderRadius: '10px', background: '#f0f0f0' }}>
                        <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                )}
                {icon && !image && <div className="card-icon">{icon}</div>}
                <h3 style={{ fontSize: image ? '1.8rem' : '2.5rem' }}>{title}</h3>
            </div>
            <div className="card-body">
                <p className="tagline" style={{ color: '#000', fontWeight: '900' }}>{tagline}</p>
                {tagline2 && <p className="tagline" style={{ color: '#000', fontWeight: '900' }}>{tagline2}</p>}
                {desc && <p className="desc" style={{ color: '#666' }}>{desc}</p>}
            </div>
        </motion.div>
    );
};


export default ExperimentCard;
