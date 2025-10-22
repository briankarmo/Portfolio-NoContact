# Brian Karmo Portfolio - Next.js Version

This is a modern portfolio website built with Next.js, showcasing full-stack development projects and technical skills.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 14, React 18, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful animations
- **Performance Optimized**: Next.js Image optimization and lazy loading
- **SEO Friendly**: Built-in SEO optimization with Next.js metadata
- **Interactive UI**: Smooth animations with Framer Motion
- **Dark Theme**: Elegant dark theme with gradient backgrounds

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

### Development Tools
- **TypeScript** - Type safety
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Sharp** - Image optimization

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.js          # Root layout with metadata
│   ├── page.js            # Home page component
│   └── globals.css        # Global styles
├── src/
│   ├── components/        # React components
│   ├── context/          # React context providers
│   └── data.js           # Static data
├── public/
│   └── assets/           # Images and static assets
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── package.json          # Dependencies and scripts
```

## 🎨 Components

- **Home** - Hero section with animated content
- **About** - Personal information and background
- **TechStack** - Technology showcase with interactive cards
- **Portfolio** - Project showcase with filtering
- **Contact** - Contact form and information
- **NavBar** - Navigation with smooth scrolling
- **SocialLinks** - Social media links
- **GlowingLogo** - Animated logo components

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1440px+)

## 🎯 Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting with Next.js
- **Lazy Loading**: Images and components load on demand
- **SEO Optimization**: Built-in meta tags and structured data
- **Fast Loading**: Optimized bundle sizes and caching

## 🔧 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      // Your custom colors
    }
  }
}
```

### Content
- Update personal information in `src/data.js`
- Modify project details in component files
- Replace images in `public/assets/`

### Styling
- Global styles in `app/globals.css`
- Component-specific styles using Tailwind classes
- Custom animations in `tailwind.config.js`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: [your-email@example.com]
- **LinkedIn**: [your-linkedin]
- **Portfolio**: [your-portfolio-url]

---

Built with ❤️ using Next.js and modern web technologies. 