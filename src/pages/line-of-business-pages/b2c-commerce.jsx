import React from "react";
import { Link } from "react-router-dom";
import GlobalHero from "../../components/global/GlobalHero";
import LogoCarousel from "../../components/global/LogoCarousel";
import GlobalCTA from "../../components/global/GlobalCTA";
import { globalData, sharedLogos } from "../../data/globalData";
import "../../line-of-business.css";

function B2CCommerce() {
  const data = globalData?.b2ccommerecePage || {};

  return (
    <div className="lob-sub-page">
      {/* 1. Global Hero Banner Module  */}
      <GlobalHero
        title={data.hero.title}
        description={data.hero.subtitle}
        bgImageUrl={data.hero.bgImage}
      />

      {/* 2. Overview Section */}
      <section className="lob-overview">
        <div className="container">
          <div className="lob-overview-grid">
            <div className="lob-overview-img-wrapper">
              <img
                src={data.overview.image}
                alt="CPQ Overview"
                className="img-fluid"
              />
            </div>
            <div className="lob-overview-text">
              <h2>{data.overview.title}</h2>
              <p>{data.overview.description1}</p>
              <p>{data.overview.description2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How We Can Help Section */}
      <section className="lob-help">
        <div className="container">
          <h2>{data.howWeCanHelp?.title}</h2>
          <p>{data.howWeCanHelp?.intro1}</p>

          <div className="lob-card-content">
            {data.howWeCanHelp.cards.map((card, idx) => (
              <div className="card" key={idx}>
                <p>{card.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Services & Services Offerings Section (Dark background theme style) */}
      <section className="lob-services">
        <div className="container">
          <h3>{data.services.title}</h3>
          <p>{data.services.subtitle1}</p>
          <h3>{data.services.sectionTitle}</h3>
          <div className="lob-services-content">
            <div className="lob-services-list">
              <ul>
                {data.services.offeringsList1.map((item, idx) => (
                  <li key={idx} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lob-services-list">
              <ul>
                {data.services.offeringsList2.map((item, idx) => (
                  <li key={idx} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Global Logo Carousel Section */}
      <LogoCarousel logos={sharedLogos} />

      {/* 7. Global CTA Section */}
      <GlobalCTA />
    </div>
  );
}

export default B2CCommerce;
