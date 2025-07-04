import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Hero from './sections/Hero/Hero';
import FeaturedServices from './sections/FeaturedServices/FeaturedServices';
import About from './sections/About/About';
import Clients from './sections/Clients/Clients';
import CallToAction from './sections/CallToAction/CallToAction';
import Services from './sections/Services/Services';
import Contact from './sections/Contact/Contact';
import Footer from './layout/Footer/Footer';

const Home: React.FC = () => {
  useEffect(() => {
    // Add custom styles to remove underlines
    const style = document.createElement('style');
    style.textContent = `
      a {
        text-decoration: none !important;
      }
      a:hover {
        text-decoration: none !important;
      }
    `;
    document.head.appendChild(style);

    // Load vendor scripts dynamically
    const loadScript = (src: string) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    // Load all required scripts
    const loadScripts = async () => {
      try {
        await loadScript('/assets/vendor/bootstrap/js/bootstrap.bundle.min.js');
        await loadScript('/assets/vendor/aos/aos.js');
        await loadScript('/assets/vendor/glightbox/js/glightbox.min.js');
        await loadScript('/assets/vendor/swiper/swiper-bundle.min.js');
        await loadScript('/assets/js/main.js');
        
        // Initialize AOS if available
        if ((window as any).AOS) {
          (window as any).AOS.init();
        }
      } catch (error) {
        console.warn('Some vendor scripts failed to load:', error);
      }
    };

    loadScripts();

    // Cleanup function
    return () => {
      // Remove scripts on unmount if needed
    };
  }, []);

  return (
    <div className="index-page">
      <main className="main">
        <Hero />
        <FeaturedServices />
        <About />
        <Clients />
        <CallToAction />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;