# NFT Universe - Interactive Webpage

A modern, responsive NFT-themed webpage built with React, featuring smooth animations, interactive elements, and a beautiful design inspired by the reference website.

## 🚀 Features

### Design & Layout

- **3 Interactive Slides**: Each slide features unique content with smooth transitions
- **Responsive Design**: Optimized for Mobile, Tablet, and Desktop
- **Modern UI**: Glass morphism effects, gradients, and contemporary styling
- **Typography**: Custom font (Inter) with proper font weights and sizing

### Animations & Interactions

- **Framer Motion**: Smooth page transitions and micro-interactions
- **Scroll Animations**: Parallax effects and scroll-triggered animations
- **Hover Effects**: Interactive buttons and elements with hover states
- **Loading Animations**: Staggered content appearance on page load
- **Floating Elements**: Ambient background animations

### Performance & Optimization

- **Optimized Images**: High-quality Unsplash images with proper sizing
- **Smooth Scrolling**: No lag or performance issues
- **CSS Optimizations**: Custom animations and transitions
- **Mobile-First**: Responsive breakpoints for all devices

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **SCSS/CSS** - Custom styling and animations

## 📱 Responsive Support

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🎨 Design Elements

### Color Scheme

- Primary: Purple to Pink gradients
- Secondary: Blue to Cyan gradients
- Accent: Green to Emerald gradients
- Background: Black with transparency overlays

### Typography

- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 300 (Light) to 900 (Black)
- **Responsive Sizing**: Clamp functions for fluid typography

### Interactive Elements

- Navigation arrows for slide switching
- Slide indicators (dots)
- Hover effects on buttons and icons
- Smooth transitions between slides

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd react-nft-style-ui
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
react-nft-style-ui/
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Custom styles and animations
│   └── main.jsx         # Application entry point
├── public/              # Static assets
├── index.html           # HTML template
├── tailwind.config.cjs  # Tailwind configuration
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies and scripts
```

## 🎯 Key Components

### App.jsx

- **Slide Management**: State management for current slide
- **Animation Logic**: Framer Motion animations and transitions
- **Responsive Layout**: Mobile-first responsive design
- **Interactive Elements**: Navigation, buttons, and indicators

### App.css

- **Custom Animations**: Keyframe animations and transitions
- **Utility Classes**: Custom CSS classes for specific effects
- **Responsive Design**: Media queries and responsive utilities
- **Performance Optimizations**: Will-change properties and optimizations

## 🎨 Customization

### Changing Colors

Update the gradient colors in `tailwind.config.cjs`:

```javascript
colors: {
  'nft': {
    // Custom color palette
  }
}
```

### Adding New Slides

Modify the `slides` array in `App.jsx`:

```javascript
const slides = [
  {
    id: 4,
    title: "New Slide Title",
    subtitle: "New Slide Subtitle",
    description: "New slide description",
    image: "new-image-url",
    gradient: "from-orange-600 to-red-600",
    icon: <NewIcon className="text-4xl" />,
  },
];
```

### Custom Animations

Add new animations in `tailwind.config.cjs`:

```javascript
animation: {
  'custom-animation': 'customKeyframe 2s ease-in-out infinite',
}
```

## 🔧 Performance Tips

1. **Image Optimization**: Use optimized images with proper sizing
2. **Animation Performance**: Use `will-change` property for animated elements
3. **Bundle Size**: Tree-shaking with Vite for smaller bundles
4. **Lazy Loading**: Consider lazy loading for additional content

## 🌟 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions, please open an issue in the repository.

---

**Note**: This project is for illustration purposes only. The design and animations are inspired by modern NFT marketplace trends and can be customized for specific use cases.
