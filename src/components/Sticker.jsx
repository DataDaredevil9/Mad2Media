import React from 'react';
import { motion } from 'framer-motion';

const Sticker = ({ children, x, y, rotate = 0, scale = 1, color = "#fff", delay = 0 }) => {
    return (
        <motion.div
            style={{
                position: 'absolute',
                top: y,
                left: x,
                zIndex: 10,
                pointerEvents: 'none',
                display: 'inline-block',
                padding: '10px 15px',
                background: color,
                borderRadius: '15px',
                border: '4px solid #fff',
                boxShadow: '8px 8px 0px rgba(0,0,0,1)',
                transform: `rotate(${rotate}deg) scale(${scale})`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
                opacity: 1,
                scale: scale,
                y: [0, -15, 0],
                rotate: [rotate, rotate + 5, rotate - 5, rotate]
            }}
            transition={{
                opacity: { duration: 0.5, delay },
                scale: { type: 'spring', stiffness: 200, damping: 10, delay },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
        >
            <div style={{ fontSize: '2rem', fontWeight: 900, color: '#000', display: 'flex', alignItems: 'center', gap: '8px' }}>
                {children}
            </div>
        </motion.div>
    );
};

export default Sticker;
