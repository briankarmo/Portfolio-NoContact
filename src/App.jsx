import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import GlowingLogo from "./components/GlowingLogo";
import StickyGlowingLogo from "./components/StickyGlowingLogo";
import { AnimationProvider, pageTransition } from "./context/AnimationContext";
import bkinclogo from "./assets/bkinclogo.png";

function App() {
  return (
    <AnimationProvider>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          ease: [0.22, 1, 0.36, 1],
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
        className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-50"></div>
        <NavBar />
        <GlowingLogo />
        <main className="relative">
          <section id="home">
            <motion.div
              variants={pageTransition}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Home />
            </motion.div>
          </section>
          <section id="about">
            <motion.div
              variants={pageTransition}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <About />
            </motion.div>
          </section>
          <section id="techstack">
            <motion.div
              variants={pageTransition}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <TechStack />
            </motion.div>
          </section>
          <section id="portfolio">
            <motion.div
              variants={pageTransition}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Portfolio />
            </motion.div>
          </section>
          <section id="logo" className="relative w-full py-16 bg-gradient-to-b from-gray-900 to-black">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 50,
                  damping: 15,
                  ease: [0.22, 1, 0.36, 1]
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col items-center justify-center space-y-4"
              >
                <motion.div 
                  className="relative group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 400,
                    damping: 17
                  }}
                >
                  {/* Animated background glow effect */}
                  <motion.div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0, 0.5, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="absolute inset-[-10px] bg-gradient-to-r from-blue-500/40 via-cyan-500/40 to-blue-500/40 rounded-full blur-xl"></div>
                    <div className="absolute inset-[-5px] bg-gradient-to-r from-blue-400/30 via-cyan-400/30 to-blue-400/30 rounded-full blur-lg"></div>
                  </motion.div>

                  {/* Pulsing ring effect */}
                  <motion.div 
                    className="absolute inset-[-2px] rounded-full"
                    initial={false}
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 0.2, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="absolute inset-0 border-2 border-blue-500/30 rounded-full"></div>
                  </motion.div>
                  
                  {/* Logo with hover effect */}
                  <motion.img 
                    src={bkinclogo} 
                    alt="BKINC Logo" 
                    className="w-32 h-auto relative z-10 transition-all duration-500 
                             group-hover:brightness-125 group-hover:contrast-125
                             group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]
                             group-active:brightness-150 group-active:contrast-150"
                    style={{
                      filter: "drop-shadow(0 0 8px rgba(59,130,246,0.3))"
                    }}
                  />

                  {/* Interactive touch feedback for mobile */}
                  <motion.div 
                    className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 group-active:opacity-0"
                    initial={false}
                    whileTap={{
                      scale: 0.9,
                      opacity: 0.2,
                      transition: { duration: 0.1 }
                    }}
                  />
                </motion.div>

                <motion.p 
                  className="text-lg text-white font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Crafting Digital Excellence
                </motion.p>
              </motion.div>
            </div>
          </section>
          <StickyGlowingLogo />
        </main>
      </motion.div>
    </AnimationProvider>
  );
}

export default App;
