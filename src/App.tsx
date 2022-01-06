import React from 'react';
import { motion } from 'framer-motion'
import Icon from './svg/icon.svg';

function App() {
    return (
        <motion.div className="flex flex-col gap-2 justify-center items-center min-h-screen bg-purple-900">
            <div className="relative flex justify-center items-center btn-base">
                <Icon />
                <div className="absolute m-auto text-center text-[#ffd58c] font-bold text-3xl">Play</div>
            </div>
            <div className="relative flex justify-center items-center btn-base">
                <Icon />
                <div className="absolute m-auto text-center text-[#ffd58c] font-bold text-3xl">Option</div>
            </div>
            <div className="relative flex justify-center items-center btn-base">
                <Icon />
                <div className="absolute m-auto text-center text-[#ffd58c] font-bold text-3xl">Quit</div>
            </div>
        </motion.div>
    );
}

export default App;
