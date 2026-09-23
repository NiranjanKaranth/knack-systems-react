import React from "react";
import { Link } from "react-router-dom";

// Standard Font Awesome Icons (from react-icons/fa)
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
  FaSpotify,
  FaPodcast,
  FaChevronUp,
  FaRss
} from "react-icons/fa";

import "./footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Top Grid: Links Navigation */}
        <div className="footer-grid">
          {/* Column 1: Industries */}
          <div className="footer-col">
            <h4 className="footer-heading">Industries</h4>
            <ul className="footer-links">
              <li><a href="#apparel">Apparel & Fashion</a></li>
              <li><a href="#footwear">Footwear & Accessories</a></li>
              <li><a href="#sports">Sports & Outdoor</a></li>
              <li><a href="#durables">Consumer Durables</a></li>
              <li><a href="#wholesale">Wholesale & Distribution</a></li>
              <li><a href="#manufacturing">Manufacturing</a></li>
              <li><a href="#imc">IM&C</a></li>
              <li><a href="#chemicals">Chemicals</a></li>
              <li><a href="#building">Building Materials</a></li>
              <li><a href="#lifesciences">Life Sciences</a></li>
            </ul>
          </div>

          {/* Column 2: Line of Business */}
          <div className="footer-col">
            <h4 className="footer-heading">Line of Business</h4>
            <ul className="footer-links">
              <li><a href="#ecommerce">E-Commerce</a></li>
              <li><a href="#b2b">B2B Commerce</a></li>
              <li><a href="#b2c">B2C Commerce</a></li>
              <li><a href="#cpq">Configure, Price and Quote (CPQ)</a></li>
              <li><a href="#marketing">Marketing</a></li>
              <li><a href="#sales">Sales</a></li>
              <li><a href="#service">Service</a></li>
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div className="footer-col">
            <h4 className="footer-heading">Solutions</h4>
            <ul className="footer-links">
              <li><a href="#ai-sap">AI for SAP CX</a></li>
              <li><a href="#sap-b2b">SAP B2B Self-Service Portal Accelerator</a></li>
              <li><a href="#knack-brava">Knack Brava B2B Omnichannel Solution</a></li>
              <li><a href="#b2b2c">B2B2C Network Commerce Solution</a></li>
              <li><a href="#b2b-fashion">B2B Fashion Wholesale Solution</a></li>
            </ul>
          </div>

          {/* Column 4: Services */}
          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><a href="#strategy">Strategy & Planning</a></li>
              <li><a href="#implementation">Implementation</a></li>
              <li><a href="#design">Solution Design</a></li>
              <li><a href="#rollout">Rollout & Adoption</a></li>
              <li><a href="#ams">Application Managed Services</a></li>
              <li><a href="#commerce-ams">Commerce AMS Services</a></li>
            </ul>
          </div>

          {/* Column 5: Insight and News */}
          <div className="footer-col">
            <h4 className="footer-heading">Insight and News</h4>
            <ul className="footer-links">
              <li><a href="#blogs">Blogs</a></li>
              <li><a href="#podcasts">Podcasts</a></li>
              <li><a href="#webinars">Webinars</a></li>
              <li><a href="#news">News & Events</a></li>
            </ul>
          </div>

          {/* Column 6: Company */}
          <div className="footer-col">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><a href="#leadership">Leadership Team</a></li>
              <li><a href="#certifications">Certifications & Partners</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#contact">Contact us</a></li>
            </ul>
          </div>
        </div>

        {/* Middle Section: Socials, Podcasts, and Scroll-to-Top */}
        <div className="footer-middle">
          <div className="social-podcasts-group">
            <div className="social-block">
              <h5 className="sub-heading">Follow Us</h5>
              <div className="icon-row">
                <a href="#facebook" aria-label="Facebook" className="social-icon">
                  <FaFacebookF />
                </a>
                <a href="#linkedin" aria-label="LinkedIn" className="social-icon">
                  <FaLinkedinIn />
                </a>
                <a href="#twitter" aria-label="X/Twitter" className="social-icon">
                  <FaTwitter />
                </a>
                <a href="#instagram" aria-label="Instagram" className="social-icon">
                  <FaInstagram />
                </a>
                <a href="#pinterest" aria-label="Pinterest" className="social-icon">
                  <FaPinterestP />
                </a>
                <a href="#youtube" aria-label="YouTube" className="social-icon">
                  <FaYoutube />
                </a>
              </div>
            </div>

            <div className="social-block">
              <h5 className="sub-heading">Listen to the podcast</h5>
              <div className="icon-row">
                <a href="#spotify" aria-label="Spotify" className="social-icon">
                  <FaSpotify />
                </a>
                <a href="#apple" aria-label="Apple Podcasts" className="social-icon">
                  <FaPodcast />
                </a>
                <a href="#rss" aria-label="Podcast Feed" className="social-icon">
                  <FaRss />
                </a>
              </div>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="scroll-top-btn"
            aria-label="Scroll to top"
          >
            <FaChevronUp />
          </button>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Legal */}
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p className="copyright-text">
            © 2026 Knack Systems. All Rights Reserved.
          </p>
          <ul className="legal-links">
            <li><a href="#privacy">Privacy Policy</a></li>
            <span className="divider">|</span>
            <li><a href="#terms">Terms and Conditions</a></li>
            <span className="divider">|</span>
            <li><a href="#accessibility">Accessibility Policy</a></li>
            <span className="divider">|</span>
            <li><a href="#cookie">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;