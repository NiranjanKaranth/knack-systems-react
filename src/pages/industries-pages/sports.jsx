import IndustryHero from '../../components/global/GlobalHero';
import ConsumerBrands from '../../components/industry/ConsumerBrands';
import IndustryOverview from '../../components/industry/IndustryOverview';
import OurSolutions from '../../components/industry/OurSolutions';
import GlobalCTA from '../../components/global/GlobalCTA';
import { globalData } from '../../data/globalData';
import "../../industries.css";

function Sports() {
  const content = globalData.sportsOutdoor;

  // Custom category list with the requested updated icon for Sports & Outdoor
  const consumerCategories = [
    {
      title: 'Apparel and Fashion',
      icon: 'https://www.knacksystems.com/hubfs/knack-systems-2020/Apparel-and-Fashion-02.svg',
    },
    {
      title: 'Footwear & Accessories',
      icon: 'https://www.knacksystems.com/hubfs/knack-systems-2020/Footwear-Accessories-02.svg',
    },
    {
      title: 'Sports and Outdoor',
      icon: 'https://www.knacksystems.com/hubfs/knack-systems-2020/Sports-Outdoor-01.svg',
    },
    {
      title: 'Consumer Durables',
      icon: 'https://www.knacksystems.com/hubfs/knack-systems-2020/Consumer-Durables-02.svg', 
    },
  ];

  return (
    <div className="sports-outdoor-industry-page">
      <IndustryHero 
        title={content.hero.title} 
        description={content.hero.subtitle} 
        bgImageUrl={content.hero.bgImage} 
      />
      
      <ConsumerBrands categories={consumerCategories} />
      
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

export default Sports;