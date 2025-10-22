import React, { useEffect } from "react";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';

const GradientTech = ({ children }) => (
  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold">{children}</span>
);
const GradientKeyword = ({ children }) => (
  <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-white bg-clip-text text-transparent font-semibold">{children}</span>
);

const categories = {
  frontend: {
    title: "Front-End Technologies",
    subcategories: {
      languages: {
        title: "Languages",
        techs: [
          { id: 1, src: "/assets/html.png", title: "HTML5" },
          { id: 2, src: "/assets/css.png", title: "CSS3" },
          { id: 3, src: "/assets/javascript.png", title: "JavaScript" },
          { id: 4, src: "/assets/typescript.png", title: "TypeScript" },
        ],
      },
      frameworks: {
        title: "Frameworks",
        techs: [
          { id: 5, src: "/assets/react.png", title: "React" },
          { id: 6, src: "/assets/vue.png", title: "Vue.js" },
          { id: 7, src: "/assets/angular.png", title: "Angular" },
          { id: 8, src: "/assets/next.png", title: "Next.js" },
          { id: 9, src: "/assets/reactnative.png", title: "React Native" },
          { id: 10, src: "/assets/vite.png", title: "Vite" },
        ],
      },
      libraries: {
        title: "Libraries & Tools",
        techs: [
          { id: 11, src: "/assets/tailwind.png", title: "Tailwind CSS" },
          { id: 12, src: "/assets/jquery.png", title: "jQuery" },
          { id: 13, src: "/assets/redux.png", title: "Redux" },
          { id: 14, src: "/assets/ajax.png", title: "Ajax" },
        ],
      },
    },
  },
  backend: {
    title: "Back-End Technologies",
    subcategories: {
      languages: {
        title: "Languages & Runtime",
        techs: [
          { id: 16, src: "/assets/node.png", title: "Node.js" },
          { id: 17, src: "/assets/python.png", title: "Python" },
          { id: 18, src: "/assets/php.png", title: "PHP" },
          { id: 19, src: "/assets/rust.png", title: "Rust" },
        ],
      },
      frameworks: {
        title: "Frameworks",
        techs: [
          { id: 20, src: "/assets/express.png", title: "Express.js" },
          { id: 21, src: "/assets/laravel.png", title: "Laravel" },
          { id: 22, src: "/assets/nest.png", title: "NestJS" },
          { id: 23, src: "/assets/mern.png", title: "MERN Stack" },
          { id: 24, src: "/assets/liquid.jpg", title: "Shopify Liquid" },
        ],
      },
      databases: {
        title: "Databases & Query Languages",
        techs: [
          { id: 25, src: "/assets/mongo.png", title: "MongoDB" },
          { id: 26, src: "/assets/mysql.png", title: "MySQL" },
          { id: 27, src: "/assets/postgresql.webp", title: "PostgreSQL" },
          { id: 28, src: "/assets/firebase.png", title: "Firebase DB" },
          { id: 29, src: "/assets/prisma.webp", title: "Prisma" },
          { id: 30, src: "/assets/graphql.png", title: "GraphQL" },
        ],
      },
    },
  },
  cloud: {
    title: "Cloud & DevOps",
    subcategories: {
      cloud: {
        title: "Cloud Services",
        techs: [
          { id: 31, src: "/assets/aws.png", title: "AWS" },
          { id: 32, src: "/assets/Azure.png", title: "Azure" },
          { id: 33, src: "/assets/googlecloud.png", title: "Google Cloud" },
          { id: 34, src: "/assets/firebase.png", title: "Firebase" },
        ],
      },
      devops: {
        title: "DevOps & Testing",
        techs: [
          { id: 35, src: "/assets/docker.png", title: "Docker" },
          { id: 36, src: "/assets/github.webp", title: "GitHub" },
          { id: 37, src: "/assets/cicd.webp", title: "CI/CD" },
          { id: 38, src: "/assets/agile.png", title: "Agile" },
          { id: 39, src: "/assets/Cypress.webp", title: "Cypress" },
          { id: 40, src: "/assets/jest.png", title: "Jest" },
        ],
      },
    },
  },
  tools: {
    title: "Tools & APIs",
    subcategories: {
      payment: {
        title: "APIs & Integration",
        techs: [
          { id: 41, src: "/assets/stripe.png", title: "Stripe" },
          { id: 42, src: "/assets/paypal.webp", title: "PayPal API" },
          { id: 43, src: "/assets/api.png", title: "REST APIs" },
          { id: 44, src: "/assets/Postman.png", title: "Postman" },
          { id: 45, src: "/assets/googlemaps.png", title: "Google Maps API" },
          { id: 46, src: "/assets/chatgptapi.png", title: "ChatGPT API" },
          { id: 47, src: "/assets/openai.png", title: "OpenAI" },
        ],
      },
      design: {
        title: "Design & IDE",
        techs: [
          { id: 48, src: "/assets/visual.webp", title: "VS Code" },
          { id: 49, src: "/assets/cursor.png", title: "Cursor IDE" },
          { id: 50, src: "/assets/figma.png", title: "Figma" },
        ],
      },
    },
  },
};

const TechCard = ({ src, title, index }) => (
  <div 
    className="group flex flex-col items-center justify-between p-4 rounded-lg bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 mx-auto w-full max-w-[160px] h-[160px]"
    data-aos="zoom-in"
    data-aos-delay={50 * index}
  >
    <div className="flex items-center justify-center w-full h-[80px]">
      <div className="w-[50px] h-[50px] flex items-center justify-center sm:w-[60px] sm:h-[60px] relative">
        <Image
          src={src}
          alt={title}
          width={60}
          height={60}
          className="w-full h-full object-contain transform transition-all duration-300 group-hover:scale-110 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
    <div className="w-full h-[40px] flex items-center justify-center">
      <p className="text-sm text-center font-medium group-hover:text-white transition-colors duration-300 line-clamp-2 sm:px-2">
        <GradientTech>{title}</GradientTech>
      </p>
    </div>
  </div>
);

const SubCategory = ({ title, techs, categoryIndex }) => (
  <div 
    className="mb-12 backdrop-blur-sm bg-gray-900/30 p-6 rounded-2xl"
    data-aos="fade-up"
    data-aos-delay={100 * categoryIndex}
  >
    <h3 className="text-lg font-semibold text-center mb-8">
      <GradientKeyword>{title}</GradientKeyword>
    </h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 place-items-center mx-auto max-w-6xl">
      {techs.map((tech, index) => (
        <TechCard key={tech.id} {...tech} index={index} />
      ))}
    </div>
  </div>
);

const Category = ({ title, subcategories, index }) => (
  <div 
    className="mb-16 backdrop-blur-sm bg-gray-900/30 p-6 rounded-2xl"
    data-aos="fade-up"
    data-aos-delay={200 * index}
  >
    <h2 className="text-2xl font-bold mb-10 pb-2 border-b-2 border-cyan-500/50 text-center">
      <GradientKeyword>{title}</GradientKeyword>
    </h2>
    <div className="space-y-16">
      {Object.values(subcategories).map((subcat, subIndex) => (
        <SubCategory key={subIndex} {...subcat} categoryIndex={subIndex} />
      ))}
    </div>
  </div>
);

const TechStack = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return (
    <section
      name="techstack"
      className="relative w-full min-h-screen bg-gradient-to-b from-gray-800 to-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Blur Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-cyan-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-[120px]"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800/95 to-black/95 backdrop-blur-[1px]"></div>

      <div className="relative max-w-screen-xl mx-auto">
        <div 
          className="text-center mb-16 backdrop-blur-sm bg-gray-900/30 p-6 rounded-2xl"
          data-aos="fade-down"
        >
          <h1 className="text-4xl font-bold inline-block border-b-4 border-cyan-500">
            <GradientTech>Tech Stack</GradientTech>
          </h1>
          <p 
            className="text-gray-100 mt-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            A <GradientKeyword>comprehensive overview</GradientKeyword> of the <GradientKeyword>technologies</GradientKeyword> I work with:
          </p>
        </div>

        <div className="space-y-20">
          {Object.entries(categories).map(([key, category], index) => (
            <Category key={key} {...category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack; 