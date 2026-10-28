import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import GlobalCTA from "../../components/global/GlobalCTA";
import { globalData } from "../../data/globalData";
import "../../solutions.css";

function SapB2BSelfServicePortal() {
  const pageData = globalData?.SapB2BSelfServicePortal || {};
  const banner = pageData?.heroBanner || {};

  // Insights Slider State & Logic
  const insightsData = pageData?.insightsSection || {};
  const slides = insightsData?.slides || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);
  const timeoutRef = useRef(null);

  // Auto-slide effect
  useEffect(() => {
    if (isPaused || slides.length === 0) return;

    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);

    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex, isPaused, slides.length]);

  const handleNext = () => {
    setIsPaused(true); // Stop auto scroll on user interaction
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setIsPaused(true); // Stop auto scroll on user interaction
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length,
    );
  };

  return (
    <div className="sap-B2B-self-service-portal-page">
      {/* Hero / Banner Section */}
      <section className="sap-b2b-banner-section">
        <div className="container sap-b2b-banner-container">
          {/* Left Text Content */}
          <div className="sap-b2b-banner-content">
            <h1 className="sap-b2b-banner-title">
              {banner?.title ||
                "Launch the New SAP B2B Self-Service Portal in Weeks"}
            </h1>

            <h2 className="sap-b2b-banner-subtitle">
              {banner?.subtitle || "Purpose-Built for SAP ERP Customers."}
            </h2>

            <h4 className="sap-b2b-banner-tagline">
              {banner?.tagline || "Powered by KNACK SYSTEMS."}
            </h4>

            <h5 className="sap-b2b-banner-highlight">
              {banner?.highlightText ||
                "Your Fastest Path to B2B Self-Service Success."}
            </h5>

            {/* Action Buttons */}
            <div className="sap-b2b-banner-actions">
              <Link
                to={banner?.primaryCtaLink || "/contact-us"}
                className="black-button"
              >
                {banner?.primaryCtaText || "BOOK A PERSONALIZED DEMO!"}
              </Link>

              <a
                href={banner?.secondaryCtaLink || "#"}
                className="orange-button banner-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                {banner?.secondaryCtaText || "Download Brochure"}
              </a>
            </div>

            {/* Disclaimer Text */}
            <p className="sap-b2b-banner-disclaimer">
              {banner?.disclaimer ||
                "*Actual implementation times may differ depending on organizational strategy, roadmap, integration needs, and customization requirements."}
            </p>
          </div>

          {/* Right Image Container */}
          <div className="sap-b2b-banner-image-wrapper">
            <img
              src={
                banner?.bannerImage ||
                "https://2435241.fs1.hubspotusercontent-na1.net/hubfs/2435241/B2B-Self-Service-Portal-new/banner-image_v02.png"
              }
              alt={banner?.title || "SAP B2B Self-Service Portal"}
              className="sap-b2b-banner-img"
            />
          </div>
        </div>
      </section>

      <section className="b2b-customers-section">
        <div className="container">
          {/* Section Heading */}
          <h2 className="b2b-customers-title">
            {pageData?.customerLogosSection?.title ||
              "Our B2B Self-Service Portal Customers"}
          </h2>

          {/* Logo Cards Grid */}
          <div className="b2b-customers-grid">
            {pageData?.customerLogosSection?.logos?.map((logo, index) => (
              <div className="b2b-customer-card" key={index}>
                <img
                  src={logo.url}
                  alt={logo.alt || "Customer Logo"}
                  className="b2b-customer-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sap-testimonial-section">
        <div className="container sap-testimonial-container">
          {/* Left Video Thumbnail Card */}
          <div className="sap-testimonial-image-wrapper">
            <img
              src={
                pageData?.testimonialSection?.videoThumbnail ||
                "https://www.knacksystems.com/hubfs/B2B-Self-Service-Portal-new/Imaran-video-thumbnail-v4.png"
              }
              alt={pageData?.testimonialSection?.authorName || "Imran Shahdad"}
              className="sap-testimonial-thumb"
            />
            <div className="sap-play-button-overlay">
              <span className="sap-play-icon">▶</span>
            </div>
          </div>

          {/* Right Content Column */}
          <div className="sap-testimonial-content">
            <div className="sap-quote-icon-wrapper">
              <img
                src={
                  pageData?.testimonialSection?.quoteIcon ||
                  "https://2435241.fs1.hubspotusercontent-na1.net/hubfs/2435241/B2B-Self-Service-Portal-new/quotemark_v02.svg"
                }
                alt="Quote"
                className="sap-quote-icon"
              />
            </div>

            <h4 className="sap-testimonial-quote">
              {pageData?.testimonialSection?.quoteText ||
                "Knack Systems’ expertise in delivering cutting-edge commerce solutions and expanding self-service use cases makes them the perfect partner for SAP’s B2B Self-Service Portal."}
            </h4>

            <div className="sap-testimonial-author-info">
              <h4 className="sap-author-name">
                {pageData?.testimonialSection?.authorName || "Imran Shahdad"}
              </h4>
              <p className="sap-author-title">
                {pageData?.testimonialSection?.authorTitle ||
                  "Global VP, SAP CX, Commerce, Consumer Industries & Customer Engagement Solutions"}
              </p>
              <div className="sap-author-company">
                {pageData?.testimonialSection?.companyLogoText || "SAP"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources & Insights Slider Section */}
      <section className="sap-insights-section">
        <div className="container">
          <h3 className="sap-insights-title">
            {insightsData?.title ||
              "Latest B2B Self-Service Portal Resources & Insights!"}
          </h3>

          <div className="sap-insights-carousel-viewport">
            <div
              ref={trackRef}
              className="sap-insights-track"
              style={{
                transform: `translateX(-${currentIndex * (100 / (window.innerWidth <= 576 ? 1 : window.innerWidth <= 992 ? 2 : 3))}%)`,
              }}
            >
              {slides.map((slide, index) => (
                <div className="sap-insight-card" key={index}>
                  <div className="sap-insight-image-box">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="sap-insight-img"
                    />
                  </div>
                  <h3 className="sap-insight-card-title">{slide.title}</h3>
                  <p className="sap-insight-card-desc">{slide.description}</p>
                  <Link
                    to={slide.linkUrl || "#"}
                    className="orange-button banner-btn"
                  >
                    {slide.linkText || "Read More"}
                  </Link>
                </div>
              ))}
            </div>

            {/* Navigation Arrows (No dots rendered anywhere) */}
            <div className="sap-insights-arrows">
              <button
                className="sap-arrow-btn"
                onClick={handlePrev}
                aria-label="Previous Slide"
              >
                ❮
              </button>
              <button
                className="sap-arrow-btn"
                onClick={handleNext}
                aria-label="Next Slide"
              >
                ❯
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Global Call To Action Module */}
      <GlobalCTA />
    </div>
  );
}

export default SapB2BSelfServicePortal;
