import { useState } from "react";
import GlobalCTA from "../../components/global/GlobalCTA";
import { globalData } from "../../data/globalData";
import "../../company.css";

function ContactUs() {
  const pageData = globalData?.contactUs || {};
  const bgImageUrl = pageData.hero?.bgImage || "";
  const connectData = pageData.connectSection || {};
  const offices = connectData.offices || {};
  const formConfig = connectData.form || {};

  // Local state for the Connect with Us form
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    hearAbout: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Submitted:", formData);
    // Add your form submission API logic here
  };

  return (
    <div className="contact-us-landing-page">
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${bgImageUrl})` }}
      >
        <div className="container hero-container-flex">
          {/* Left space to preserve background visual */}
          <div className="hero-image-container"></div>

          {/* Right Content Card matching Industries layout */}
          <div className="hero-card">
            {pageData.inquiries?.map((item) => (
              <div key={item.id} className="inquiry-item">
                <p className="inquiry-title">{item.title}</p>
                <a href={`mailto:${item.email}`} className="inquiry-email">
                  {item.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Our Offices & Connect with Us Section */}
      <section className="connect-offices-section">
        <div className="container">
          {/* Top CTA Pills */}
          <div className="top-cta-buttons">
            {connectData.ctaButtons?.map((btn, index) => (
              <a key={index} href={btn.link} className="orange-button cta-pill-btn">
                {btn.text}
              </a>
            ))}
          </div>

          {/* Main 2-Column Section */}
          <div className="connect-offices-grid">
            {/* Left Column: Offices */}
            <div className="offices-column">
              <h2 className="section-heading">{offices.title}</h2>

              {/* Corporate HQ */}
              {offices.hq && (
                <div className="office-hq-card">
                  <h4 className="hq-title">{offices.hq.title}</h4>
                  <p className="office-address">{offices.hq.address}</p>
                </div>
              )}

              {/* Regional Branch Locations */}
              <div className="locations-grid">
                {offices.locations?.map((loc, idx) => (
                  <div key={idx} className="location-card">
                    <h4 className="location-title">{loc.city}</h4>
                    <p className="office-address">{loc.address}</p>
                    {loc.phone && (
                      <p className="office-phone">Phone: {loc.phone}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Connect Form */}
            <div className="form-column">
              <h3 className="section-heading">
                {formConfig.title}
              </h3>

              <form className="connect-form" onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="firstName">First name*</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Last name*</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Business email id*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone number*</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company name*</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="hearAbout">How did you hear about us?*</label>
                  <select
                    id="hearAbout"
                    name="hearAbout"
                    required
                    value={formData.hearAbout}
                    onChange={handleInputChange}
                  >
                    {formConfig.hearAboutOptions?.map((option, idx) => (
                      <option key={idx} value={idx === 0 ? "" : option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <button type="submit" className="orange-button form-btn">
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Global Call To Action Module */}
      <GlobalCTA />
    </div>
  );
}

export default ContactUs;
