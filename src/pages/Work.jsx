import React from 'react';
import { motion } from 'framer-motion';

const Work = () => {
    const cases = [1, 2, 3, 4, 5, 6];
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="page work-page"
        >
            <div className="container" style={{ paddingTop: '150px', paddingBottom: '100px' }}>
                <h1 className="text-lime" style={{ fontSize: '4rem', marginBottom: '3rem' }}>All The Madness</h1>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                    {cases.map((id) => (
                        <motion.div
                            key={id}
                            whileHover={{ scale: 0.98 }}
                            style={{
                                height: '400px',
                                background: '#222',
                                border: '1px solid #333',
                                padding: '2rem',
                                position: 'relative',
                                overflow: 'hidden',
                                cursor: 'pointer'
                            }}
                        >
                            <div className="work-overlay" style={{
                                position: 'absolute',
                                top: 0, left: 0, right: 0, bottom: 0,
                                background: 'linear-gradient(to top, black, transparent)',
                                opacity: 0.8
                            }}></div>

                            <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', zIndex: 2 }}>
                                <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'white' }}>Brand {id}</h2>
                                <p className="text-purple" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>View Chaos &rarr;</p>
                            </div>

                            <div style={{
                                position: 'absolute',
                                top: '2rem',
                                right: '2rem',
                                color: 'var(--color-lime)',
                                fontWeight: '900',
                                fontSize: '3rem',
                                opacity: 0.2
                            }}>
                                0{id}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Work;
