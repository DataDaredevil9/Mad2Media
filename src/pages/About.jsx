import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    const manifesto = [
        { title: "Chaos is a Ladder", desc: "We climb it with style." },
        { title: "Boring is Deadly", desc: "If they don't look twice, you failed." },
        { title: "Data is the new Punk", desc: "Rebellion backed by spreadsheets." }
    ];

    const team = [
        { name: "Max Mad", role: "Chief Chaos Officer", trait: "Drinks coffee with Red Bull." },
        { name: "Lila Logic", role: "Head of Reason", trait: "Uses Excel for fun." },
        { name: "Sam Sketch", role: "Art Director", trait: "Only sees in hex codes." }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="page about-page"
        >
            {/* Origin Story */}
            <section className="section-padding container origin-story">
                <motion.h1
                    className="text-gradient"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    About Mad2Media
                </motion.h1>
                <div className="story-content">
                    <h2>We were tired of boring marketing.</h2>
                    <p>So we created chaos with a plan. Traditional agencies are asleep. We are the alarm clock that plays heavy metal. We exist to make brands uncomfortable enough to grow.</p>
                </div>
            </section>

            {/* Belief System */}
            <section className="section-padding bg-purple">
                <div className="container">
                    <h2 className="section-title text-lime">Belief System</h2>
                    <div className="manifesto-grid">
                        {manifesto.map((item, index) => (
                            <motion.div
                                key={index}
                                className="manifesto-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                            >
                                <h3>0{index + 1}</h3>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="section-padding container">
                <h2 className="section-title text-coral">The Mad Scientists</h2>
                <div className="team-grid">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            className="team-card"
                            whileHover={{ y: -10 }}
                        >
                            <div className="team-photo"></div>
                            <div className="team-info">
                                <h3>{member.name}</h3>
                                <p className="role">{member.role}</p>
                                <p className="trait">"{member.trait}"</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </motion.div>
    );
};

export default About;
