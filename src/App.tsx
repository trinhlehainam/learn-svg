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
                "flex flex-col justify-center items-center gap-0",
                "font-Dalek font-bold text-3xl",
                "sm:text-5xl"
            )}
        >
            <div
                className={cx(
                    "relative text-8xl -top-16 text-yellow-custom",
                    "sm:text-9xl"
                )}
            >
                GEMTD
            </div>
            <motion.div
                className={cx(
                    "flex flex-col justify-center items-center",
                    "sm:gap-2"
                )}
                variants={baseVariants}
                initial='hidden'
                animate='visible'
            >
                <Button classname="w-4/5 sm:w-full" text="Play" />
                <Button classname="w-4/5 sm:w-full" text="Options" />
                <Button classname="w-4/5 sm:w-full" text="Quit" />
            </motion.div>
        </motion.div>
    );
}

export default App;
