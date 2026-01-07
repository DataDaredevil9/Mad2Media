import React from 'react';
import { motion } from 'framer-motion';

const Culture = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="page culture-page"
        >
            <div className="container" style={{ paddingTop: '150px' }}>
                <h1>Life at Mad2Media</h1>
            </div>
        </motion.div>
    );
};

export default Culture;
