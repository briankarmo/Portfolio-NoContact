import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const StickyGlowingLogo = () => {
  return (
    <motion.div
      className="fixed bottom-0 w-full z-40 pointer-events-none flex justify-center items-end"
      style={{ minHeight: '80px' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative flex justify-center items-center mb-2">
        {/* Logo - with proper spacing and mobile responsiveness */}
        <Image 
          src="/assets/bkinclogo.png"
          alt="BKINC Logo Sticky" 
          width={128}
          height={128}
          className="w-32 h-auto"
        />
      </div>
    </motion.div>
  );
};

export default StickyGlowingLogo; 