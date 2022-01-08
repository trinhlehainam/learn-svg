import { motion, Variants } from 'framer-motion'
import cx from 'classnames'

import Title from '../components/title.component'
import Button from '../components/button.component'

const Home = () => {
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
                "flex flex-col items-center gap-0",
                "font-Dalek font-bold text-3xl",
                "sm:text-5xl"
            )}
        >
            <Title />
            <motion.div
                className={cx(
                    "flex flex-col items-center gap-6",
                    "sm:gap-1",
                )}
                variants={baseVariants}
                initial='hidden'
                animate='visible'
            >
                <Button classname="w-3/5 sm:w-full" text="Single" />
                <Button classname="w-3/5 sm:w-full" text="Multiplayer" />
                <Button classname="w-3/5 sm:w-full" text="Setting" />
            </motion.div>
        </motion.div>
    );
};

export default Home;
