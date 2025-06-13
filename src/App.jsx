import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import UpworkLogo from "./components/UpworkLogo";
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
      <main>
          <AnimatePresence mode="wait">
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
            <section id="logo" className="relative w-full py-16 px-4 bg-gradient-to-b from-gray-900 to-black mt-10 mb-20">
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
                  <div className="relative group">
                    {/* Enhanced glow effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      {/* Outer glow */}
                      <div className="absolute inset-[-8px] bg-blue-600/40 rounded-full blur-md"></div>
                      {/* Middle glow */}
                      <div className="absolute inset-[-4px] bg-blue-500/50 rounded-full blur-sm"></div>
                      {/* Inner glow */}
                      <div className="absolute inset-[-2px] bg-blue-400/60 rounded-full"></div>
                    </div>
                    
                    {/* Logo with enhanced shadow */}
                    <img 
                      src={bkinclogo} 
                      alt="BKINC Logo" 
                      className="w-32 h-auto relative z-10 transition-all duration-500 group-hover:brightness-125 group-hover:contrast-125 group-hover:shadow-blue-500/40"
                    />
                  </div>
                  <p className="text-lg text-white font-medium">Crafting Digital Excellence</p>
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
            {/* Footer Section */}
            <footer className="w-full h-20 bg-black/50 backdrop-blur-sm">
              <div className="max-w-screen-xl mx-auto h-full flex items-center justify-center">
                <p className="text-gray-400 text-sm">© 2025 BKINC. All rights reserved.</p>
              </div>
            </footer>
          </AnimatePresence>
      </main>
      <UpworkLogo />
      </motion.div>
    </AnimationProvider>
  );
}

export default App;
