import React from "react";
import { Link } from "react-router-dom";
import { globalData } from "../../data/globalData";
import "../../services.css";

function AMS() {
  const pageData = globalData.applicationManagedServices;

  if (!pageData) return null;

  return (
    <div className="ams-page-wrapper">
      {/* Section 1: Hero Banner */}
      <section className="ams-hero-banner">
        <div className="container ams-banner-container">
          <div className="ams-banner-content">
            <span className="ams-banner-subtitle">
              {pageData.banner.subtitle}
            </span>
            <h1 className="ams-banner-title">{pageData.banner.title}</h1>
            <Link
              to={pageData.banner.buttonLink}
              className="orange-button ams-cta-button"
            >
              {pageData.banner.buttonText}
            </Link>
          </div>
          <div className="ams-banner-image-wrapper">
            <img
              src={pageData.banner.image}
              alt="Application Managed Services Preview"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Credibility / Metrics Grid */}
      <section className="ams-credibility-section">
        <div className="container">
          <h2 className="ams-credibility-title">
            {pageData.credibility.title}
          </h2>
          <div className="ams-credibility-card-wrapper">
            {pageData.credibility.stats.map((stat, index) => (
              <div className="ams-stat-item" key={index}>
                <h3 className="ams-stat-value">{stat.value}</h3>
                <p className="ams-stat-desc">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Featured Growth Stories */}
      <section className="ams-growth-section">
        <div className="container">
          <h2 className="ams-section-heading">
            {pageData.growthStories.sectionTitle}
          </h2>

          <div className="ams-growth-grid">
            {/* Left Content Column */}
            <div className="ams-growth-info">
              <h3 className="ams-growth-title">
                {pageData.growthStories.heading}
              </h3>
              {pageData.growthStories.descriptionParagraphs.map(
                (para, index) => (
                  <p className="ams-growth-text" key={index}>
                    {para.includes("Talk to our experts!") ? (
                      <>
                        Ready to maximize ROI on SAP Commerce applications?{" "}
                        <Link to="/contact-us" className="ams-inline-cta">
                          Talk to our experts!
                        </Link>
                      </>
                    ) : (
                      para
                    )}
                  </p>
                ),
              )}
            </div>

            {/* Right Cards Column */}
            <div className="ams-growth-cards-wrapper">
              {pageData.growthStories.stories.map((story, index) => (
                <div className="ams-story-card" key={index}>
                  <div className="ams-story-brand">
                    <img
                      src={story.brandImage}
                      alt="Featured Icon"
                    />
                  </div>
                  <p className="ams-story-goal">
                    <strong>Goal:</strong> {story.goal}
                  </p>
                  <div className="ams-story-revenue-box">
                    <span className="ams-story-revenue">{story.revenue}</span>
                    <p className="ams-story-rev-sub">
                      {story.revenueSubtext}
                    </p>
                  </div>
                  <div className="ams-story-meta">
                    <p>
                      Client for: <strong>{story.clientDuration}</strong>
                    </p>
                    <p>
                      Services offered: <strong>{story.servicesOffered}</strong>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AMS;
