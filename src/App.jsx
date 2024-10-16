import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components for routing
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavPage from './NavPage';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import AboutPage from './AboutPage';
import SkillsPage from './SkillsPage';
import ShowCasePage from './ShowCasePage';

function App() {
  return (
    <Router>
      <NavPage />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Home Page Route */}
        <Route path="/contact" element={<ContactPage />} /> {/* Contact Page Route */}
        <Route path="/about" element={<AboutPage />} /> {/* About Page Route */}
        <Route path="/skills" element={<SkillsPage />} /> {/* Skills Page Route */}
        <Route path="/showcase" element={<ShowCasePage />} /> {/* Showcase Page Route */}
        {/* Add additional routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
