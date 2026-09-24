import IndustryHero from "../../components/global/GlobalHero";
import IndustryOverview from "../../components/industry/IndustryOverview";
import GlobalCTA from "../../components/global/GlobalCTA";
import { globalData } from "../../data/globalData";
import "../../industries.css";

function HighTech() {
  const content = globalData.hightech;

  return (
    <div className="hightech-industry-page">
      <IndustryHero
        title={content.hero.title}
        description={content.hero.subtitle}
        bgImageUrl={content.hero.bgImage}
      />

      <IndustryOverview data={content.overview} />

      <GlobalCTA />
    </div>
  );
}

export default HighTech;
