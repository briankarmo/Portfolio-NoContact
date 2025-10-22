import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const GlowingLogo = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <motion.div
      className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 pointer-events-auto w-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div 
        className="relative group flex justify-center items-center cursor-pointer"
        onClick={handleClick}
      >
        {/* Simple logo without metallic background */}
        <Image 
          src="/assets/bkinclogo.png"
          alt="BKINC Logo" 
          width={112}
          height={112}
          className="w-28 h-auto"
        />
      </div>
    </motion.div>
  );
};

export default GlowingLogo; 