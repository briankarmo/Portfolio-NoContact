import React from "react";

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

const Contact = () => null;

export default Contact;
