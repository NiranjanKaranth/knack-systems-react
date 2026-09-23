import React from "react";
import IndustryHero from "../../components/global/GlobalHero";
import IndustryOverview from "../../components/industry/IndustryOverview";
import GlobalCTA from "../../components/global/GlobalCTA";
import { globalData } from "../../data/globalData";
import "../../industries.css";

function BuildingMaterials() {
  const content = globalData.buildingMaterials;

  return (
    <div className="building-materials-industry-page">
      <IndustryHero
        title={content.hero.title}
        description={content.hero.subtitle}
        bgImageUrl={content.hero.bgImage}
      />

      <IndustryOverview data={content.overview} />

      <section className="case-study-banner-section">
        <a href="#">
          <img src={content.bannerImage} alt="Case Study Banner" />
        </a>
      </section>

      <GlobalCTA />
    </div>
  );
}

export default BuildingMaterials;
