import React from "react";

function OurSolutions({ data }) {
  if (!data) return null;

  const renderIntro2 = (text) => {
    if (text.includes("SeasonOne")) {
      const parts = text.split("SeasonOne");
      return (
        <>
          {parts[0]}
          <a href="#season-one">
            <strong>SeasonOne</strong>
          </a>
          {parts[1]}
        </>
      );
    }
    return text;
  };

  return (
    <section className="our-solutions-section">
      <div className="container">
        <h2>Our Solutions</h2>
        <p className="solutions-intro">{data.intro1}</p>
        <p className="solutions-intro">{renderIntro2(data.intro2)}</p>

        {/* Stats & Dashboard Section */}
        <div className="solutions-achieve-grid">
          <div className="achieve-left">
            <h4>What you can achieve</h4>
            <ul className="stats-list">
              {Array.isArray(data.achievements) &&
                data.achievements.map((item, idx) => (
                  <li key={idx} className="stat-items">
                    <span className="stat-circle">{item.stat}</span>
                    {/* Render HTML tags safely from string */}
                    <p dangerouslySetInnerHTML={{ __html: item.label }} />
                  </li>
                ))}
            </ul>
            <div className="achieve-actions">
              <a href="#demo" className="btn-orange">
                Request Demo
              </a>
              <a href="#learn" className="btn-orange">
                Learn More
              </a>
            </div>
          </div>
          <div className="achieve-right">
            <img src={data.image} alt="SeasonOne Platform Mockup" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurSolutions;