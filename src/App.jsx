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
        {/* Enhanced 3D Background Effects */}
        <div className="absolute inset-0">
          {/* Main gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800/90 via-gray-900/95 to-black/90"></div>
          
          {/* Subtle grid pattern for depth */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          
          {/* Radial gradient for depth */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800/80 via-gray-900/90 to-black/95"></div>
          
          {/* Ambient light effect */}
          <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gray-700/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gray-700/10 rounded-full blur-[120px]"></div>
          
          {/* Subtle noise texture */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-20"></div>
        </div>

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
          <StickyGlowingLogo />
        </main>
      </motion.div>
    </AnimationProvider>
  );
}

export default App;
