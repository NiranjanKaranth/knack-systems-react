import React from "react";

function IndustryOverview({ data }) {
  if (!data) return null;

  // Helper function to escape special characters (like parentheses) for regular expressions
  const escapeRegExp = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };

  // Helper function to render text with stylized links and custom URLs
  const renderParagraph = (text, additionalExcludes = []) => {
    if (!text) return null;

    // 1. Change linkTerms to an object mapping each term to its specific URL
    const linkMap = {
      "SAP Customer Experience": "/solutions/sap-customer-experience",
      "Sales": "/solutions/sales",
      "CPQ": "/solutions/cpq",
      "Configure Price Quote (CPQ)": "/solutions/cpq",
      "Services": "/services",
      "Service": "/services/service",
      "Commerce": "/solutions/commerce",
      "E-Commerce": "/solutions/e-commerce",
      "SAP solutions": "/sap-solutions",
      "SAP Sales Cloud": "/solutions/sales-cloud",
      "SAP Service Cloud": "/solutions/service-cloud",
      "SAP Commerce Cloud": "/solutions/commerce-cloud",
      "Customer Experience solutions": "/solutions/cx",
      "customer service": "/services/customer-service",
      "field service": "/services/field-service",
      "sales automation": "/solutions/sales-automation",
      "Configure": "/solutions/configure",
      "Price": "/solutions/price",
      "Quote (CPQ)": "/solutions/cpq"
    };

    // Extract all terms from the keys of linkMap
    const linkTerms = Object.keys(linkMap);

    // Filter out any terms passed into the excludeTerms array for this specific call
    const activeTerms = linkTerms.filter(
      (term) => !additionalExcludes.includes(term)
    );

    const escapedTerms = activeTerms.map(escapeRegExp);
    if (escapedTerms.length === 0) return text;

    const regex = new RegExp(`(${escapedTerms.join("|")})`, "g");
    const parts = text.split(regex);

    return parts.map((part, index) => {
      if (activeTerms.includes(part)) {
        // 2. Dynamically pull the unique URL for this specific term from the map
        const targetUrl = linkMap[part] || "#sap";

        return (
          <a key={index} href={targetUrl} className="sub-link-text">
            {part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <section className="industry-overview-section">
      <div className="container">
        <div className="overview-header">
          <h2>Overview</h2>
          {Array.isArray(data.paragraphs) &&
            data.paragraphs.map((pText, idx) => (
              <p key={idx}>{renderParagraph(pText)}</p>
            ))}
        </div>

        <div className="overview-help-grid">
          <div className="overview-help-content">
            <h4>{data.helpTitle}</h4>
            
            <p>{renderParagraph(data.helpText1, data.excludeHelpText1 || [])}</p>

            {Array.isArray(data.helpList) && data.helpList.length > 0 && (
              <ul className="overview-help-list">
                {data.helpList.map((item, index) => (
                  <li key={index}>{renderParagraph(item, ["Commerce"])}</li>
                ))}
              </ul>
            )}

            {data.helpText2 && <p>{renderParagraph(data.helpText2)}</p>}
            {data.helpText3 && <p>{renderParagraph(data.helpText3)}</p>}
          </div>
          <div className="overview-help-image">
            <img src={data.image} alt="Industry Overview" />
          </div>
        </div>

        <div className="overview-pills">
          <a href="#" className="pill-btn">
            LINE OF BUSINESS
          </a>
          <a href="#" className="pill-btn">
            OUR SERVICES
          </a>
          <a href="#" className="pill-btn">
            OUR WORK
          </a>
        </div>
      </div>
    </section>
  );
}

export default IndustryOverview;