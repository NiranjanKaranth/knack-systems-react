import { Link } from "react-router-dom";
import GlobalHero from "../../components/global/GlobalHero";
import LogoCarousel from "../../components/global/LogoCarousel";
import GlobalCTA from "../../components/global/GlobalCTA";
import { globalData, sharedLogos } from "../../data/globalData";
import "../../line-of-business.css";

function B2BCommerce() {
  const data = globalData?.b2bcommerecePage || {};

  // Helper function to render text segments or link objects safely
  const renderParagraphWithLinks = (content) => {
    if (typeof content === "string") return content;
    if (!Array.isArray(content)) return "";

    return content.map((segment, index) => {
      if (typeof segment === "string") {
        return segment;
      } else if (segment && segment.link) {
        return (
          <Link key={index} to={segment.link} className="content-inline-link">
            {segment.text}
          </Link>
        );
      }
      return null;
    });
  };

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
          <p>{renderParagraphWithLinks(data.howWeCanHelp?.intro1)}</p>

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
          <p>{data.services.subtitle2}</p>
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

      {/* 5. Our Solution Section */}
      <section className="lob-solution">
        <div className="container">
          <h2>{data.ourSolution.title}</h2>
          <div className="solutions-content commerce">
            <div className="solutions-col">
              <h4>{data.ourSolution.heading}</h4>
              <p>{data.ourSolution.challengesTitle1}</p>
              <p>
                {renderParagraphWithLinks(data.ourSolution.challengesTitle2)}
              </p>
              <div className="solutions-main-content">
                <div className="solutions-list">
                  <h5>{data.ourSolution.offersTitle}</h5>
                  <ul>
                    {data.ourSolution.offersList.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="solutions-col-img">
              <img
                src={data.ourSolution.image}
                alt="SeasonOne"
                className="img-fluid"
              />
              <h6>
                <a href="#" className="b2b-img-heading">
                  {data.ourSolution.imgheading}
                </a>
              </h6>
              <p>{data.ourSolution.text}</p>
              <a
                href={data.ourSolution.requestButtonLink}
                className="black-button"
              >
                {data.ourSolution.requestButtonText}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Global Logo Carousel Section */}
      <LogoCarousel logos={sharedLogos} />

      {/* 8. Global CTA Section */}
      <GlobalCTA />
    </div>
  );
}

export default B2BCommerce;
