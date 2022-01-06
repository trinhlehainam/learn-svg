import { motion } from 'framer-motion'
import cx from 'classnames'

import Button from './components/button.component';

const App = () => {
    return (
        <motion.div
            className={cx(
                "flex flex-col gap-2 justify-center items-center",
                "min-h-screen bg-purple-900",
                "font-Odinson font-bold text-4xl"
            )}>
            <Button classname="" text="Play" />
            <Button classname="" text="Options" />
            <Button classname="" text="Quit" />
        </motion.div>
    );
}

export default App;
