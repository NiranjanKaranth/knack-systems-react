import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { globalData } from "../../data/globalData";
import GlobalCTA from "../../components/global/GlobalCTA";
import "../../insights.css";

function Podcasts() {
  const pageData = globalData.podcasts;

  const [activeTab, setActiveTab] = useState("ALL");

  // Filter episodes based on selected tab category
  const filteredEpisodes =
    activeTab === "ALL"
      ? pageData.podcastCovers?.episodes
      : pageData.podcastCovers?.episodes?.filter(
          (ep) => ep.category === activeTab,
        );

  return (
    <div className="podcast-page-wrapper">
      {/* Section1: Podcast Hero Banner */}
      <section className="podcast-banner-section">
        <div className="container podcast-banner-container">
          {/* Left Content Column */}
          <div className="podcast-banner-content">
            <div className="podcast-logo-wrapper">
              <img src={pageData.banner?.logo} alt="CX Now & Next Logo" />
            </div>

            <h1 className="podcast-banner-title">{pageData.banner?.heading}</h1>
            <p className="podcast-listen-text">{pageData.banner?.listenText}</p>
            <div className="podcast-platforms-wrapper">
              <div className="podcast-platforms-list">
                {pageData.banner?.platforms?.map((platform, index) => (
                  <a
                    href={platform.link}
                    key={index}
                    className="podcast-platform-badge"
                    aria-label={platform.name}
                  >
                    <img src={platform.icon} alt={platform.name} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section2: Our Podcast Covers Filter Menu & Episode Cards */}
      <section className="podcast-covers-section">
        <div className="container">
          <h2 className="podcast-covers-title">
            {pageData.podcastCovers?.title}
          </h2>

          {/* Filter Tab Menu */}
          <div className="podcast-tabs-wrapper">
            {pageData.podcastCovers?.categories?.map((cat, index) => (
              <button
                key={index}
                className={`podcast-tab-btn ${activeTab === cat ? "active" : ""}`}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Episode Showcase List */}
          <div className="podcast-episodes-list">
            {filteredEpisodes && filteredEpisodes.length > 0 ? (
              filteredEpisodes.map((episode) => (
                <div className="podcast-episode-card" key={episode.id}>
                  {/* Left Column: Dark Visual Card */}
                  <div
                    className="podcast-episode-left"
                    style={
                      episode.bgImage
                        ? {
                            backgroundImage: `url(${episode.bgImage})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                          }
                        : {
                            backgroundColor: episode.bgColor || "#222222",
                          }
                    }
                  >
                    <span className="podcast-episode-tag">
                      {episode.episodeNumber}
                    </span>
                    <h5 className="podcast-episode-banner-title">
                      {episode.bannerTitle}
                    </h5>

                    {/* Speakers Section */}
                    <div className="podcast-speakers-block">
                      <p className="podcast-featuring-label">Featuring</p>
                      <div className="podcast-speakers-grid">
                        {episode.speakers?.map((speaker, sIdx) => (
                          <div className="podcast-speaker-item" key={sIdx}>
                            <img
                              src={speaker.image}
                              alt={speaker.name}
                              className="podcast-speaker-img"
                            />
                            <p className="podcast-speaker-name">
                              {speaker.name}
                            </p>
                            <p className="podcast-speaker-role">
                              {speaker.role}
                            </p>
                            <p className="podcast-speaker-company">
                              {speaker.company}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Detailed Episode Info & CTA */}
                  <div className="podcast-episode-right">
                    <h4 className="podcast-episode-main-title">
                      {episode.mainTitle}
                    </h4>
                    <p className="podcast-episode-desc">
                      {episode.description}
                    </p>
                    <p className="podcast-episode-subdesc">
                      {episode.subDescription}
                    </p>
                    <Link
                      to={episode.buttonLink}
                      className="orange-button podcast-watch-btn"
                    >
                      {episode.buttonText}
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="podcast-no-results">
                No episodes found for "{activeTab}".
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. Global Call To Action Module */}
      <GlobalCTA />

      {/* Section4: Latest CX Resources & Insights */}
      <section className="cx-resources-section">
        <div className="container">
          <h2 className="cx-resources-section-title">{pageData?.title}</h2>

          <div className="cx-resources-grid">
            {pageData?.resources?.map((item, index) => (
              <div className="cx-resource-card" key={index}>
                <div className="cx-resource-image-wrapper">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="cx-resource-content">
                  <p className="cx-resource-title">{item.title}</p>
                  <Link
                    to={item.buttonLink}
                    className="orange-button cx-resource-btn"
                  >
                    {item.buttonText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Podcasts;
