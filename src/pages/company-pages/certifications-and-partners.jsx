import { useState } from "react";
import { Link } from "react-router-dom";
import GlobalMatrix from "../../components/global/GlobalMatrix";
import GlobalCTA from "../../components/global/GlobalCTA";
import { globalData, sharedStats } from "../../data/globalData";
import "../../company.css";

function CertificationsPartner() {
  const data = globalData?.partnersSection || {};

  return (
    <div className="certifications-landing-page">
      <section className="partners-section">
        <div className="container">
          <h2 className="partners-title">{data.title}</h2>
          <p className="partners-intro">{data.introText}</p>

          <div className="partners-grid">
            {data.partners?.map((partner) => (
              <div className="partner-card" key={partner.id}>
                <div className="partner-logo-wrapper">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    title={partner.name}
                    className="partner-logo-img"
                  />
                </div>
                <h4 className="partner-name">{partner.name}</h4>
                <p
                  className="partner-description"
                  dangerouslySetInnerHTML={{ __html: partner.description }}
                ></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="certifications-section">
        <div className="container">
          <h2 className="certifications-main-title">{data.title}</h2>

          {/* 3-Column Grid Section */}
          <div className="certifications-grid">
            {data.gridCertifications?.map((cert) => (
              <div className="certification-card" key={cert.id}>
                <div className="certification-logo-wrapper">
                  <img
                    src={cert.logo}
                    alt={cert.title}
                    title={cert.title}
                    className="certification-logo-img"
                  />
                </div>
                <h4 className="certification-card-title">{cert.title}</h4>
                <p
                  className="certification-card-desc"
                  dangerouslySetInnerHTML={{ __html: cert.description }}
                ></p>
              </div>
            ))}
          </div>

          {/* Full-Width Featured Row (Minority Owned Businesses) */}
          {data.featuredCertification && (
            <div className="certification-featured-card">
              <div className="certification-featured-logo-wrapper">
                <img
                  src={data.featuredCertification.logo}
                  alt={data.featuredCertification.title}
                  title={data.featuredCertification.title}
                  className="certification-logo-img"
                />
              </div>
              <div className="certification-featured-content">
                <h5 className="certification-featured-title">
                  {data.featuredCertification.title}
                </h5>
                <p
                  className="certification-featured-desc"
                  dangerouslySetInnerHTML={{
                    __html: data.featuredCertification.description,
                  }}
                ></p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 3. Global Stats Matrix Module */}
      <GlobalMatrix stats={sharedStats} />

      {/* 4. Global Call To Action Module */}
      <GlobalCTA />
    </div>
  );
}

export default CertificationsPartner;
