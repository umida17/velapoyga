import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import Ellipse from '../../assets/Ellipse.png'; // Yo'nalish to'g'riligini tekshiring

const bikeImages = [
  '/bike1.png', 
  '/bike2.png', 
  '/bike3.png',
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Har 0.7 soniyada (700ms) rasmlarni almashtirish
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bikeImages.length);
    }, 2200); // 1000 dan 700 ga o'zgartirildi (0.7s)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mornride-hero-container">
      {/* 1. TOP HEADER */}
      <div className="top-header">
        <div className="top-header-content">
          <span className="phone-icon">☎️</span>
          <a href="tel:+0001234567890" className="phone-number">+0001234567890</a>
        </div>
      </div>

      {/* 2. NAVBAR QISMI */}
      <nav className="mornride-navbar">
        <div className="navbar-logo">MORNRIDE</div>
        
        <ul className="navbar-links">
          <li><a href="#categories">Categories</a></li>
          <li><a href="#deals">Deals</a></li>
          <li><a href="#whats-new">What's New</a></li>
          <li><a href="#delivery">Delivery</a></li>
        </ul>

        <div className="navbar-actions">
          <div className="search-box">
            <input type="text" placeholder="Search Product.." />
            <button className="search-btn">🔍</button>
          </div>
          <div className="cart-icon">🛒</div>
          <div className="profile-avatar">
            {/* O'zgaruvchi figurali qavsda berildi */}
            <img src={Ellipse} alt="Profile" /> 
          </div>
        </div>
      </nav>

      {/* 3. HERO CONTENT MAIN */}
      <main className="hero-main">
        <div className="hero-text-side">
          <div className="limited-badge">LIMITED EDITION</div>
          
          <h1 className="hero-title">
            There’s No Light Bicycle <br />
            there’s Bicycle A5 BLACK
          </h1>

          <p className="hero-description">
            Get your unique bicycle style with our various collections. <br />
            our finale A5 BLACK are available while stock lasts
          </p>

          <div className="hero-buttons">
            <button className="btn-buy">Buy now A5 BLACK</button>
            <button className="btn-view">View collection</button>
          </div>
        </div>

        {/* Dynamic rasm qismi */}
        <div className="hero-image-side">
          <img 
            src={bikeImages[currentImageIndex]} 
            alt="Mornride Bicycle" 
            className="dynamic-bike-img" 
          />
        </div>
      </main>
    </div>
  );
};

export default HeroSection;