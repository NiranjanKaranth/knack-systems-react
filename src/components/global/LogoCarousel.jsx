import React, { useState, useEffect } from "react";

function LogoCarousel({ logos = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!logos.length) return null;

  const visibleCount = windowWidth <= 600 ? 1 : windowWidth <= 992 ? 3 : 4;

  const handleNext = () => {
    if (currentIndex < logos.length - visibleCount) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex(logos.length - visibleCount);
    }
  };

  return (
    <section className="clients-section">
      <div className="container">
        <h3>Our Clients</h3>
        <p>Helping brands across industries grow faster online</p>

        <div className="carousel-wrapper">
          <button 
            className="carousel-arrow prev-arrow" 
            onClick={handlePrev}
            aria-label="Previous"
          >
            &#10094;
          </button>

          <div className="carousel-viewport">
            <div 
              className="logo-track"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`
              }}
            >
              {logos.map((logo, index) => (
                <div 
                  className="logo-card" 
                  key={logo.id || index}
                  style={{ flex: `0 0 ${100 / visibleCount}%` }}
                >
                  <img src={logo.imgUrl || logo.url} alt={logo.name || logo.altText} />
                </div>
              ))}
            </div>
          </div>

          <button 
            className="carousel-arrow next-arrow" 
            onClick={handleNext}
            aria-label="Next"
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
}

export default LogoCarousel;