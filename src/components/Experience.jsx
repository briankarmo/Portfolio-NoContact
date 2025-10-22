import React from "react";
import MotionWrapper from './MotionWrapper';

const GradientTech = ({ children }) => (
  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold">{children}</span>
);
const GradientKeyword = ({ children }) => (
  <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-white bg-clip-text text-transparent font-semibold">{children}</span>
);

// Tech data
const techs = [
  // Front-End (1–17)
  { id: 1, src: "/assets/visual.webp", title: "Visual Studio Code", style: "shadow-blue-500" },
  { id: 2, src: "/assets/figma.png", title: "Figma", style: "shadow-pink-500" },
  { id: 3, src: "/assets/html.png", title: "HTML5", style: "shadow-orange-500" },
  { id: 4, src: "/assets/css.png", title: "CSS3", style: "shadow-blue-500" },
  { id: 5, src: "/assets/javascript.png", title: "JavaScript", style: "shadow-yellow-400" },
  { id: 6, src: "/assets/ajax.png", title: "Ajax", style: "shadow-blue-300" },
  { id: 7, src: "/assets/jquery.png", title: "jQuery", style: "shadow-blue-800" },
  { id: 8, src: "/assets/googlemaps.png", title: "Google Maps API", style: "shadow-red-600" },
  { id: 9, src: "/assets/typescript.png", title: "TypeScript", style: "shadow-blue-600" },
  { id: 10, src: "/assets/tailwind.png", title: "Tailwind CSS", style: "shadow-cyan-400" },
  { id: 11, src: "/assets/react.png", title: "React JS", style: "shadow-sky-400" },
  { id: 12, src: "/assets/vue.png", title: "Vue.js", style: "shadow-green-400" },
  { id: 13, src: "/assets/angular.png", title: "Angular", style: "shadow-red-600" },
  { id: 14, src: "/assets/redux.png", title: "Redux", style: "shadow-purple-500" },
  { id: 15, src: "/assets/next.png", title: "Next.js", style: "shadow-white" },
  { id: 16, src: "/assets/reactnative.png", title: "React Native", style: "shadow-sky-400" },
  { id: 17, src: "/assets/vite.png", title: "Vite", style: "shadow-purple-500" },

  // Back-End (18–30)
  { id: 18, src: "/assets/node.png", title: "Node.js", style: "shadow-green-500" },
  { id: 19, src: "/assets/express.png", title: "Express.js", style: "shadow-orange-500" },
  { id: 20, src: "/assets/nest.png", title: "NestJS", style: "shadow-red-600" },
  { id: 21, src: "/assets/php.png", title: "PHP", style: "shadow-purple-400" },
  { id: 22, src: "/assets/laravel.png", title: "Laravel", style: "shadow-red-500" },
  { id: 23, src: "/assets/python.png", title: "Python", style: "shadow-yellow-400" },
  { id: 24, src: "/assets/mongo.png", title: "MongoDB", style: "shadow-green-500" },
  { id: 25, src: "/assets/mysql.png", title: "MySQL", style: "shadow-blue-500" },
  { id: 26, src: "/assets/postgresql.webp", title: "PostgreSQL", style: "shadow-blue-600" },
  { id: 27, src: "/assets/prisma.webp", title: "Prisma", style: "shadow-pink-700" },
  { id: 28, src: "/assets/rust.png", title: "Rust", style: "shadow-orange-900" },
  { id: 29, src: "/assets/mern.png", title: "MERN Stack", style: "shadow-orange-500" },
  { id: 30, src: "/assets/liquid.jpg", title: "Shopify Liquid", style: "shadow-green-400" },

  // Tools & Hosting / Integrations & Payments (31–47)
  { id: 31, src: "/assets/aws.png", title: "AWS", style: "shadow-orange-500" },
  { id: 32, src: "/assets/Azure.png", title: "Azure", style: "shadow-blue-500" },
  { id: 33, src: "/assets/googlecloud.png", title: "Google Cloud", style: "shadow-blue-400" },
  { id: 34, src: "/assets/docker.png", title: "Docker", style: "shadow-blue-400" },
  { id: 35, src: "/assets/cicd.webp", title: "CI/CD", style: "shadow-green-400" },
  { id: 36, src: "/assets/api.png", title: "REST APIs", style: "shadow-red-500" },
  { id: 37, src: "/assets/graphql.png", title: "GraphQL", style: "shadow-pink-500" },
  { id: 38, src: "/assets/Postman.png", title: "Postman", style: "shadow-orange-500" },
  { id: 39, src: "/assets/chatgptapi.png", title: "ChatGPT API", style: "shadow-yellow-500" },
  { id: 40, src: "/assets/openai.png", title: "OpenAI", style: "shadow-white" },
  { id: 41, src: "/assets/firebase.png", title: "Firebase", style: "shadow-yellow-400" },
  { id: 42, src: "/assets/stripe.png", title: "Stripe", style: "shadow-indigo-500" },
  { id: 43, src: "/assets/paypal.webp", title: "PayPal API", style: "shadow-blue-800" },
  { id: 44, src: "/assets/github.webp", title: "GitHub", style: "shadow-purple-800" },
  { id: 45, src: "/assets/agile.png", title: "Agile", style: "shadow-blue-500" },
  { id: 46, src: "/assets/Cypress.webp", title: "Cypress", style: "shadow-green-400" },
  { id: 47, src: "/assets/jest.png", title: "Jest", style: "shadow-red-600" },
];

// Individual card component
const TechCard = ({ src, title, style, index }) => (
  <MotionWrapper delay={index * 0.1}>
  <div
    className={`${style} flex flex-col items-center rounded-lg p-3 sm:p-4 shadow-lg transition-all duration-300 hover:scale-105 bg-gray-900 bg-opacity-40 backdrop-blur-sm`}
  >
    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center">
      <img 
        src={src} 
        alt={title} 
        width="112"
        height="112"
        className="w-full h-full object-contain transform hover:rotate-3 transition-transform duration-300"
      />
    </div>
    <p className="mt-2 sm:mt-3 text-center text-xs sm:text-sm md:text-base font-medium">
      <GradientTech>{title}</GradientTech>
    </p>
  </div>
  </MotionWrapper>
);

// Main Experience section
const Experience = () => (
  <section
    id="experience"
    className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen py-16 px-4 sm:px-6 md:px-8"
  >
    <div className="max-w-screen-xl mx-auto flex flex-col justify-center w-full text-white">
      {/* Heading */}
      <MotionWrapper>
      <div className="text-center mb-8 sm:mb-12">
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold inline border-b-4 border-green-600">
          <GradientTech>Experience</GradientTech>
        </p>
        <p className="mt-4 text-sm sm:text-base max-w-2xl mx-auto">
          <GradientKeyword>Technologies</GradientKeyword> I&apos;ve worked with to build <GradientKeyword>high‑performance applications</GradientKeyword>:
        </p>
      </div>
      </MotionWrapper>

      {/* Tech Grid */}
      <MotionWrapper delay={0.2}>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
          {techs.map((tech, index) => (
            <TechCard key={tech.id} {...tech} index={index} />
        ))}
      </div>
      </MotionWrapper>

      {/* BK Inc Logo */}
      <MotionWrapper delay={0.4}>
      <div className="flex flex-col items-center justify-center mt-12 sm:mt-16 lg:mt-20">
        <div className="relative group">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Logo container */}
          <div className="relative">
            <img
              src="/assets/bkinclogo.png"
              alt="BK Inc Logo"
              width="144"
              height="144"
              className="w-20 sm:w-28 md:w-32 lg:w-36 h-auto object-contain 
                       filter brightness-90 contrast-125
                       transform transition-all duration-500 
                       group-hover:brightness-110 group-hover:contrast-100 group-hover:scale-105"
            />
          </div>
        </div>
        
        {/* Tagline */}
        <p className="mt-4 text-xs sm:text-sm md:text-base text-center font-light tracking-wider">
          <GradientKeyword>Crafting Digital Excellence</GradientKeyword>
        </p>
      </div>
      </MotionWrapper>
    </div>
  </section>
);

export default Experience;
