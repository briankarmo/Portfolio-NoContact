import React from "react";
import { motion } from "framer-motion";

const MotionWrapper = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ 
        opacity: 1, 
        x: 0,
        transition: {
          duration: 0.5,
          delay: delay * 0.1,
          ease: [0.22, 1, 0.36, 1],
          type: "spring",
          stiffness: 100,
          damping: 15
        }
      }}
      viewport={{ 
        once: true,
        margin: "-50px"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper; 