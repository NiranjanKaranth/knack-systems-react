import React, { useState } from "react";
import { Link } from "react-router-dom";
import GlobalHero from "../components/global/GlobalHero";
import LogoCarousel from "../components/global/LogoCarousel";
import GlobalMatrix from "../components/global/GlobalMatrix";
import GlobalCTA from "../components/global/GlobalCTA";
import { globalData, sharedStats, sharedLogos } from "../data/globalData";
import "../our-works.css";
import "../data/common.css";

function OurWorksPage() {
  const pageData = globalData.ourWorks;
  const worksList = pageData.worksList || [];
  const [activeTab, setActiveTab] = useState("All");

  // Extract unique categories safely
  const categories = ["All", ...new Set(worksList.map((item) => item.category).filter(Boolean))];

  // Filter items based on selected tab
  const filteredWorks = activeTab === "All"
    ? worksList
    : worksList.filter((item) => item.category === activeTab);

  return (
    <div className="our-works-landing-page">
      {/* 1. Global Hero Banner Module */}
      <GlobalHero
        title={pageData.hero?.title || "Our Works"}
        description={pageData.hero?.subtitle || ""}
        bgImageUrl={pageData.hero?.bgImage || ""}
      />

      {/* 2. Interactive Filter Tabs & 2-Col Grid Section */}
      <section className="works-section">
        <div className="container">
          <div className="works-tabs-menu">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`works-tab-btn ${activeTab === category ? "active" : ""}`}
                onClick={() => setActiveTab(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="works-grid">
            {filteredWorks.map((item, index) => (
              <div className="works-card" key={index}>
                <div className="works-image-wrapper">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="works-content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <Link className="orange-button works-cta-btn" to={item.link}>
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Global Stats Matrix Module */}
      <GlobalMatrix stats={sharedStats} />

      {/* 4. Global Call To Action Module */}
      <GlobalCTA />

      {/* 5. Logo Carousel Module */}
      <LogoCarousel logos={sharedLogos} />
    </div>
  );
}

export default OurWorksPage;