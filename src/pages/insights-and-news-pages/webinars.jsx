import { Link } from "react-router-dom";
import GlobalHero from "../../components/global/GlobalHero";
import GlobalCTA from "../../components/global/GlobalCTA";
import { globalData } from "../../data/globalData";
import "../../insights.css";

function Webinars() {
  const data = globalData?.Webinars || {};

  return (
    <div className="lob-sub-page">
      {/* 1. Global Hero Banner Module  */}
      <GlobalHero
        title={data.hero.title}
        description={data.hero.subtitle}
        bgImageUrl={data.hero.bgImage}
      />

      {/* Section2: New On-Demand Webinar Showcase */}
      <section className="webinar-featured-section">
        <div className="container">
          <h2 className="webinar-section-title">
            {data.featuredWebinar?.sectionTitle}
          </h2>

          <div className="webinar-featured-card">
            {/* Left Column: Image wrapper */}
            <div className="webinar-card-image-wrapper">
              <img
                src={data.featuredWebinar?.cardImage}
                alt={data.featuredWebinar?.mainTitle}
              />
            </div>

            {/* Right Content Column (remains the same) */}
            <div className="webinar-card-right">
              <h3 className="webinar-main-title">
                {data.featuredWebinar?.mainTitle}
              </h3>
              <p className="webinar-desc">
                {data.featuredWebinar?.description}
              </p>
              <p className="webinar-subdesc">
                {data.featuredWebinar?.subDescription}
              </p>
              <Link
                to={data.featuredWebinar?.buttonLink}
                className="orange-button webinar-cta-btn"
              >
                {data.featuredWebinar?.buttonText}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section3: Webinar Cards Listing Grid */}
      <section className="webinar-list-section">
        <div className="container">
          <h2 className="webinar-list-section-title">
            {data.webinarListSection?.sectionTitle}
          </h2>

          <div className="webinar-cards-grid">
            {data.webinarListSection?.webinars?.map((webinar, index) => (
              <div className="webinar-item-card" key={index}>
                <div className="webinar-item-image">
                  <img src={webinar.image} alt={webinar.title} />
                </div>

                <div className="webinar-item-content">
                  {webinar.categoryBadge && (
                    <span className="webinar-item-badge">
                      {webinar.categoryBadge}
                    </span>
                  )}
                  <h4 className="webinar-item-title">{webinar.title}</h4>
                  <p className="webinar-item-desc">{webinar.description}</p>
                  <Link
                    to={webinar.buttonLink}
                    className="orange-button webinar-item-btn"
                  >
                    {webinar.buttonText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Global CTA Section */}
      <GlobalCTA />
    </div>
  );
}

export default Webinars;
