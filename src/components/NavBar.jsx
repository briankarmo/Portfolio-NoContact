import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "techstack" },
    { id: 4, link: "portfolio" },
  ];

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <motion.p 
              className="text-xs sm:text-sm lg:text-base font-signature bg-gradient-to-r from-purple-500 via-blue-500 to-white bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Full Stack Developer
            </motion.p>
            <motion.h1 
              className="text-2xl sm:text-3xl lg:text-4xl font-signature bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              style={{ fontFamily: "'Dancing Script', 'Pacifico', 'font-signature', cursive" }}
            >
              BRIAN
            </motion.h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {links.map(({ id, link }, index) => (
              <motion.div
                key={id}
                custom={index}
                variants={linkVariants}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <a
                  href={`#${link}`}
                  className="relative px-3 py-2 text-sm lg:text-base font-medium text-gray-300 
                            hover:text-white transition-all duration-300 cursor-pointer capitalize
                            group"
                >
                  {link}
                  <motion.span 
                    className="absolute bottom-0 left-0 h-0.5 bg-cyan-400"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </a>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNav}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg 
                     text-gray-300 hover:text-white hover:bg-gray-800/50 
                     focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500
                     transition-all duration-300 backdrop-blur-sm z-[110]"
            aria-expanded={nav}
            aria-label={nav ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={nav ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-0 bg-gradient-to-b from-black/98 via-black/95 to-black/98 backdrop-blur-lg z-[105]"
          >
            {/* Menu Items Container */}
            <div className="flex flex-col items-center justify-center min-h-screen w-full py-20 space-y-6">
              <div className="text-center mb-8">
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-sm sm:text-base font-signature bg-gradient-to-r from-purple-500 via-blue-500 to-white bg-clip-text text-transparent mb-2"
                >
                  Full Stack Developer
                </motion.p>
                <motion.h1 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-4xl sm:text-5xl font-signature bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent pt-12 sm:pt-16"
                  style={{ fontFamily: "'Dancing Script', 'Pacifico', 'font-signature', cursive" }}
                >
                  BRIAN
                </motion.h1>
              </div>

              {links.map(({ id, link }, index) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: index * 0.1 + 0.6,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  <a
                    onClick={() => setNav(false)}
                    href={`#${link}`}
                    className="relative text-xl sm:text-2xl font-medium 
                             cursor-pointer capitalize px-6 py-2
                             w-full text-center transform transition-all duration-500
                             hover:scale-110 group
                             bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent
                             hover:from-blue-500 hover:to-cyan-500"
                  >
                    {link}
                    <motion.span 
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 
                               bg-gradient-to-r from-cyan-500 to-blue-500"
                      initial={{ width: 0 }}
                      whileHover={{ width: "6rem" }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const linkVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

export default NavBar;
