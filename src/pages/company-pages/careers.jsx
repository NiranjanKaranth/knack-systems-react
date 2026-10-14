import React, { useState } from "react";
import GlobalHero from "../../components/global/GlobalHero";
import GlobalCTA from "../../components/global/GlobalCTA";
import { globalData } from "../../data/globalData";
import "../../company.css";

function Careers() {
  const data = globalData?.careersPage || {};
  const lifeData = data.lifeAtKnack || {};
  const whyWorkData = data.whyWorkSection || {};

  const defaultYear = lifeData.tabs?.[0]?.year || "2026";
  const [activeTabYear, setActiveTabYear] = useState(defaultYear);
  const [openMobileYear, setOpenMobileYear] = useState(defaultYear);
  const [carouselIndices, setCarouselIndices] = useState({});

  const getActiveYearData = (year) => {
    return (
      lifeData.tabs?.find((tab) => tab.year === year) || lifeData.tabs?.[0]
    );
  };

  const handleMobileAccordionToggle = (year) => {
    setOpenMobileYear((prev) => (prev === year ? null : year));
  };

  const handlePrev = (year, totalSlides) => {
    setCarouselIndices((prev) => {
      const current = prev[year] || 0;
      return { ...prev, [year]: current === 0 ? totalSlides - 1 : current - 1 };
    });
  };

  const handleNext = (year, totalSlides) => {
    setCarouselIndices((prev) => {
      const current = prev[year] || 0;
      return { ...prev, [year]: current === totalSlides - 1 ? 0 : current + 1 };
    });
  };

  const renderCarouselStage = (tabItem) => {
    const year = tabItem.year;
    const slides = tabItem.slides || [];
    const currentIndex = carouselIndices[year] || 0;

    if (!slides.length) return null;

    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    const nextIndex = (currentIndex + 1) % slides.length;

    return (
      <div className="life-carousel-container">
        <div className="life-carousel-stage">
          {/* Left Peeking Shaded Image (Desktop) */}
          {slides.length > 1 && (
            <div className="life-carousel-peak left-peak">
              <div className="life-single-img-card">
                <img
                  src={slides[prevIndex]}
                  alt={`Life at Knack ${year}`}
                  title={`Life at Knack ${year}`}
                />
              </div>
            </div>
          )}

          {/* Main Active Single Image Slide Stage */}
          <div className="life-carousel-stage-wrapper">
            <div
              className="life-carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {slides.map((imgUrl, sIdx) => (
                <div className="life-slide-item" key={sIdx}>
                  <div className="life-single-img-card">
                    <img
                      src={imgUrl}
                      alt={`Life at Knack ${year} ${sIdx + 1}`}
                      title={`Life at Knack ${year}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Peeking Shaded Image (Desktop) */}
          {slides.length > 1 && (
            <div className="life-carousel-peak right-peak">
              <div className="life-single-img-card">
                <img
                  src={slides[nextIndex]}
                  alt={`Life at Knack ${year}`}
                  title={`Life at Knack ${year}`}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderControlsAndDots = (tabItem) => {
    const year = tabItem.year;
    const slides = tabItem.slides || [];
    const currentIndex = carouselIndices[year] || 0;

    if (slides.length <= 1) return null;

    return (
      <div className="life-carousel-footer-controls">
        <div className="life-carousel-controls">
          <button
            className="carousel-tabmenu-btn prev-btn"
            onClick={() => handlePrev(year, slides.length)}
            aria-label="Previous Slide"
          >
            &#10094;
          </button>
          <button
            className="carousel-tabmenu-btn next-btn"
            onClick={() => handleNext(year, slides.length)}
            aria-label="Next Slide"
          >
            &#10095;
          </button>
        </div>

        <div className="life-carousel-dots">
          {slides.map((_, dotIdx) => (
            <span
              key={dotIdx}
              className={`dot ${currentIndex === dotIdx ? "active" : ""}`}
              onClick={() =>
                setCarouselIndices({ ...carouselIndices, [year]: dotIdx })
              }
            ></span>
          ))}
        </div>
      </div>
    );
  };

  const currentActiveTab = getActiveYearData(openMobileYear || activeTabYear);

  return (
    <div className="careers-sub-page">
      <GlobalHero
        title={data.hero?.title}
        description={data.hero?.subtitle}
        bgImageUrl={data.hero?.bgImage}
      />

      <section className="life-knack-section">
        <div className="container">
          <h2 className="life-knack-title">{lifeData.title}</h2>
          <p className="life-knack-subtitle">{lifeData.subtitle}</p>

          {/* DESKTOP VIEW */}
          <div className="life-tabs-desktop">
            <div className="life-tabs-header">
              {lifeData.tabs?.map((tab) => (
                <button
                  key={tab.year}
                  className={`life-tab-btn ${
                    activeTabYear === tab.year ? "active" : ""
                  }`}
                  onClick={() => setActiveTabYear(tab.year)}
                >
                  {tab.year}
                </button>
              ))}
            </div>

            <div className="life-tabs-content">
              {lifeData.tabs?.map(
                (tab) =>
                  activeTabYear === tab.year && (
                    <React.Fragment key={tab.year}>
                      {renderCarouselStage(tab)}
                      {renderControlsAndDots(tab)}
                    </React.Fragment>
                  ),
              )}
            </div>
          </div>

          {/* MOBILE VIEW */}
          <div className="life-accordion-mobile">
            <div className="life-accordion-stack">
              {lifeData.tabs?.map((tab) => {
                const isOpen = openMobileYear === tab.year;
                return (
                  <div className="life-accordion-item" key={tab.year}>
                    <button
                      className={`life-accordion-header ${
                        isOpen ? "active" : ""
                      }`}
                      onClick={() => handleMobileAccordionToggle(tab.year)}
                    >
                      <span>{tab.year}</span>
                      <span className="accordion-arrow">
                        {isOpen ? "\u25B2" : "\u25BC"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="life-accordion-body">
                        {renderCarouselStage(tab)}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {openMobileYear && currentActiveTab && (
              <div className="mobile-single-controls-wrapper">
                {renderControlsAndDots(currentActiveTab)}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. Why Work With Knack Systems Section */}
      <section className="why-work-section">
        <div className="container">
          <h2 className="why-work-title">{whyWorkData.title}</h2>

          <div className="why-work-grid">
            {whyWorkData.cards?.map((card) => (
              <div className="why-work-card" key={card.id}>
                <h4 className="why-work-card-title">{card.title}</h4>
                <p
                  className="why-work-card-desc"
                  dangerouslySetInnerHTML={{ __html: card.description }}
                ></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Global Call To Action Module */}
      <GlobalCTA />
    </div>
  );
}

export default Careers;
