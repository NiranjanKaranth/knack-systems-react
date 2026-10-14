import React from "react";
import { globalData } from "../../data/globalData";
import "../../solutions.css";

function SapCommerceCloud() {
  const pageData = globalData?.sapCommerceCloud || {};
  const heroData = pageData.hero || {};
  const problemData = pageData.theProblem || {};

  const faqData = pageData.faqs || {};
  const [openFaqId, setOpenFaqId] = React.useState(1);

  const toggleFaq = (id) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  const customersData = pageData.customersSection || {};

  const ctaData = pageData.ctaSection || {};

  return (
    <div className="sap-commerce-cloud-page">
      {/* 1. Hero / Banner Section */}
      <section
        className="sap-commerce-hero"
        style={{ backgroundImage: `url(${heroData.bgImage})` }}
      >
        <div className="container">
          <div className="sap-hero-content">
            <h1 className="sap-hero-title">
              {heroData.titlePrefix}
              <span className="highlight-text">{heroData.titleHighlight}</span>
            </h1>
            <p className="sap-hero-desc">{heroData.description}</p>
            {heroData.buttonText && (
              <a
                href={heroData.buttonLink}
                className="orange-button sap-hero-btn"
              >
                {heroData.buttonText}
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="sap-problem-section">
        <div className="container">
          {/* Top Tagline with decorative lines */}
          <div className="section-tagline-wrapper">
            <h5 className="section-tagline">{problemData.tagline}</h5>
          </div>

          {/* Main Section Heading */}
          <h2 className="problem-main-heading">{problemData.mainHeading}</h2>

          {/* 4 Cards Grid */}
          <div className="problem-cards-grid">
            {problemData.cards?.map((card) => (
              <div className="problem-card" key={card.id}>
                <div className="problem-card-icon-wrapper">
                  <img
                    src={card.icon}
                    alt={card.title}
                    title={card.title}
                    className="problem-card-icon"
                  />
                </div>
                <h6 className="problem-card-title">{card.title}</h6>
                <p className="problem-card-desc">{card.description}</p>
              </div>
            ))}
          </div>

          {/* Footer Summary Text */}
          <p className="problem-footer-text">{problemData.footerText}</p>
        </div>
      </section>

      <section className="sap-faq-section">
        <div className="container">
          <h2 className="faq-main-title">{faqData.title}</h2>

          <div className="faq-accordion-list">
            {faqData.items?.map((item) => {
              const isOpen = openFaqId === item.id;
              return (
                <div
                  className={`faq-accordion-item ${isOpen ? "active" : ""}`}
                  key={item.id}
                >
                  <button
                    className="faq-accordion-header"
                    onClick={() => toggleFaq(item.id)}
                    aria-expanded={isOpen}
                  >
                    <p className="faq-question-text">{item.question}</p>
                    <span className={`faq-arrow-icon ${isOpen ? "open" : ""}`}>
                      <svg
                        width="16"
                        height="10"
                        viewBox="0 0 16 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 2L8 8L14 2"
                          stroke="#555555"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <div className="faq-accordion-body">
                      <p className="faq-answer-text">{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sap-customers-section">
        <div className="container">
          <h3 className="customers-main-title">{customersData.title}</h3>

          <div className="customers-logo-grid">
            {customersData.logos?.map((item) => (
              <div className="customer-logo-card" key={item.id}>
                <img
                  src={item.logoUrl}
                  alt={item.name}
                  title={item.name}
                  className="customer-logo-img"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sap-cta-section">
        <div className="container">
          {/* Top Tagline with center lines */}
          <div className="cta-tagline-wrapper">
            <span className="cta-tagline-line"></span>
            <span className="cta-tagline-text">{ctaData.tagline}</span>
            <span className="cta-tagline-line"></span>
          </div>

          {/* Main Heading & Description */}
          <h3 className="cta-heading">{ctaData.heading}</h3>
          <p className="cta-description">{ctaData.description}</p>

          {/* Action Buttons */}
          <div className="cta-buttons-wrapper">
            {ctaData.primaryBtnText && (
              <a href={ctaData.primaryBtnLink} className="orange-button">
                {ctaData.primaryBtnText}
              </a>
            )}
            {ctaData.secondaryBtnText && (
              <a
                href={ctaData.secondaryBtnLink}
                className="cta-btn orange-button"
              >
                {ctaData.secondaryBtnText}
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default SapCommerceCloud;
