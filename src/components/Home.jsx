import React, { useEffect } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";
import Image from "next/image";

const GradientTech = ({ children }) => (
  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold">{children}</span>
);
const GradientKeyword = ({ children }) => (
  <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-white bg-clip-text text-transparent font-semibold">{children}</span>
);

const Home = () => {
  const [isImageActive, setIsImageActive] = React.useState(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    });

    // Prevent scroll on refresh
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    // Cleanup function
    return () => {
      window.history.scrollRestoration = 'auto';
    };
  }, []);

  const handleImageClick = () => {
    setIsImageActive(!isImageActive);
  };

  const categories = [
    {
      title: <GradientTech>Development</GradientTech>,
      items: [
        <><GradientKeyword>Full-Stack</GradientKeyword> Web Development</>,
        <><GradientKeyword>Mobile-First</GradientKeyword> Responsive Design</>,
        <><GradientKeyword>Cross-Platform</GradientKeyword> Compatibility</>,
        <><GradientKeyword>Performance</GradientKeyword> Optimization</>
      ]
    },
    {
      title: <GradientTech>Technical</GradientTech>,
      items: [
        <><GradientKeyword>Modern Framework</GradientKeyword> Implementation</>,
        <><GradientTech>API</GradientTech> Integration & Development</>,
        <><GradientKeyword>Database</GradientKeyword> Architecture</>,
        <><GradientKeyword>Cloud Services</GradientKeyword> Management</>
      ]
    },
    {
      title: <GradientTech>Professional</GradientTech>,
      items: [
        <><GradientKeyword>Project Management</GradientKeyword></>,
        <><GradientKeyword>Technical Documentation</GradientKeyword></>,
        <><GradientKeyword>Team Collaboration</GradientKeyword></>,
        <><GradientKeyword>Problem-Solving</GradientKeyword></>
      ]
    }
  ];

  return (
    <motion.section 
      id="home" 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
        type: "spring",
        stiffness: 50,
        damping: 15
      }}
      className="relative w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 flex flex-col items-start overflow-hidden pt-16 sm:pt-20 pb-0"
    >
      {/* Background Blur Effects - Full coverage */}
      <div className="fixed inset-0 w-full h-full -z-10" style={{ position: 'absolute' }}>
        {/* Main gradient overlay */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-800/90 via-gray-900/95 to-black/90"></div>
        
        {/* Subtle grid pattern for depth */}
        <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        
        {/* Radial gradient for depth */}
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800/80 via-gray-900/90 to-black/95"></div>
        
        {/* Ambient light effect */}
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gray-700/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gray-700/10 rounded-full blur-[120px]"></div>
      </div>
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/95 via-gray-900/90 to-black/95 backdrop-blur-[1px]"></div>

      <div className="relative w-full max-w-screen-2xl mx-auto px-3 sm:px-5 lg:px-6 xl:px-10 mt-2 sm:mt-1 mb-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12 xl:gap-16 w-full">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.8,
              ease: [0.22, 1, 0.36, 1] 
            }}
            className="order-2 lg:order-1 flex-1 text-center lg:text-left mt-4 sm:mt-0"
          >
            <div className="space-y-3 sm:space-y-4 max-w-2xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="w-full backdrop-blur-sm bg-gray-900/30 p-3 sm:p-4 rounded-2xl"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-signature font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent whitespace-normal">
                  BRIAN
                </h1>
                <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-purple-500 via-blue-500 to-white bg-clip-text text-transparent">
                  Full-Stack Software Engineer
                </h2>
              </motion.div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.8,
              ease: [0.22, 1, 0.36, 1] 
            }}
            className="order-1 lg:order-2 flex-1 flex justify-center items-center w-full"
          >
            <div 
              className="relative group w-full max-w-[320px] sm:max-w-[380px] md:max-w-md lg:max-w-lg xl:max-w-xl cursor-pointer"
              onClick={handleImageClick}
            >
              {/* Background - seamlessly blends with application background */}
              <div className={`absolute -inset-2 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl transition-all duration-700 ${
                isImageActive 
                  ? 'shadow-[0_0_20px_rgba(255,255,255,0.08)]' 
                  : ''
              }`}></div>
              
              {/* Border - very subtle highlight when active */}
              <div className={`absolute -inset-2 rounded-xl p-[1px] transition-all duration-700 ${
                isImageActive
                  ? 'bg-gradient-to-br from-white/15 via-gray-300/8 to-white/15'
                  : 'bg-transparent'
              }`}></div>
              
              {/* Very subtle highlight glow when clicked */}
              {isImageActive && (
                <div className="absolute -inset-3 bg-white/3 rounded-2xl blur-lg"></div>
              )}
              
              {/* Image container with padding to prevent layout shift */}
              <div className="relative block w-full p-2 sm:p-3">
                <Image
                  src="/heroimage.png"
                  alt="Hero"
                  width={600}
                  height={600}
                  className={`w-full h-auto rounded-2xl transition-all duration-700 relative z-10 ${
                    isImageActive 
                      ? 'brightness-103 drop-shadow-[0_0_12px_rgba(255,255,255,0.1)]' 
                      : ''
                  }`}
                  priority
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'translateZ(0)',
                    WebkitTransform: 'translateZ(0)',
                    maxWidth: '100%',
                    height: 'auto',
                    display: 'block',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="mt-6 sm:mt-10 lg:mt-14 mb-28 sm:mb-24 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-4"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="backdrop-blur-sm bg-gray-900/30 p-4 sm:p-6 rounded-2xl h-full flex flex-col w-full max-w-md mx-auto md:max-w-none"
            >
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-center">{category.title}</h3>
              <ul className="space-y-2 sm:space-y-3 flex-1 max-w-xs mx-auto md:max-w-none">
                {category.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ 
                      duration: 0.4,
                      delay: 0.1 * itemIndex,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="flex items-start text-gray-200 text-sm sm:text-base"
                  >
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent flex-shrink-0 text-lg mr-3 mt-0.5 w-4">•</span>
                    <span className="leading-relaxed flex-1">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Portfolio CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 0.8,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="mt-6 sm:mt-10 lg:mt-14 mb-28 sm:mb-24 flex justify-center"
        >
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium cursor-pointer"
          >
            {/* Button Background with Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg"></div>
            <div className="absolute inset-[1px] bg-gradient-to-br from-gray-900/90 via-gray-900/95 to-black/90 rounded-lg"></div>
            
            {/* Button Content */}
            <div className="relative flex items-center space-x-2 text-white group-hover:text-cyan-100 transition-colors duration-300">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:from-white group-hover:to-cyan-100">
                View Portfolio
              </span>
              <MdOutlineKeyboardArrowRight 
                size={24} 
                className="transform group-hover:translate-x-1 transition-transform duration-300 text-cyan-400 group-hover:text-white" 
              />
            </div>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;