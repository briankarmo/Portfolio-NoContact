import React from 'react';
import MotionWrapper from './MotionWrapper';

const GradientLabel = ({ children }) => (
  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold">{children}</span>
);
const GradientTech = ({ children }) => (
  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold">{children}</span>
);
const GradientKeyword = ({ children }) => (
  <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-white bg-clip-text text-transparent font-semibold">{children}</span>
);

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-8 sm:py-12 scroll-mt-20"
      aria-label="About Me Section"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <MotionWrapper>
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold border-b-4 border-blue-500 inline-block pb-2">
            <GradientTech>About Me</GradientTech>
          </h2>
        </div>
        </MotionWrapper>



        {/* Main Content */}
        <div className="space-y-6 text-base sm:text-lg">
          {/* All Paragraphs Container */}
          <div className="space-y-6">
            {/* Journey & Skills */}
            <MotionWrapper delay={0.2}>
            <div className="bg-gray-900/30 rounded-lg p-6 mx-4 sm:mx-0">
              <p className="text-gray-200 leading-relaxed sm:leading-loose m-0">
                My journey as a developer began with a profound passion for <GradientKeyword>web design</GradientKeyword>, 
                quickly evolving into a deep love for <GradientKeyword>coding</GradientKeyword> and <GradientKeyword>creative problem-solving</GradientKeyword>. I build <GradientKeyword>dynamic</GradientKeyword>, <GradientKeyword>interactive</GradientKeyword>, 
                and <GradientKeyword>responsive</GradientKeyword> applications using powerful <GradientTech>front-end frameworks</GradientTech> such 
                as <GradientTech>React.js</GradientTech>, <GradientTech>Next.js</GradientTech>, and <GradientTech>Vue.js</GradientTech>, elegantly paired with <GradientTech>Tailwind CSS</GradientTech> to create <GradientKeyword>clean</GradientKeyword>, <GradientKeyword>efficient</GradientKeyword>, 
                and visually appealing designs.
              </p>
            </div>
            </MotionWrapper>

            {/* Backend Expertise */}
            <MotionWrapper delay={0.4}>
            <div className="bg-gray-900/30 rounded-lg p-6 mx-4 sm:mx-0">
              <p className="text-gray-200 leading-relaxed sm:leading-loose m-0">
                On the backend, I utilize robust languages like <GradientTech>Python</GradientTech>, <GradientTech>PHP</GradientTech>, and <GradientTech>Node.js</GradientTech>, along with frameworks such as <GradientTech>Laravel</GradientTech>, to craft <GradientKeyword>reliable</GradientKeyword> and <GradientKeyword>scalable</GradientKeyword> solutions. <GradientTech>APIs</GradientTech> form the backbone of my applications, 
                enabling <GradientKeyword>seamless integration</GradientKeyword> of external services to significantly enhance functionality 
                and elevate user experiences.
              </p>
            </div>
            </MotionWrapper>

            {/* Development Practices */}
            <MotionWrapper delay={0.6}>
            <div className="bg-gray-900/30 rounded-lg p-6 mx-4 sm:mx-0">
              <p className="text-gray-200 leading-relaxed sm:leading-loose m-0">
                Meticulous <GradientKeyword>version control</GradientKeyword> practices through <GradientTech>GitHub</GradientTech> ensure <GradientKeyword>efficient project management</GradientKeyword>, <GradientKeyword>collaborative workflows</GradientKeyword>, and <GradientKeyword>maintainable codebases</GradientKeyword>. My dedication to refining <GradientKeyword>UI/UX development</GradientKeyword> is evident in my consistent focus on creating <GradientKeyword>intuitive</GradientKeyword>, <GradientKeyword>user-friendly interfaces</GradientKeyword> that engage and retain users.
              </p>
            </div>
            </MotionWrapper>

            {/* eCommerce Expertise */}
            <MotionWrapper delay={0.8}>
            <div className="bg-gray-900/30 rounded-lg p-6 mx-4 sm:mx-0">
              <p className="text-gray-200 leading-relaxed sm:leading-loose m-0">
                With specialized expertise in custom <GradientTech>Shopify Liquid coding</GradientTech>,
                I enhance <GradientTech>eCommerce platforms</GradientTech>, showcasing an <GradientKeyword>innovative approach</GradientKeyword> and delivering <GradientKeyword>impactful results</GradientKeyword> within the <GradientTech>digital marketplace</GradientTech>.
              </p>
            </div>
            </MotionWrapper>

            {/* Security & Infrastructure */}
            <MotionWrapper delay={1}>
            <div className="bg-gray-900/30 rounded-lg p-6 mx-4 sm:mx-0">
              <p className="text-gray-200 leading-relaxed sm:leading-loose m-0">
                For <GradientKeyword>secure payment systems</GradientKeyword> and <GradientKeyword>data protection</GradientKeyword>, I implement <GradientKeyword>advanced encryption methods</GradientKeyword> alongside trusted third-party services. 
                I work with tools and platforms such as <GradientTech>Stripe</GradientTech> for <GradientKeyword>reliable payment processing</GradientKeyword>, and <GradientTech>Firebase</GradientTech> for <GradientKeyword>real-time backend infrastructure</GradientKeyword>, <GradientKeyword>user authentication</GradientKeyword>, and <GradientKeyword>data management</GradientKeyword>. I further support <GradientKeyword>scalability</GradientKeyword> and <GradientKeyword>system resilience</GradientKeyword> by leveraging cloud-based solutions through platforms such as <GradientTech>AWS</GradientTech>.
              </p>
            </div>
            </MotionWrapper>
          </div>

          {/* Quote Box */}
          <MotionWrapper delay={1.4}>
          <blockquote className="mt-12 p-6 italic border-l-4 border-cyan-500 bg-gray-900/50 rounded-lg shadow-xl mx-4 sm:mx-0">
            <p className="text-gray-200 leading-relaxed sm:leading-loose">
              &ldquo;As a dedicated and proactive learner, I continuously expand my expertise across diverse <GradientTech>technologies</GradientTech> and <GradientTech>frameworks</GradientTech>, focusing on <GradientTech>cutting-edge tools</GradientTech> and <GradientKeyword>UI/UX development</GradientKeyword>. My <GradientKeyword>resilience</GradientKeyword> and <GradientKeyword>commitment to technological advancement</GradientKeyword> highlight me as an <GradientTech>exceptional developer</GradientTech> and <GradientKeyword>problem solver</GradientKeyword>.&rdquo;
            </p>
          </blockquote>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
};

export default About;
