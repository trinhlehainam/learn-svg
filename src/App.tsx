import React from 'react';
import { motion } from 'framer-motion'
import Icon from './svg/icon.svg';

function App() {
  return (
    <motion.div className="flex justify-center items-center min-h-screen bg-purple-900">
        <Icon />
    </motion.div>
  );
}

export default App;
