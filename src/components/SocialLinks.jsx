import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

const SocialLinks = () => {
  const [open, setOpen] = useState(false);
  const [animating, setAnimating] = useState(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const revealTimeouts = useRef([]);

  const links = [
    { id: 1, text: "Resume", icon: <BsFillPersonLinesFill className="text-gray-300" />, href: "/Brian-Karmo.pdf", download: "Brian-Karmo.pdf" },
    { id: 0, text: "GitHub", icon: <FaGithub className="text-white" />, href: "https://github.com/briankarmo", external: true },
  ];

  useEffect(() => {
    revealTimeouts.current.forEach(clearTimeout);
    revealTimeouts.current = [];
    if (open) {
      for (let i = 0; i < links.length; i++) {
        revealTimeouts.current.push(
          setTimeout(() => setVisibleCount(i + 1), i * 120)
        );
      }
    } else {
      setVisibleCount(0);
    }
    return () => {
      revealTimeouts.current.forEach(clearTimeout);
      revealTimeouts.current = [];
    };
  }, [open, links.length]);

  // Animation variants for the link
  const linkVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 500, damping: 20 } },
    exit: { scale: 0.5, opacity: 0, transition: { duration: 0.2 } },
  };

  // Container variants for staggered animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        when: "beforeChildren"
      }
    },
    exit: {
      transition: {
        staggerChildren: 0.08,
        staggerDirection: -1
      }
    }
  };

  const handleLinkClick = (id, href, external, download) => e => {
    setAnimating(id);
    setTimeout(() => {
      setAnimating(null);
      if (download) {
        const link = document.createElement('a');
        link.href = href;
        link.download = download;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else if (external) {
        window.open(href, '_blank', 'noopener noreferrer');
      } else {
        window.location.href = href;
      }
    }, 600); // match animation duration
    e.preventDefault();
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {/* Toggle Button for All Devices */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center bg-gradient-to-br from-cyan-400 via-blue-500 to-blue-700 text-white w-14 h-14 rounded-full shadow-2xl mb-2 border-2 border-white/10 hover:shadow-blue-400/30 focus:outline-none focus:ring-2 focus:ring-blue-400/40 transition-all duration-300"
        title={open ? "Close Social Links" : "Open Social Links"}
        whileTap={{ y: -20, scale: 1.1 }}
        whileHover={{ scale: 1.12, boxShadow: "0 0 24px 4px rgba(59,130,246,0.4)" }}
        transition={{ type: "spring", stiffness: 400, damping: 18 }}
      >
        {open ? <FiArrowLeft size={24} /> : <FiArrowRight size={24} />}
      </motion.button>

      {/* Social Links Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className={`flex flex-col items-start space-y-3 bg-gray-900/90 backdrop-blur-xl p-4 rounded-2xl shadow-2xl absolute left-0 transition-all duration-300 border border-white/10
              bottom-20 opacity-100 pointer-events-auto
            `}
            style={{ minWidth: '56px' }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {links.map(({ id, icon, text, href, external, download }, idx) => (
              <AnimatePresence key={id}>
                {visibleCount > idx && (
                  <motion.a
                    href={href}
                    className={`flex items-center justify-center text-white text-2xl bg-gradient-to-r from-gray-800/80 to-gray-700/80 hover:from-blue-800/80 hover:to-blue-700/80 border border-white/10 shadow-lg p-2 rounded-full w-14 h-14 transition-all duration-300 hover:scale-110 hover:shadow-blue-400/20 backdrop-blur-md`}
                    {...(download ? { download: "Brian-Karmo.pdf" } : external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    onClick={handleLinkClick(id, href, external, download)}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    style={{ position: 'relative', overflow: 'visible' }}
                  >
                    <span className="text-2xl drop-shadow-md">{icon}</span>
                  </motion.a>
                )}
              </AnimatePresence>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SocialLinks;
