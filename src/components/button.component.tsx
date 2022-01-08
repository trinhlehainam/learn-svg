import { FC } from "react";
import { motion, Variants } from 'framer-motion'
import cx from 'classnames'

import Icon from "../svg/icon.svg"

type Props = {
    classname: string,
    text: string
    delay: number,
};

const Button: FC<Props> = ({ classname, text, delay }) => {
    const variants: Variants = {
        hidden: {
            y: '-100vh',
        },
        visible: {
            y: '0',
            transition: {
                type: 'spring',
                stiffness: 60,
                delay: delay
            }
        },
        hover: {
            scale: 1.2,
            transition: {
                duration: 0.8,
                ease: 'linear',
            }
        }
    };

    return (
        <motion.div
            className={cx(
                "relative flex justify-center items-center btn-base cursor-pointer",
                classname
            )}
            variants={variants}
            initial='hidden'
            animate='visible'
            whileHover='hover'
        >
            <Icon />
            <div className="absolute m-auto text-center text-[#ffd58c] select-none">
                {text}
            </div>
        </motion.div>
    )
};

export default Button;
