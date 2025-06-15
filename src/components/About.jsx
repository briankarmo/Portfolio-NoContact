import React from 'react';
import MotionWrapper from './MotionWrapper';

const HighlightedText = ({ children, type }) => (
  <span className={`${type === 'framework' ? 'text-cyan-400' : 'text-blue-400'} font-semibold`}>
    {children}
  </span>
);

const CoreExpertise = ({ title, items }) => (
  <div className="bg-gray-900/50 rounded-lg p-4 sm:p-6 h-full">
    <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="text-cyan-400 mr-2">•</span>
          <span className="text-gray-300">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const About = () => {
  const expertise = [
    {
      title: "Development",
      items: [
        "Full-Stack Web Development",
        "Mobile-First Responsive Design",
        "Cross-Platform Compatibility",
        "Performance Optimization",
      ]
    },
    {
      title: "Technical",
      items: [
        "Modern Framework Implementation",
        "API Integration & Development",
        "Database Architecture",
        "Cloud Services Management",
      ]
    },
    {
      title: "Professional",
      items: [
        "Project Management",
        "Technical Documentation",
        "Team Collaboration",
        "Problem-Solving",
      ]
    }
  ];

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
            About Me
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
                My journey as a developer began with a profound passion for <HighlightedText>web design</HighlightedText>, 
                quickly evolving into a deep love for <HighlightedText>coding</HighlightedText> and{' '}
                <HighlightedText>creative problem-solving</HighlightedText>. I build dynamic, interactive, 
                and responsive applications using powerful <HighlightedText type="framework">front-end frameworks</HighlightedText> such 
                as <HighlightedText type="framework">React.js</HighlightedText>,{' '}
                <HighlightedText type="framework">Next.js</HighlightedText>, and{' '}
                <HighlightedText type="framework">Vue.js</HighlightedText>, elegantly paired with{' '}
                <HighlightedText type="framework">Tailwind CSS</HighlightedText> to create clean, efficient, 
                and visually appealing designs.
              </p>
            </div>
            </MotionWrapper>

            {/* Backend Expertise */}
            <MotionWrapper delay={0.4}>
            <div className="bg-gray-900/30 rounded-lg p-6 mx-4 sm:mx-0">
              <p className="text-gray-200 leading-relaxed sm:leading-loose m-0">
                On the backend, I utilize robust languages like <HighlightedText type="framework">Python</HighlightedText>,{' '}
                <HighlightedText type="framework">PHP</HighlightedText>, and{' '}
                <HighlightedText type="framework">Node.js</HighlightedText>, along with frameworks such as{' '}
                <HighlightedText type="framework">Laravel</HighlightedText>, to craft reliable and scalable solutions.{' '}
                <HighlightedText type="framework">APIs</HighlightedText> form the backbone of my applications, 
                enabling seamless integration of external services to significantly enhance functionality 
                and elevate user experiences.
              </p>
            </div>
            </MotionWrapper>

            {/* Development Practices */}
            <MotionWrapper delay={0.6}>
            <div className="bg-gray-900/30 rounded-lg p-6 mx-4 sm:mx-0">
              <p className="text-gray-200 leading-relaxed sm:leading-loose m-0">
                Meticulous <HighlightedText>version control</HighlightedText> practices through{' '}
                <HighlightedText type="framework">GitHub</HighlightedText> ensure{' '}
                <HighlightedText>efficient project management</HighlightedText>,{' '}
                <HighlightedText>collaborative workflows</HighlightedText>, and{' '}
                <HighlightedText>maintainable codebases</HighlightedText>. My dedication to refining{' '}
                <HighlightedText>UI/UX development</HighlightedText> is evident in my consistent focus on creating{' '}
                <HighlightedText>intuitive</HighlightedText>,{' '}
                <HighlightedText>user-friendly interfaces</HighlightedText> that engage and retain users.
              </p>
            </div>
            </MotionWrapper>

            {/* eCommerce Expertise */}
            <MotionWrapper delay={0.8}>
            <div className="bg-gray-900/30 rounded-lg p-6 mx-4 sm:mx-0">
              <p className="text-gray-200 leading-relaxed sm:leading-loose m-0">
                With specialized expertise in custom <HighlightedText type="framework">Shopify Liquid coding</HighlightedText>,
                I enhance <HighlightedText type="framework">eCommerce platforms</HighlightedText>, showcasing an{' '}
                <HighlightedText>innovative approach</HighlightedText> and delivering{' '}
                <HighlightedText>impactful results</HighlightedText> within the{' '}
                <HighlightedText type="framework">digital marketplace</HighlightedText>.
              </p>
            </div>
            </MotionWrapper>

            {/* Security & Infrastructure */}
            <MotionWrapper delay={1}>
            <div className="bg-gray-900/30 rounded-lg p-6 mx-4 sm:mx-0">
              <p className="text-gray-200 leading-relaxed sm:leading-loose m-0">
                For <HighlightedText>secure payment systems</HighlightedText> and{' '}
                <HighlightedText>data protection</HighlightedText>, I implement{' '}
                <HighlightedText>advanced encryption methods</HighlightedText> alongside trusted third-party services. 
                I work with tools and platforms such as <HighlightedText type="framework">Stripe</HighlightedText> for reliable{' '}
                <HighlightedText>payment processing</HighlightedText>, and{' '}
                <HighlightedText type="framework">Firebase</HighlightedText> for real-time{' '}
                <HighlightedText>backend infrastructure</HighlightedText>,{' '}
                <HighlightedText>user authentication</HighlightedText>, and{' '}
                <HighlightedText>data management</HighlightedText>. I further support{' '}
                <HighlightedText>scalability</HighlightedText> and{' '}
                <HighlightedText>system resilience</HighlightedText> by leveraging cloud-based solutions 
                through platforms such as <HighlightedText type="framework">AWS</HighlightedText>.
              </p>
            </div>
            </MotionWrapper>
          </div>

          {/* Core Expertise Grid */}
          <MotionWrapper delay={1.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 mx-4 sm:mx-0">
            {expertise.map((section, index) => (
              <CoreExpertise key={index} {...section} />
            ))}
          </div>
          </MotionWrapper>

          {/* Quote Box */}
          <MotionWrapper delay={1.4}>
          <blockquote className="mt-12 p-6 italic border-l-4 border-cyan-500 bg-gray-900/50 rounded-lg shadow-xl mx-4 sm:mx-0">
            <p className="text-gray-200 leading-relaxed sm:leading-loose">
              "As a dedicated and proactive learner, I continuously expand my expertise across diverse{' '}
              <HighlightedText type="framework">technologies</HighlightedText> and{' '}
              <HighlightedText type="framework">frameworks</HighlightedText>, focusing on{' '}
              <HighlightedText type="framework">cutting-edge tools</HighlightedText> and{' '}
              <HighlightedText>UI/UX development</HighlightedText>. My{' '}
              <HighlightedText>resilience</HighlightedText> and{' '}
              <HighlightedText>commitment to technological advancement</HighlightedText> highlight me as an{' '}
              <HighlightedText type="framework">exceptional developer</HighlightedText> and{' '}
              <HighlightedText>problem solver</HighlightedText>."
            </p>
          </blockquote>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
};

export default About;
