import React from 'react';

function IndustryHero({ title, description, bgImageUrl }) {
  return (
    <section 
      className="hero-section" 
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      <div className="container hero-container-flex">
        {/* Left space to preserve background visual */}
        <div className="hero-image-container"></div>

        {/* Right Content Card matching Industries layout */}
        <div className="hero-card">
          <h1>{title}</h1>
          <p>{description}</p>
          <button className="cta-button" type="button">
            Connect With Our Digital Experts
          </button>
        </div>
      </div>
    </section>
  );
}

export default IndustryHero;