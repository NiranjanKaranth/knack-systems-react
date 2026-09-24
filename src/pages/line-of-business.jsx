import { Link } from "react-router-dom";
import GlobalHero from "../components/global/GlobalHero";
import LogoCarousel from "../components/global/LogoCarousel";
import GlobalMatrix from "../components/global/GlobalMatrix";
import GlobalCTA from "../components/global/GlobalCTA";
import { globalData, sharedStats, sharedLogos } from "../data/globalData";
import "../line-of-business.css";
import "../data/common.css";

function LineOfBusiness() {
  const pageData = globalData.lineOfBusiness;

  return (
    <div className="lob-landing-page">
      {/* 1. Global Hero Banner Module */}
      <GlobalHero
        title={pageData.hero.title}
        description={pageData.hero.subtitle}
        bgImageUrl={pageData.hero.bgImage}
      />

      {/* 2. Line of Business Grid Cards Section */}
      <section className="lob-section">
        <div className="container">
          <p className="lob-intro-text">{pageData.introText}</p>
          <div className="lob-grid">
            {pageData.lobList.map((item, index) => (
              <div className="lob-card" key={index}>
                <div className="lob-image-wrapper">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="lob-content">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                  <Link className="lob-cta-btn" to={item.link}>
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Knack Systems Section */}
      <section className="why-knack-section">
        <h2 className="why-knack-title">{pageData.whyKnack.title}</h2>
        <div className="why-knack-flex container">
          <div className="why-knack-img-col">
            <img src={pageData.whyKnack.image} alt="Why Knack Systems" />
          </div>
          <div className="why-knack-text-col">
            <p>{pageData.whyKnack.subtitle}</p>
            <ul className="why-knack-list">
              {pageData.whyKnack.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Global Stats Matrix Module */}
      <GlobalMatrix stats={sharedStats} />

      {/* 5. Global Call To Action Module */}
      <GlobalCTA />

      {/* 6. Logo Carousel Module */}
      <LogoCarousel logos={sharedLogos} />
    </div>
  );
}

export default LineOfBusiness;
