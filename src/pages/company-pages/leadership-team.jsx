import { useState } from "react";
import { Link } from "react-router-dom";
import GlobalHero from "../../components/global/GlobalHero";
import LogoCarousel from "../../components/global/LogoCarousel";
import GlobalMatrix from "../../components/global/GlobalMatrix";
import GlobalCTA from "../../components/global/GlobalCTA";
import { globalData, sharedStats, sharedLogos } from "../../data/globalData";
import "../../company.css";

function LeadershipTeam() {
  const pageData = globalData.leadership;

  return (
    <div className="leadership-landing-page">
      {/* 1. Global Hero Banner Module */}
      <GlobalHero
        title={pageData.hero?.title}
        description={pageData.hero?.subtitle}
        bgImageUrl={pageData.hero?.bgImage}
      />

      {/* 2. Leadership Team Module */}
      <section className="leadership-section">
        <div className="container">
          <h2 className="leadership-title">{pageData.title}</h2>

          <div className="leadership-grid">
            {pageData.members?.map((member) => (
              <div className="leadership-card" key={member.id}>
                <div className="leadership-image-wrapper">
                  <img
                    src={member.image}
                    alt={member.name}
                    title={member.name}
                    className="leadership-img"
                  />
                </div>
                <h3 className="leadership-name">{member.name}</h3>
                <p className="leadership-role">{member.role}</p>
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

export default LeadershipTeam;
