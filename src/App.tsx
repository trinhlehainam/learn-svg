import { motion, Variants } from 'framer-motion'
import cx from 'classnames'

import Button from './components/button.component';

const App = () => {
    const baseVariants: Variants = {
        hidden: {
            y: '-100vh',
        },
        visible: {
            y: '0',
            transition: {
                delay: 0.4,
                type: 'spring',
                stiffness: 120
            }
        }
    };

    return (
        <motion.div
            className={cx(
                "flex flex-col gap-2 justify-center items-center",
                "font-Dalek font-bold text-4xl"
            )}
            variants={baseVariants}
            initial='hidden'
            animate='visible'
        >
            <Button classname="" text="Play" />
            <Button classname="" text="Options" />
            <Button classname="" text="Quit" />
        </motion.div>
    );
}

export default App;
