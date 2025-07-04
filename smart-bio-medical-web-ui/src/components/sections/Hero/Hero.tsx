import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero section">
      <div className="container d-flex flex-column justify-content-center align-items-center text-center position-relative" data-aos="zoom-out">
        <svg className="img-fluid animated" alt="Biomedical Services" width="400" height="300" viewBox="0 0 400 300">
          <defs>
            <linearGradient id="medicalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>
          
          {/* Medical Cross Background */}
          <rect x="180" y="50" width="40" height="120" fill="url(#medicalGradient)" rx="5" />
          <rect x="140" y="90" width="120" height="40" fill="url(#medicalGradient)" rx="5" />
          
          {/* DNA Helix */}
          <path d="M80 80 Q100 60, 120 80 T160 80" stroke="#2563eb" strokeWidth="3" fill="none" />
          <path d="M80 100 Q100 120, 120 100 T160 100" stroke="#059669" strokeWidth="3" fill="none" />
          <circle cx="90" cy="80" r="3" fill="#2563eb" />
          <circle cx="110" cy="80" r="3" fill="#2563eb" />
          <circle cx="130" cy="80" r="3" fill="#2563eb" />
          <circle cx="150" cy="80" r="3" fill="#2563eb" />
          
          {/* Stethoscope */}
          <path d="M260 120 Q280 100, 300 120 Q320 140, 300 160 Q280 180, 260 160" stroke="#2563eb" strokeWidth="4" fill="none" />
          <circle cx="280" cy="140" r="15" fill="none" stroke="#2563eb" strokeWidth="3" />
          <circle cx="280" cy="140" r="8" fill="#059669" />
          
          {/* Heart Monitor Line */}
          <path d="M50 200 L80 200 L90 180 L100 220 L110 160 L120 240 L130 200 L350 200" stroke="#dc2626" strokeWidth="3" fill="none" />
          
          {/* Medical Pills */}
          <ellipse cx="320" cy="80" rx="15" ry="8" fill="#2563eb" />
          <ellipse cx="340" cy="70" rx="15" ry="8" fill="#059669" />
          <ellipse cx="330" cy="100" rx="15" ry="8" fill="#dc2626" />
          
          {/* Microscope */}
          <rect x="60" y="240" width="30" height="15" fill="#374151" />
          <circle cx="75" cy="230" r="8" fill="#6b7280" />
          <rect x="72" y="215" width="6" height="20" fill="#374151" />
          <circle cx="75" cy="210" r="5" fill="#2563eb" />
        </svg>
        
        <h1>Welcome to <span>Smart Bio Medical</span></h1>
        <p>Cutting-edge biomedical technology and innovative healthcare solutions for a healthier tomorrow.</p>
        <div className="d-flex">
          <a href="#about" className="btn-get-started scrollto">Explore Services</a>
          <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox btn-watch-video d-flex align-items-center">
            <i className="bi bi-play-circle"></i><span>Watch Demo</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
