import React from "react";
import { globalData } from "../../data/globalData";
import "../../solutions.css";

function AiSAPCX() {
  const pageData = globalData?.AiSAPCX || {};

  return (
    <div className="sap-commerce-cloud-page">
      {/* 1. Hero / Banner Section */}
      <section
        className="sap-commerce-hero"
        style={{ backgroundImage: `url(${pageData.hero?.bgImage})` }}
      >
        <div className="container">
          <div className="sap-cx-hero-content">
            <h1 className="sap-hero-title">{pageData.hero?.titlePrefix}</h1>
            <h4 className="sap-cx-sub-text">
              {pageData.hero?.titleHighlight}
            </h4>
            <p className="sap-cx-hero-desc">{pageData.hero?.description}</p>
            {pageData.hero?.buttonText && (
              <a href={pageData.hero?.buttonLink} className="orange-button">
                {pageData.hero?.buttonText}
              </a>
            )}

            {/* Feature Boxes Grid */}
            <div className="sap-hero-features">
              {pageData.hero?.features?.map((featureText, index) => (
                <div key={index} className="sap-feature-box">
                  <p>{featureText}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why AI Matters for Customer Experience Section */}
      <section className="why-ai-matters-section">
        <div className="container">
          <h2 className="why-ai-title">
            {pageData.whyAiMatters?.titlePrefix}
            <span className="highlight-text">
              {pageData.whyAiMatters?.titleHighlight}
            </span>
          </h2>

          <div className="why-ai-content-wrapper">
            {/* Left Column: Image */}
            <div className="why-ai-image-col">
              <img
                src={pageData.whyAiMatters?.image}
                alt="AI Customer Experience"
                className="why-ai-graphic"
              />
            </div>

            {/* Right Column: Dynamic Feature List */}
            <div className="why-ai-list-col">
              {pageData.whyAiMatters?.items?.map((item, index) => (
                <div key={index} className="why-ai-item">
                  <div className="why-ai-icon-box">
                    <img
                      src={item.icon}
                      alt="icon"
                      className="why-ai-svg-icon"
                    />
                  </div>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AiSAPCX;
