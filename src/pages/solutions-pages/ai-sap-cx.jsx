import React from "react";
import { globalData } from "../../data/globalData";
import "../../solutions.css";

function AiSAPCX() {
  const pageData = globalData?.AiSAPCX || {};
  const ctaData = pageData.assessmentCta || {};
  const sectionData = pageData.knackDifferent || {};
  const cards = sectionData.cards || [];

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(
    window.innerWidth < 768 ? 1 : 2,
  );

  React.useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 2);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Total sliding steps (4 steps for 5 items showing 2 per page)
  const maxIndex = Math.max(0, cards.length - itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <div className="ai-sap-commerce-cloud-page">
      {/* 1. Hero / Banner Section */}
      <section
        className="sap-commerce-hero"
        style={{ backgroundImage: `url(${pageData.hero?.bgImage})` }}
      >
        <div className="container">
          <div className="sap-cx-hero-content">
            <h1 className="sap-hero-title">{pageData.hero?.titlePrefix}</h1>
            <h4 className="sap-cx-sub-text">{pageData.hero?.titleHighlight}</h4>
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

      {/* 2. AI Focus Areas Section */}
      <section className="ai-focus-section">
        <div className="container">
          {/* Main Section Header */}
          <h2 className="focus-main-heading">
            {pageData.focusAreas?.titlePrefix}
            <span className="highlight-text">
              {pageData.focusAreas?.titleHighlight}
            </span>
          </h2>
          <p className="focus-subtitle">{pageData.focusAreas?.subtitle}</p>

          {/* 3 Cards Grid */}
          <div className="focus-cards-grid">
            {pageData.focusAreas?.cards?.map((card) => (
              <div className="focus-card" key={card.id}>
                {/* Orange Icon Container */}
                <div className="focus-icon-wrapper">
                  <img
                    src={card.icon}
                    alt={card.title}
                    title={card.title}
                    className="focus-icon"
                  />
                </div>

                <h5 className="focus-card-title">{card.title}</h5>
                <p className="focus-card-desc">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="knack-different-section">
        <div className="container">
          {/* Section Header */}
          <h3 className="knack-different-heading">
            {sectionData.titlePrefix}
            <span className="highlight-text">
              {sectionData.titleHighlight || sectionData.highlight}
            </span>
          </h3>
          <p className="knack-different-subtitle">{sectionData.subtitle}</p>

          {/* Carousel Outer Wrapper */}
          <div className="carousel-relative-container">
            {/* Left Arrow */}
            <button
              className="carousel-dot-arrow left-arrow"
              onClick={handlePrev}
              aria-label="Previous Slide"
            >
              &#8592;
            </button>

            {/* Carousel Viewport / Track */}
            <div className="carousel-viewport-container">
              <div
                className="carousel-track"
                style={{
                  transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
                }}
              >
                {cards.map((card) => (
                  <div
                    className="carousel-card-slide"
                    key={card.id}
                    style={{ flex: `0 0 ${100 / itemsPerPage}%` }}
                  >
                    <div className="knack-different-card">
                      <h4 className="card-heading">{card.title}</h4>
                      <p className="card-description">{card.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button
              className="carousel-dot-arrow right-arrow"
              onClick={handleNext}
              aria-label="Next Slide"
            >
              &#8594;
            </button>
          </div>

          {/* Dots / Pagination Indicators matching 4 step states */}
          <div className="carousel-dots-wrapper">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                className={`carousel-dot ${idx === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        className="ai-assessment-cta-section"
        style={{
          backgroundImage: `url(${ctaData.bgImage})`,
          backgroundColor: "#202020",
        }}
      >
        <div className="container">
          {/* Main Heading */}
          <h3 className="ai-cta-heading">
            {ctaData.headingPart1}
            <span className="highlight-text">{ctaData.headingHighlight}</span>
            {ctaData.headingPart2}
          </h3>

          {/* Inner Content Box Matching DevTools Styles */}
          <div className="activate-box-content">
            <h3 className="ai-box-title">{ctaData.boxTitle}</h3>
            <p className="ai-box-desc">{ctaData.boxDescription}</p>
            {ctaData.buttonText && (
              <a href={ctaData.buttonLink} className="orange-button ai-cta-btn">
                {ctaData.buttonText}
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AiSAPCX;
