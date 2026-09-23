import React from "react";
import IndustryHero from "../../components/global/GlobalHero";
import ConsumerBrands from "../../components/industry/ConsumerBrands";
import IndustryOverview from "../../components/industry/IndustryOverview";
import OurSolutions from "../../components/industry/OurSolutions";
import GlobalCTA from "../../components/global/GlobalCTA";
import { globalData } from "../../data/globalData";
import "../../industries.css";


function Apparel() {
  const content = globalData.apparel;

  return (
    <div className="apparel-industry-page">
      <IndustryHero
        title={content.hero.title}
        description={content.hero.subtitle}
        bgImageUrl={content.hero.bgImage}
      />
      <ConsumerBrands />
      <IndustryOverview data={content.overview} />
      <section className="case-study-banner-section">
          <img
            src={content.bannerImage}
            alt="Case Study Banner"
          />
      </section>
      <OurSolutions data={content.solutions} />
      <GlobalCTA />
    </div>
  );
}

export default Apparel;
