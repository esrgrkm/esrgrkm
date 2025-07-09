# Your Name - Portfolio Website

A modern, animated portfolio website built with React, featuring cybersecurity expertise, 5G research, and technical projects.

## 🚀 Features

- **Modern Design**: Clean, professional design with glass morphism effects
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Responsive Design**: Fully responsive across all devices
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Performance**: Optimized for fast loading and smooth interactions

## 🛠️ Tech Stack

- **Frontend**: React 18, React Router DOM
- **Styling**: CSS3 with CSS Variables for theming
- **Animations**: Framer Motion
- **Icons**: React Icons
- **SEO**: React Helmet
- **3D Graphics**: React Three Fiber (optional)
- **Contact Form**: EmailJS

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.jsx      # Navigation component
│   ├── ThemeToggle.jsx # Theme switcher
│   ├── ScrollToTop.jsx # Scroll to top button
│   └── *.css           # Component styles
├── pages/              # Page components
│   ├── Home.jsx        # Home page
│   ├── About.jsx       # About page
│   ├── Projects.jsx    # Projects page
│   ├── Contact.jsx     # Contact page
│   └── *.css           # Page styles
├── context/            # React context
│   └── ThemeContext.js # Theme management
├── assets/             # Static assets
│   ├── images/         # Images and graphics
│   └── certificates/   # Certificate badges
├── App.jsx             # Main app component
├── index.js            # Entry point
└── index.css           # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The build files will be created in the `build/` directory.

## 🎨 Customization

### Personal Information

Update the following files with your information:

1. **`public/index.html`**: Update meta tags, title, and description
2. **`src/pages/Home.jsx`**: Update name, description, and social links
3. **`src/pages/About.jsx`**: Update education, certifications, and personal story
4. **`src/pages/Projects.jsx`**: Add your projects
5. **`src/pages/Contact.jsx`**: Update contact information

### Styling

The website uses CSS variables for theming. Update colors in `src/index.css`:

```css
:root {
  --bg-primary-light: #ffffff;
  --bg-secondary-light: #f8fafc;
  --text-primary-light: #1e293b;
  --accent-light: #3b82f6;
  /* ... more variables */
}
```

### Adding Projects

Edit `src/pages/Projects.jsx` to add your projects:

```javascript
const projects = [
  {
    title: "5G Core Pentest",
    description: "Master's thesis project on 5G Core Network Security",
    technologies: ["Python", "5G", "Security", "Networking"],
    github: "https://github.com/yourusername/project",
    demo: "https://demo-link.com",
    image: "/path-to-image.jpg"
  }
];
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

## 🎯 SEO Features

- Meta tags for social sharing
- Open Graph tags for Facebook/LinkedIn
- Twitter Card support
- Structured data markup
- Semantic HTML
- Fast loading times

## 🔧 Performance Optimization

- Lazy loading for images
- Code splitting with React Router
- Optimized animations
- Minimal bundle size
- Efficient re-renders

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

- **Email**: your.email@example.com
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/yourusername)
- **GitHub**: [Your GitHub](https://github.com/yourusername)

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for animations
- [React Icons](https://react-icons.github.io/react-icons/) for icons
- [Google Fonts](https://fonts.google.com/) for typography
- [Unsplash](https://unsplash.com/) for stock images

---

Made with ❤️ by [Your Name] 