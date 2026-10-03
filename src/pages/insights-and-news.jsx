import { Link } from "react-router-dom";
import GlobalHero from "../components/global/GlobalHero";
import GlobalCTA from "../components/global/GlobalCTA";
import { globalData } from "../data/globalData";
import "../insights.css";
import "../data/common.css";

function InsightsNews() {
  const pageData = globalData.insights || {};
  const newsRoomItems = pageData.newsRoom || [];
  const eventItems = pageData.events || [];
  const blogsCards = pageData.blogs || [];
  const demandCards = pageData.demand || [];

  return (
    <div className="Insights-landing-page">
      {/* 1. Global Hero Banner Module */}
      <GlobalHero
        title={pageData.hero?.title}
        description={pageData.hero?.subtitle}
        bgImageUrl={pageData.hero?.bgImage}
      />

      {/* 2. Blogs Section */}
      <section className="blogs-section">
        <div className="container">
          {/* Section Heading */}
          <div className="blogs-header">
            <h3 className="blogs-main-title">Latest Blogs</h3>
          </div>

          {/* 4-Column Cards Grid */}
          <div className="blogs-cards-grid">
            {blogsCards.map((card) => (
              <div key={card.id} className="blogs-card-item">
                <div className="blogs-card-image-box">
                  <img src={card.image} alt={card.title} />
                </div>
                <div className="blogs-card-content">
                  <h5 className="blogs-card-title">{card.title}</h5>
                  <p className="blogs-card-desc">{card.description}</p>
                  <a href={card.linkUrl} className="orange-button blogs-btn">
                    {card.linkText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. On Demand Webinars Section */}
      <section className="demand-section">
        <div className="container">
          {/* Section Heading */}
          <div className="blogs-header">
            <h3 className="blogs-main-title">On-Demand Webinars</h3>
          </div>

          {/* 4-Column Cards Grid */}
          <div className="blogs-cards-grid">
            {demandCards.map((card) => (
              <div key={card.id} className="blogs-card-item">
                <div className="blogs-card-image-box">
                  <img src={card.image} alt={card.title} />
                </div>
                <div className="blogs-card-content">
                  <h5 className="demand-card-title">{card.title}</h5>
                  <a href={card.linkUrl} className="orange-button blogs-btn">
                    {card.linkText}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="button-parent">
            <Link to="/webinars" className="black-button">
              SEE ALL
            </Link>
          </div>
        </div>
      </section>

      {/* 4. News Room & Events 2-Column Section */}
      <section className="insights-section">
        <div className="container">
          <div className="insights-grid">
            {/* News Room Column */}
            <div className="insights-card">
              <div className="insights-title">
                <h3>News Room</h3>
              </div>
              {newsRoomItems.map((news, index) => (
                <div key={index} className="insights-news-card">
                  <div className="insights-image-wrapper">
                    <img src={news.image} alt={news.title} />
                  </div>
                  <div className="insights-content">
                    <p>{news.text1}</p>
                    <p>{news.text2}</p>
                    <Link className="orange-button" to={news.link}>
                      Read more
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Events Column */}
            <div className="insights-card">
              <div className="insights-title">
                <h3>Events</h3>
              </div>
              {eventItems.map((event, index) => (
                <div key={index} className="insights-card">
                  <div className="insights-image-wrapper">
                    <img src={event.image} alt={event.title} />
                  </div>
                  <div className="insights-content">
                    <h4>{event.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Global Call To Action Module */}
      <GlobalCTA />
    </div>
  );
}

export default InsightsNews;
