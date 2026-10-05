import { useState } from "react";
import { Link } from "react-router-dom";
import GlobalHero from "../components/global/GlobalHero";
import LogoCarousel from "../components/global/LogoCarousel";
import GlobalMatrix from "../components/global/GlobalMatrix";
import GlobalCTA from "../components/global/GlobalCTA";
import { globalData, sharedStats, sharedLogos } from "../data/globalData";
import "../company.css";
import "../data/common.css";

function Company() {
  const pageData = globalData.company;
  const aboutData = pageData.aboutSection || {};
  const quickFactsData = pageData.quickFacts || {};
  const growthPathData = pageData.growthPath || {};

  // State to track active milestone tab (defaults to the first milestone index: 0)
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState(0);

  return (
    <div className="company-landing-page">
      {/* 1. Global Hero Banner Module */}
      <GlobalHero
        title={pageData.hero?.title}
        description={pageData.hero?.subtitle}
        bgImageUrl={pageData.hero?.bgImage}
      />

      {/* 2. Company Section */}
      <section className="company-overview-section">
        <div className="container">
          <div className="company-overview-grid">
            {/* Left Column: About Knack Systems Text Content */}
            <div className="company-about-content">
              <h2>{aboutData.title}</h2>
              {aboutData.paragraphs?.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>

            {/* Right Column: Quick Facts 3x2 Grid */}
            <div className="company-quick-facts">
              <h2>{quickFactsData.title}</h2>
              <div className="facts-grid">
                {quickFactsData.facts?.map((fact) => (
                  <div key={fact.id} className={`fact-card ${fact.bgClass}`}>
                    <h5>{fact.title}</h5>
                    <p>{fact.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Knack Systems Section */}
      <section className="why-ks-section">
        <div className="container">
          <div className="why-knack-grid">
            {/* Left Column: Illustration Image */}
            <div className="why-knack-image-box">
              <img src={pageData.whyKnack?.image} alt="Why Knack Systems" />
            </div>

            {/* Right Column: Title & Bullet Points */}
            <div className="why-knack-content">
              <h3>{pageData.whyKnack?.title}</h3>
              <ul>
                {pageData.whyKnack?.points?.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Last Section: Our Growth Path (Tab Menu & Mobile Accordion) */}
      <section className="growth-path-section">
        <div className="container">
          <h3>{growthPathData.title}</h3>

          {/* Desktop & Mobile Timeline Navigation */}
          <div className="growth-timeline-wrapper">
            <div className="growth-timeline-track">
              {growthPathData.milestones?.map((item, index) => (
                <div key={index} className="growth-node-container">
                  {/* Timeline Button / Tab */}
                  <button
                    className={`growth-node-btn ${activeMilestoneIndex === index ? "active" : ""}`}
                    onClick={() => {
                      // If the clicked milestone is already active, close it by setting to null. Otherwise, make it active.
                      setActiveMilestoneIndex(
                        activeMilestoneIndex === index ? null : index,
                      );
                    }}
                  >
                    {item.year}
                  </button>

                  {/* Mobile Accordion Content Panel (Visible directly under active node on mobile) */}
                  <div className="mobile-accordion-p-content">
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Active Content Display Area */}
          <div className="growth-content-display">
            <p>
              {activeMilestoneIndex !== null
                ? growthPathData.milestones?.[activeMilestoneIndex]?.description
                : "Click a year above to view our milestone history."}
            </p>
          </div>
        </div>
      </section>

      {/* 5. Vision & Mission Section */}
      <section className="vision-mission-section">
        <div className="container">
          <div className="vision-mission-grid">
            {/* Vision Column */}
            <div className="vision-mission-card">
              <div className="vm-icon-box">
                <img
                  src={pageData.visionMission?.vision?.icon}
                  alt={pageData.visionMission?.vision?.title}
                  title={pageData.visionMission?.vision?.iconTitle}
                />
              </div>
              <h3>{pageData.visionMission?.vision?.title}</h3>
              <p>{pageData.visionMission?.vision?.description}</p>
            </div>

            {/* Mission Column */}
            <div className="vision-mission-card">
              <div className="vm-icon-box">
                <img
                  src={pageData.visionMission?.mission?.icon}
                  alt={pageData.visionMission?.mission?.title}
                  title={pageData.visionMission?.mission?.iconTitle}
                />
              </div>
              <h3>{pageData.visionMission?.mission?.title}</h3>
              <p>{pageData.visionMission?.mission?.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Global Stats Matrix Module */}
      <GlobalMatrix stats={sharedStats} />

      {/* 7. Global Call To Action Module */}
      <GlobalCTA />

      {/* 8. Logo Carousel Module */}
      <LogoCarousel logos={sharedLogos} />
    </div>
  );
}

export default Company;
