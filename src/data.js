import Boston from "./assets/portfolio/boston.png";
import ShutterGuide from "./assets/portfolio/shutter.png";
import Shopify from "./assets/portfolio/shopify.png";
import ModernApp from "./assets/portfolio/ModernApp.png";
import Apple from "./assets/portfolio/Apple.png";
import Three from "./assets/portfolio/three.png";
import Weather from "./assets/portfolio/weather.png";

export const projects = [
  {
    id: 1,
    src: Boston,
    demo: "https://www.bostoninnovations.org/company",
    title: "AI Innovation Platform",
    description: "Next.js corporate platform for artificial intelligence solutions, featuring dynamic animations and modern UI/UX design. Includes real-time data visualization, interactive dashboards, and seamless user experience.",
    tags: ["Next.js", "Animations", "Corporate"],
  },
  {
    id: 2,
    src: ShutterGuide,
    demo: "https://shutterguide.io/",
    title: "Photography Marketplace",
    description: "Full-stack photography platform built with Next.js, Firebase, and Stripe integration for secure photographer bookings. Features include real-time availability, instant messaging, and automated scheduling.",
    tags: ["Next.js", "Firebase", "Stripe"],
  },
  {
    id: 3,
    src: Shopify,
    demo: "https://zazadepotmi.myshopify.com/",
    title: "ZAZA Depot Store",
    description: "Custom Shopify storefront with advanced product filtering, custom theme development, and optimized checkout flow. Includes inventory management, customer reviews, and social media integration.",
    tags: ["Shopify", "Liquid", "eCommerce"],
  },
  {
    id: 4,
    src: ModernApp,
    demo: "https://bk-inc-modern-app.netlify.app/",
    title: "Modern Payment Platform",
    description: "Next-generation payment processing platform with 3D UI elements and real-time transaction visualization. Features include secure payment processing, transaction history, and analytics dashboard.",
    tags: ["React", "Three.js", "Payments"],
  },
  {
    id: 5,
    src: Apple,
    demo: "https://briankarmo-appledemo.netlify.app/",
    title: "iPhone 3D Showcase",
    description: "Interactive 3D iPhone product demonstration using React, Three.js, and GSAP for smooth animations. Features include product customization, 360-degree view, and interactive product features.",
    tags: ["Three.js", "React", "GSAP"],
  },
  {
    id: 6,
    src: Three,
    demo: "https://briankarmo-threejs-nocontact.netlify.app/",
    title: "3D Developer Portfolio",
    description: "An immersive 3D developer workspace showcasing projects with interactive Three.js elements. Features include custom lighting, 3D models, and smooth animations. Includes project showcase and interactive elements.",
    tags: ["Three.js", "React", "3D", "WebGL"],
  },
  {
    id: 7,
    src: Weather,
    demo: "https://briankarmo-weather.netlify.app/",
    title: "Weather Dashboard",
    description: "Real-time weather application with location-based forecasts, interactive maps, and detailed meteorological data visualization. Features include 7-day forecast, hourly updates, and severe weather alerts.",
    tags: ["React", "Weather API", "Maps"],
  }
]; 