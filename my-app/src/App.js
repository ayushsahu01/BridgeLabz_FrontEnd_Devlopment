import React from 'react';
import Hello from './components/Hello';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/header';
import ProfileCard from './components/profilecard';
import Footer from './components/footer';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="main-content">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<ProfileCard />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
