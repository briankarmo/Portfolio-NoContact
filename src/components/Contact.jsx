import React from "react";
import { FiMail, FiUser, FiMessageSquare } from "react-icons/fi";
import MotionWrapper from './MotionWrapper';
import Image from "next/image";

// Gradient Components
const GradientTech = ({ children }) => (
  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-medium">
    {children}
  </span>
);

const GradientKeyword = ({ children }) => (
  <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-white bg-clip-text text-transparent font-medium">
    {children}
  </span>
);

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-12 pb-40 sm:pb-44 md:pb-48 relative">
        {/* Header Section */}
        <MotionWrapper>
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold inline-block border-b-4 border-gray-500 pb-2">
              <GradientTech>Let&apos;s Connect</GradientTech>
            </h2>
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-sm sm:text-base">
              I&apos;m always <GradientKeyword>interested</GradientKeyword> in hearing about <GradientKeyword>new projects</GradientKeyword> and <GradientKeyword>opportunities</GradientKeyword>. 
              Whether you have a <GradientKeyword>question</GradientKeyword> or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
          </div>
        </MotionWrapper>

        {/* Form Section */}
        <div className="max-w-2xl mx-auto">
          <form
            action="https://getform.io/f/a1c1d2c3-d4e5-f6g7-h8i9-j0k1l2m3n4o5"
            method="POST"
            className="flex flex-col gap-6"
          >
            {/* Name Input */}
            <MotionWrapper delay={0.2}>
              <div className="relative group">
                <div className="absolute top-3 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-cyan-400">
                  <FiUser className="h-5 w-5" />
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="block w-full pl-10 pr-3 py-3 bg-gray-800/50 border border-gray-700 rounded-lg
                           text-white placeholder-gray-400
                           focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent
                           transition-all duration-300"
                />
              </div>
            </MotionWrapper>

            {/* Email Input */}
            <MotionWrapper delay={0.3}>
              <div className="relative group">
                <div className="absolute top-3 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-cyan-400">
                  <FiMail className="h-5 w-5" />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="block w-full pl-10 pr-3 py-3 bg-gray-800/50 border border-gray-700 rounded-lg
                           text-white placeholder-gray-400
                           focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent
                           transition-all duration-300"
                />
              </div>
            </MotionWrapper>

            {/* Message Input */}
            <MotionWrapper delay={0.4}>
              <div className="relative group">
                <div className="absolute top-3 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-cyan-400">
                  <FiMessageSquare className="h-5 w-5" />
                </div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  required
                  className="block w-full pl-10 pr-3 py-3 bg-gray-800/50 border border-gray-700 rounded-lg
                           text-white placeholder-gray-400
                           focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent
                           transition-all duration-300 resize-none"
                />
              </div>
            </MotionWrapper>

            {/* Submit Button */}
            <MotionWrapper delay={0.5}>
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="px-8 py-3 text-white font-medium bg-gradient-to-r from-cyan-500 to-blue-500
                           rounded-lg transform transition-all duration-300
                           hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]
                           focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <GradientKeyword>Send Message</GradientKeyword>
                </button>
              </div>
            </MotionWrapper>

            {/* Contact Info */}
            <MotionWrapper delay={0.6}>
              <div className="mt-12 text-center">
                <p className="text-gray-400 text-sm">
                  Prefer <GradientKeyword>email</GradientKeyword>? Reach me directly at{' '}
                  <a 
                    href="mailto:briankarmo@briankarmo.com"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                  >
                    <GradientTech>briankarmo@briankarmo.com</GradientTech>
                  </a>
                </p>
              </div>
            </MotionWrapper>

            {/* Social Platform Images */}
            <MotionWrapper delay={0.7}>
              <div className="flex justify-center items-center gap-16 sm:gap-20 mt-8 mb-12 sm:mb-16 md:mb-20">
                <a 
                  href="https://www.upwork.com/freelancers/briankarmo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition-all duration-300 hover:scale-105"
                >
                  <Image 
                    src="/assets/upwork.png"
                    alt="Upwork Profile" 
                    width={128}
                    height={128}
                    className="h-28 sm:h-32 w-auto rounded-lg shadow-lg hover:shadow-cyan-500/20"
                  />
                </a>
                <a 
                  href="https://www.linkedin.com/in/briankarmo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition-all duration-300 hover:scale-105"
                >
                  <Image 
                    src="/assets/linkedin.webp"
                    alt="LinkedIn Profile" 
                    width={128}
                    height={128}
                    className="h-28 sm:h-32 w-auto rounded-lg shadow-lg hover:shadow-cyan-500/20"
                  />
                </a>
              </div>
            </MotionWrapper>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
