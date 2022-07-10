import { motion } from 'framer-motion/dist/framer-motion';

function AnimatePage({page}) {
    return (
        <motion.div
            initial={{ opacity: 0, transition:{duration:0.5} }}
            animate={{ opacity: 1, transition:{duration:0.5} }}
            exit={{ opacity: 0, transition:{duration:0.5}}}>
            {page}
        </motion.div>
    )
}

export default AnimatePage;