import { Link } from "react-router-dom";
import GlobalHero from "../components/global/GlobalHero";
import LogoCarousel from "../components/global/LogoCarousel";
import GlobalMatrix from "../components/global/GlobalMatrix";
import GlobalCTA from "../components/global/GlobalCTA";
import { globalData, sharedStats, sharedLogos } from "../data/globalData";
import "../services.css";
import "../data/common.css";

function ServicesPage() {
  const pageData = globalData.services;

  return (
    <div className="services-landing-page">
      {/* 1. Global Hero Banner Module */}
      <GlobalHero
        title={pageData.hero.title}
        description={pageData.hero.subtitle}
        bgImageUrl={pageData.hero.bgImage}
      />

      {/* 2. Services Grid Section */}
      <section className="services-section">
        <div className="container">
          <div className="services-grid">
            {pageData.lobList.map((item, index, arr) => (
              <div 
                className={`services-card ${index === arr.length - 1 ? 'single-item-last' : ''}`} 
                key={index}
              >
                <div className="services-image-wrapper">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="services-content">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                  <Link className="orange-button" to={item.link}>
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
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

export default ServicesPage;