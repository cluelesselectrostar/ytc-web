import { motion } from 'framer-motion/dist/framer-motion';

function AnimatePage({page}) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            {page}
        </motion.div>
    )
}

export default AnimatePage;