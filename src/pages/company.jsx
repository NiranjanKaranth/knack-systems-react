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

      {/* 3. Global Stats Matrix Module */}
      <GlobalMatrix stats={sharedStats} />

      {/* 4. Global Call To Action Module */}
      <GlobalCTA />

      {/* 5. Logo Carousel Module */}
      <LogoCarousel logos={sharedLogos} />
    </div>
  );
}

export default Company;
