import { Link } from "react-router-dom"; 
import GlobalHero from "../components/global/GlobalHero";
import LogoCarousel from "../components/global/LogoCarousel";
import GlobalMatrix from "../components/global/GlobalMatrix";
import GlobalCTA from "../components/global/GlobalCTA";
import { globalData, sharedStats, sharedLogos } from "../data/globalData";
import "../industries.css";
import "../data/common.css";

function Industries() {
  const pageData = globalData.mainIndustriesLanding;

  return (
    <div className="industries-landing-page">
      {/* 1. Global Hero Banner Section */}
      <GlobalHero 
        title={pageData.hero.title} 
        description={pageData.hero.subtitle} 
        bgImageUrl={pageData.hero.bgImage} 
      />

      {/* 2. Industries Grid (Overview Section with unique individual router links) */}
      <section className="industries-section">
        <div className="container industries-grid">
          {pageData.industriesList.map((item, index) => (
            <div className="industry-card" key={index}>
              <div className="industry-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="industry-content">
                <h4>{item.title}</h4>
                <p>{item.text}</p>
                {/* Uses React Router's <Link> component mapped to your App.js paths */}
                <Link to={item.link} className="cta-button">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Global Stats Section (Using sharedStats) */}
      <GlobalMatrix stats={sharedStats} />

      {/* 4. Global CTA Section */}
      <GlobalCTA />

      {/* 5. Logo Carousel Section (Using sharedLogos) */}
      <LogoCarousel logos={sharedLogos} />
    </div>
  );
}

export default Industries;