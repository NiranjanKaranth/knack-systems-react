import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { globalData } from "../../data/globalData";
import GlobalCTA from "../../components/global/GlobalCTA";
import "../../services.css";

function AMS() {
  const pageData = globalData.applicationManagedServices;

  // Initialize state for the carousel
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide effect that resets whenever the slide changes (manual click or auto)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === 0 ? 1 : 0));
    }, 4000);

    return () => clearInterval(timer);
  }, [currentSlide]);

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
                    <img src={story.brandImage} alt="Featured Icon" />
                  </div>
                  <p className="ams-story-goal">
                    <strong>Goal:</strong> {story.goal}
                  </p>
                  <div className="ams-story-revenue-box">
                    <span className="ams-story-revenue">{story.revenue}</span>
                    <p className="ams-story-rev-sub">{story.revenueSubtext}</p>
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

      {/* Section4: Support Overview & Features */}
      <section className="ams-support-overview-section">
        <div className="container ams-support-container">
          {/* Left Column: Device Mockups */}
          <div className="ams-support-image-wrapper">
            <img
              src={pageData.supportOverview?.image}
              alt="SAP Commerce Dashboard Mockup"
            />
          </div>

          {/* Right Column: Content & Bullet Points */}
          <div className="ams-support-content">
            <h3 className="ams-support-title">
              {pageData.supportOverview?.title}
            </h3>
            <p className="ams-support-desc">
              {pageData.supportOverview?.description}
            </p>

            <h3 className="ams-support-subheading">
              {pageData.supportOverview?.supportTitle}
            </h3>
            <ul className="ams-support-list">
              {pageData.supportOverview?.features?.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section5: Continuous Improvements */}
      <section className="ams-support-overview-section2">
        <div className="container ams-support-container">
          {/* Left Column: Content & Bullet Points */}
          <div className="ams-support-content">
            <h2 className="ams-support-title">
              {pageData.continuousImprovements?.title}
            </h2>
            <p className="ams-support-desc">
              {pageData.continuousImprovements?.description}
            </p>

            <h3 className="ams-support-subheading">
              {pageData.continuousImprovements?.supportTitle}
            </h3>

            <div className="list2">
              {/* Column 1 List */}
              <ul className="ams-support-list ul-list">
                {pageData.continuousImprovements?.leftFeatures?.map(
                  (item, index) => (
                    <li key={index}>
                      {item.type === "nested" ? (
                        <>
                          {item.text}
                          <ul className="ams-sub-list">
                            {item.subItems.map((sub, subIdx) => (
                              <li key={subIdx}>{sub}</li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        item.text
                      )}
                    </li>
                  ),
                )}
              </ul>

              {/* Column 2 List */}
              <ul className="ams-support-list ul-list">
                {pageData.continuousImprovements?.rightFeatures?.map(
                  (item, index) => (
                    <li key={index}>
                      {item.type === "nested" ? (
                        <>
                          {item.text}
                          <ul className="ams-sub-list">
                            {item.subItems.map((sub, subIdx) => (
                              <li key={subIdx}>{sub}</li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        item.text
                      )}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>

          {/* Right Column: Device Mockups */}
          <div className="ams-support-image-wrapper">
            <img
              src={pageData.continuousImprovements?.image}
              alt="Continuous Improvements Dashboard Mockup"
            />
          </div>
        </div>
      </section>

      {/* Section6: SAP Commerce Cloud Integration Carousel */}
      <section className="ams-integration-section">
        <div className="container ams-integration-container">
          <div className="ams-integration-header">
            <h3 className="ams-integration-title">
              {pageData.integrationSection?.title}
            </h3>
            <p className="ams-integration-desc">
              {pageData.integrationSection?.description}
            </p>
          </div>

          <div className="ams-carousel-viewport">
            <div
              className="ams-carousel-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {/* Slide 1: First 4 cards in a single horizontal row */}
              <div className="ams-carousel-slide">
                {pageData.integrationSection?.cards
                  ?.slice(0, 4)
                  .map((cardText, index) => (
                    <div className="ams-integration-card" key={index}>
                      <h6>{cardText}</h6>
                    </div>
                  ))}
              </div>

              {/* Slide 2: Next 4 cards in a single horizontal row */}
              <div className="ams-carousel-slide">
                {pageData.integrationSection?.cards
                  ?.slice(4, 8)
                  .map((cardText, index) => (
                    <div className="ams-integration-card" key={index + 4}>
                      <h6>{cardText}</h6>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div className="ams-pagination-dots">
            <span
              className={`dot ${currentSlide === 0 ? "active" : ""}`}
              onClick={() => setCurrentSlide(0)}
            ></span>
            <span
              className={`dot ${currentSlide === 1 ? "active" : ""}`}
              onClick={() => setCurrentSlide(1)}
            ></span>
          </div>
        </div>
      </section>

      {/* Section7: E-commerce Processes We Support */}
      <section className="ams-processes-section">
        <div className="container ams-processes-container">
          <div className="ams-processes-header">
            <h3 className="ams-processes-title">
              {pageData.ecommerceProcesses?.title}
            </h3>
            <p className="ams-processes-subtitle">
              {pageData.ecommerceProcesses?.subtitle}
            </p>
          </div>

          {/* 2-Column Grid of Process Cards */}
          <div className="ams-processes-grid">
            {pageData.ecommerceProcesses?.processes?.map(
              (processName, index) => (
                <div className="ams-process-card" key={index}>
                  <span className="ams-process-check">✓</span>
                  <p>{processName}</p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Section8: Unsure of Where to Begin */}
      <section className="ams-unsure-section">
        <div className="container ams-unsure-outer-wrapper">
          {/* Left Image: Touches the absolute left edge of the browser */}
          <div className="ams-unsure-image-side">
            <img
              src={pageData.unsureWhereToBegin?.image}
              alt="Unsure of where to begin preview"
            />
            <div className="ams-image-arrow">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* 9. Right Content: Aligned inside the standard container boundaries */}
          <div className="ams-unsure-content-side">
            <div className="ams-unsure-content-inner">
              <h3 className="ams-unsure-title">
                {pageData.unsureWhereToBegin?.title}
              </h3>
              <p className="ams-unsure-desc">
                {pageData.unsureWhereToBegin?.description}
              </p>

              <h4 className="ams-unsure-subheading">
                {pageData.unsureWhereToBegin?.meetingTitle}
              </h4>
              <ul className="ams-unsure-list">
                {pageData.unsureWhereToBegin?.points?.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>

              <div className="ams-unsure-cta-group">
                <Link
                  to={pageData.unsureWhereToBegin?.scheduleButtonLink}
                  className="orange-button ams-schedule-btn"
                >
                  {pageData.unsureWhereToBegin?.scheduleButtonText}
                </Link>
                <Link
                  to={pageData.unsureWhereToBegin?.brochureButtonLink}
                  className="orange-button ams-schedule-btn"
                >
                  {pageData.unsureWhereToBegin?.brochureButtonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Section: Related Services */}
      <section className="ams-related-services-section">
        <div className="container">
          <h3 className="ams-related-section-title">
            {pageData.relatedServices?.title}
          </h3>

          <div className="ams-related-grid">
            {pageData.relatedServices?.services?.map((service, index) => (
              <div
                className={`ams-related-card ${service.cardClass}`}
                key={index}
              >
                {/* Left Side: Illustration / Image */}
                <div className="ams-related-image-box">
                  <img src={service.image} alt={service.title} />
                </div>

                {/* Right Side: Content & Button */}
                <div className="ams-related-content-box">
                  <h5 className="ams-related-title">{service.title}</h5>
                  <p className="ams-related-desc">{service.description}</p>
                  <Link
                    to={service.buttonLink}
                    className="orange-button ams-related-btn"
                  >
                    {service.buttonText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Section: Start your Journey with us (Contact Form) */}
      <section className="ams-journey-section">
        <div className="container ams-journey-container">
          {/* Left Dark Card Column */}
          <div className="ams-journey-left-box">
            <div className="ams-journey-left-content">
              <h3 className="ams-journey-title">Start your Journey with us.</h3>
              <p className="ams-journey-desc">
                Fill this form to connect with an E-commerce Application Managed
                Services expert
              </p>
            </div>
          </div>

          {/* Right Form Fields Column */}
          <div className="ams-journey-form-box">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="ams-journey-form"
            >
              <div className="ams-form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder=""
                />
              </div>

              <div className="ams-form-group">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder=""
                />
              </div>

              <div className="ams-form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="" />
              </div>

              <div className="ams-form-group">
                <label htmlFor="website">Website URL</label>
                <input type="url" id="website" name="website" placeholder="" />
              </div>

              <div className="ams-form-group">
                <label htmlFor="help">How We Can Help</label>
                <textarea
                  id="help"
                  name="help"
                  rows="4"
                  placeholder=""
                ></textarea>
              </div>

              <button
                type="submit"
                className="orange-button ams-journey-submit-btn"
              >
                LET'S TALK!
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 12. Global Call To Action Module */}
      <GlobalCTA />
    </div>
  );
}

export default AMS;
