import { useState } from "react";
import { Link } from "react-router-dom";
import GlobalHero from "../../components/global/GlobalHero";
import GlobalCTA from "../../components/global/GlobalCTA";
import { globalData } from "../../data/globalData";
import "../../services.css";
import "../../data/common.css";

function Implementation() {
  const pageData = globalData.implementation;

  return (
    <div className="implementation-landing-page">
      {/* 1. Global Hero Banner Module */}
      <GlobalHero
        title={pageData.hero?.title}
        description={pageData.hero?.subtitle}
        bgImageUrl={pageData.hero?.bgImage}
      />

      {/* 2. Overview Section */}
      <section className="overview-section">
        <div className="container">
          <h2>{pageData.overview.title}</h2>
          <div className="overview-grid">
            <div className="overview-text">
              <p>{pageData.overview.description1}</p>
              <p>{pageData.overview.description2}</p>
            </div>
            <div className="overview-img-wrapper">
              <img
                src={pageData.overview.image}
                alt="CPQ Overview"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. How Can We Help Section */}
      <section className="services-help-section">
        <div className="container">
          <h3>{pageData.howCanWeHelp?.title}</h3>
          <div className="help-text-content">
            {pageData.howCanWeHelp?.paragraphs?.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Services Offerings Grid Section */}
      <section className="services-offerings-section">
        <div className="container">
          <h3 className="section-title">{pageData.offeringsTitle}</h3>
          <div className="offerings-grid row-grid">
            {pageData.offerings?.map((item, index) => (
              <div className="offering-card" key={index}>
                <h4>{item.title}</h4>
                <div className="card-divider"></div>
                <p className="offering-inline-description">
                  {item.descriptionParts
                    ? item.descriptionParts.map((part, pIndex) =>
                        typeof part === "string" ? (
                          part
                        ) : (
                          <Link
                            to={part.path}
                            className="inline-tag-link"
                            key={pIndex}
                          >
                            {part.label}
                          </Link>
                        ),
                      )
                    : item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Global Call To Action Module */}
      <GlobalCTA />
    </div>
  );
}

export default Implementation;
