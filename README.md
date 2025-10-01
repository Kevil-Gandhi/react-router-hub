# 🚀 React Router Navigation Hub

A modern, responsive React application showcasing React Router v6 features with beautiful glassmorphism UI design. Built with React, React Router, and Tailwind CSS.

## ✨ Features

- **🧭 React Router v6**: Complete routing implementation with nested routes
- **🎨 Modern UI**: Glassmorphism design with gradient backgrounds
- **📱 Fully Responsive**: Works perfectly on desktop, tablet, and mobile
- **⚡ Dynamic Routing**: URL parameters with useParams hook
- **🔄 Route Loaders**: Data fetching with React Router loaders
- **🎯 Active Navigation**: Visual feedback for current page
- **🌟 Smooth Animations**: Hover effects and transitions throughout

## 🛠️ Tech Stack

- **React 19** - Modern React with hooks
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server

## 📋 Routes & Components

### 🏠 **Home** (`/`)
- Hero section with call-to-action
- Modern landing page design
- Responsive image layouts

### ℹ️ **About** (`/about`)
- Code flow explanation
- Visual breakdown of React Router architecture
- Team collaboration imagery

### 📞 **Contact** (`/contact`)
- Contact form with modern styling
- Interactive elements
- Professional layout

### 👤 **User Profile** (`/user/:userid`)
- **Dynamic routing demonstration**
- URL parameter extraction with `useParams`
- Personalized user interface
- Example: `/user/john` shows John's profile

### 🐙 **GitHub** (`/github`)
- **Real GitHub API integration**
- Live data fetching with route loaders
- Profile statistics and information
- Professional developer showcase

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Kevil-Gandhi/react-router-hub.git
cd react-router-hub
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 React Router Features Demonstrated

### 1. **Basic Routing**
```jsx
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
```

### 2. **Dynamic Routes with Parameters**
```jsx
<Route path="/user/:userid" element={<User />} />

// In component
const { userid } = useParams();
```

### 3. **Route Loaders for Data Fetching**
```jsx
<Route 
  path="/github" 
  element={<Github />} 
  loader={githubInfoLoader}
/>

// Loader function
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/username");
  return response.json();
};
```

### 4. **Nested Routes with Layout**
```jsx
<Route path="/" element={<Layout />}>
  <Route path="" element={<Home />} />
  <Route path="about" element={<About />} />
  // ... other routes
</Route>
```

### 5. **Active Navigation Links**
```jsx
<NavLink
  to="/about"
  className={({ isActive }) =>
    isActive ? "active-class" : "inactive-class"
  }
>
  About
</NavLink>
```

## 🎨 Design Features

- **Glassmorphism Effects**: Backdrop blur with transparent backgrounds
- **Gradient Backgrounds**: Beautiful color transitions
- **Responsive Grid Layouts**: Adapts to all screen sizes
- **Interactive Hover States**: Smooth transitions and scaling
- **Modern Typography**: Clean, readable fonts with proper hierarchy
- **Professional Color Scheme**: Carefully chosen color palette

## 🔧 Project Structure

```
src/
├── components/
│   ├── Header/          # Navigation header
│   ├── Footer/          # Site footer
│   ├── Home/           # Landing page
│   ├── About/          # About page with code explanation
│   ├── Contact/        # Contact form
│   ├── User/           # Dynamic user profile
│   ├── Github/         # GitHub API integration
│   └── Layout.jsx      # Layout wrapper with Outlet
├── App.jsx             # Main app component
└── main.jsx           # Router configuration
```

## 🌐 API Integration

The GitHub component demonstrates real API integration:
- **Endpoint**: GitHub Users API
- **Data**: Profile information, stats, repositories
- **Loading**: Route-level data loading
- **Error Handling**: Graceful fallbacks

## 📱 Responsive Design

- **Mobile**: Stacked layouts with touch-friendly navigation
- **Tablet**: Optimized spacing and grid layouts
- **Desktop**: Full-width layouts with hover effects

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨💻 Author

**Kevil Gandhi**
- GitHub: [@Kevil-Gandhi](https://github.com/Kevil-Gandhi)

---

⭐ Star this repo if you found it helpful!