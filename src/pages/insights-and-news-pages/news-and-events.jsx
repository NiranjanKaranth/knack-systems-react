import { Link } from "react-router-dom";
import GlobalHero from "../../components/global/GlobalHero";
import GlobalCTA from "../../components/global/GlobalCTA";
import { globalData } from "../../data/globalData";
import "../../insights.css";

function NewsEvents() {
  const data = globalData?.newsAndEvents || {};

  return (
    <div className="news-and-events-page">
      {/* 1. Global Hero Banner Module  */}
      <GlobalHero
        title={data.hero.title}
        description={data.hero.subtitle}
        bgImageUrl={data.hero.bgImage}
      />

      {/* Section2: Events Grid Listing */}
      <section className="news-events-section">
        <div className="container">
          <h2 className="news-events-section-title">
            {data.eventsSection?.sectionTitle}
          </h2>

          <div className="news-events-grid">
            {data.eventsSection?.events?.map((item, index) => (
              <div className="news-event-card" key={index}>
                <div className="news-event-image-wrapper">
                  <img
                    src={item.image}
                    alt={item.title}
                    title={item.titleDescription}
                  />
                </div>

                <div className="news-event-content">
                  <h4 className="news-event-title">{item.title}</h4>
                  {item.subHeading && (
                    <h5 className="event-sub-heading">{item.subHeading}</h5>
                  )}
                  {item.dateTitle && (
                    <p className="event-date-title">{item.dateTitle}</p>
                  )}
                  <p
                    className="news-event-desc"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></p>
                  {item.subDescription && <p>{item.subDescription}</p>}

                  {item.date && <p className="news-event-date">{item.date}</p>}
                  {item.location && (
                    <p className="news-event-location">{item.location}</p>
                  )}

                  {/* Conditionally render button only if buttonText exists */}
                  {item.buttonText && (
                    <Link
                      to={item.buttonLink}
                      className="orange-button news-event-btn"
                    >
                      {item.buttonText}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Global CTA Section */}
      <GlobalCTA />
    </div>
  );
}

export default NewsEvents;
