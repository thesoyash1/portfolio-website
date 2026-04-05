import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavPage from './NavPage';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import AboutPage from './AboutPage';
import SkillsPage from './SkillsPage';
import ShowCasePage from './ShowCasePage';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Load dark mode preference from localStorage
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
    
    // Apply dark mode to document root
    if (savedDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = (isDark) => {
    setDarkMode(isDark);
    localStorage.setItem('darkMode', isDark);
    
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <Router>
      <NavPage darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<HomePage darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />} />
        <Route path="/contact" element={<ContactPage darkMode={darkMode} />} />
        <Route path="/about" element={<AboutPage darkMode={darkMode} />} />
        <Route path="/skills" element={<SkillsPage darkMode={darkMode} />} />
        <Route path="/showcase" element={<ShowCasePage darkMode={darkMode} />} />
      </Routes>
    </Router>
  );
}

export default App;
