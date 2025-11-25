import React from 'react';
import Hello from './components/Hello';
import Header from './components/header';
import ProfileCard from './components/profilecard';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="main-content">
        <Header />
        <ProfileCard />
      </div>
      <Footer />
    </div>
  );
}
export default App;
