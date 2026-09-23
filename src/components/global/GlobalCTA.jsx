import React from 'react';

function GlobalCTA({ 
  title = "Ready To Grow Your Business Online?", 
  subtitle = "Request a call from our fashion E-Commerce experts!", 
  buttonText = "CONNECT WITH OUR DIGITAL EXPERTS",
  buttonLink = "#contact"
}) {
  return (
    <section className="global-cta-section">
      <div className="container text-center">
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <a href={buttonLink} className="btn-black">
          {buttonText}
        </a>
      </div>
    </section>
  );
}

export default GlobalCTA;