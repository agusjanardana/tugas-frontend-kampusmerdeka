import { motion } from 'framer-motion';

const reviewFooter = () => {
    return (
        <motion.footer initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="w-100" style={{ backgroundColor: '#edf6ff', height: '22.8rem' }}></div>
        </motion.footer>
    );
};

export default reviewFooter;
