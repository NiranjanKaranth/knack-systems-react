import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (menuName) => {
    if (window.innerWidth > 992) {
      setActiveMenu(menuName);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 992) {
      setActiveMenu(null);
    }
  };

  const toggleMobileSubmenu = (menuName) => {
    if (window.innerWidth <= 992) {
      setActiveMenu((prev) => (prev === menuName ? null : menuName));
    }
  };

  const closeMobile = () => {
    setMobileMenuOpen(false);
    setActiveMenu(null);
  };

  const handleHamburgerToggle = () => {
    setMobileMenuOpen((prev) => !prev);
    setActiveMenu(null);
  };

  return (
    <header 
      ref={headerRef} 
      className={`site-header ${isScrolled ? "sticky-header" : ""}`}
    >
      <div className="container header-container">
        {/* Logo Section */}
        <div className="logo-wrapper">
          <Link to="/" onClick={closeMobile}>
            <img
              src="https://www.knacksystems.com/hubfs/ks/KNACK%20Systems-Logo%20RGB.svg"
              alt="Knack Systems Logo"
              className="site-logo"
            />
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button
          className={`hamburger-btn ${mobileMenuOpen ? "active" : ""}`}
          onClick={handleHamburgerToggle}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>

        {/* Main Navigation */}
        <nav className={`main-nav ${mobileMenuOpen ? "mobile-open" : ""}`}>
          <ul className="nav-list">
            
            {/* Industries Dropdown */}
            <li
              className={`nav-item ${activeMenu === "industries" ? "open" : ""}`}
              onMouseEnter={() => handleMouseEnter("industries")}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="nav-link"
                onClick={() => toggleMobileSubmenu("industries")}
              >
                <span><Link to="/industries" onClick={closeMobile}>Industries</Link></span>
                <span className="arrow-icon">▶</span>
              </div>

              {activeMenu === "industries" && (
                <div className="dropdown-menu two-column-dropdown">
                  <div className="dropdown-column left-column">
                    <span className="column-title">CONSUMER BRANDS</span>
                    <ul className="dropdown-item-list">
                      <li><Link to="/industries/apparel-and-fashion" onClick={closeMobile}>Apparel & Fashion</Link></li>
                      <li><Link to="/industries/footwear-and-accessories" onClick={closeMobile}>Footwear & Accessories</Link></li>
                      <li><Link to="/industries/sports" onClick={closeMobile}>Sports & Outdoor</Link></li>
                      <li><Link to="/industries/consumer-durables" onClick={closeMobile}>Consumer Durables</Link></li>
                    </ul>
                  </div>
                  <div className="dropdown-column right-column">
                    <ul className="dropdown-item-list">
                      <li><Link to="/industries/wholesale" onClick={closeMobile}>Wholesale and Distribution</Link></li>
                      <li><Link to="/industries/manufacturing" onClick={closeMobile}>Manufacturing</Link></li>
                      <li><Link to="/industries/imc" onClick={closeMobile}>IM&C</Link></li>
                      <li><Link to="/industries/chemical" onClick={closeMobile}>Chemical</Link></li>
                      <li><Link to="/industries/hightech" onClick={closeMobile}>High Tech</Link></li>
                      <li><Link to="/industries/building-materials" onClick={closeMobile}>Building Materials</Link></li>
                      <li><Link to="/industries/life-sciences" onClick={closeMobile}>Life Sciences</Link></li>
                    </ul>
                  </div>
                </div>
              )}
            </li>

            {/* Line of Business Dropdown */}
            <li
              className={`nav-item ${activeMenu === "lob" ? "open" : ""}`}
              onMouseEnter={() => handleMouseEnter("lob")}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="nav-link"
                onClick={() => toggleMobileSubmenu("lob")}
              >
                <span><Link to="/line-of-business" onClick={closeMobile}>Line of Business</Link></span>
                <span className="arrow-icon">▶</span>
              </div>

              {activeMenu === "lob" && (
                <div className="dropdown-menu two-column-dropdown">
                  <div className="dropdown-column left-column">
                    <span className="column-title"><Link to="/line-of-business/e-commerce" onClick={closeMobile}>E-COMMERCE</Link></span>
                    <ul className="dropdown-item-list">
                      <li><Link to="/line-of-business/b2b-commerce" onClick={closeMobile}>B2B Commerce</Link></li>
                      <li><Link to="/line-of-business/b2c-commerce" onClick={closeMobile}>B2C Commerce</Link></li>
                    </ul>
                  </div>
                  <div className="dropdown-column right-column">
                    <ul className="dropdown-item-list">
                      <li><Link to="/line-of-business/cpq" onClick={closeMobile}>Configure, Price and Quote (CPQ)</Link></li>
                      <li><Link to="/line-of-business/Sales" onClick={closeMobile}>Sales</Link></li>
                      <li><Link to="/line-of-business/Service" onClick={closeMobile}>Service</Link></li>
                      <li><Link to="/line-of-business/Marketing" onClick={closeMobile}>Marketing</Link></li>
                    </ul>
                  </div>
                </div>
              )}
            </li>

            {/* Solutions Dropdown */}
            <li
              className={`nav-item ${activeMenu === "solutions" ? "open" : ""}`}
              onMouseEnter={() => handleMouseEnter("solutions")}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="nav-link"
                onClick={() => toggleMobileSubmenu("solutions")}
              >
                <span>Solutions</span>
                <span className="arrow-icon">▶</span>
              </div>

              {activeMenu === "solutions" && (
                <div className="dropdown-menu single-column-dropdown">
                  <ul className="dropdown-item-list">
                    <li><Link to="#" onClick={closeMobile}>Autonomous CX for SAP</Link></li>
                    <li><Link to="#" onClick={closeMobile}>SAP Commerce Cloud, cloud ERP Edition</Link></li>
                    <li><Link to="#" onClick={closeMobile}>Better B2B</Link></li>
                    <li><Link to="#" onClick={closeMobile}>AI for SAP CX</Link></li>
                    <li><Link to="#" onClick={closeMobile}>SAP B2B Self-Service Portal Accelerator</Link></li>
                    <li><Link to="#" onClick={closeMobile}>Knack Brava B2B Omnichannel Solution</Link></li>
                    <li><Link to="#" onClick={closeMobile}>B2B2C Network Commerce Solution</Link></li>
                    <li><Link to="#" onClick={closeMobile}>B2B Fashion Wholesale Solution</Link></li>
                  </ul>
                </div>
              )}
            </li>

            {/* Services Dropdown */}
            <li
              className={`nav-item ${activeMenu === "services" ? "open" : ""}`}
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="nav-link"
                onClick={() => toggleMobileSubmenu("services")}
              >
                <span>Services</span>
                <span className="arrow-icon">▶</span>
              </div>

              {activeMenu === "services" && (
                <div className="dropdown-menu single-column-dropdown">
                  <ul className="dropdown-item-list">
                    <li><Link to="#" onClick={closeMobile}>Strategy & Planning</Link></li>
                    <li><Link to="#" onClick={closeMobile}>Implementation</Link></li>
                    <li><Link to="#" onClick={closeMobile}>Solution Design</Link></li>
                    <li><Link to="#" onClick={closeMobile}>Rollout & Adoption</Link></li>
                    <li><Link to="#" onClick={closeMobile}>Application Managed Services & Operations</Link></li>
                    <li><Link to="#" onClick={closeMobile}>Commerce AMS Services</Link></li>
                  </ul>
                </div>
              )}
            </li>

            {/* Our Works (No Dropdown) */}
            <li className="nav-item">
              <Link to="/our-works" className="nav-link plain-link" onClick={closeMobile}>
                Our Works
              </Link>
            </li>

            {/* Insights & News Dropdown */}
            <li
              className={`nav-item ${activeMenu === "insights" ? "open" : ""}`}
              onMouseEnter={() => handleMouseEnter("insights")}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="nav-link"
                onClick={() => toggleMobileSubmenu("insights")}
              >
                <span>Insights & News</span>
                <span className="arrow-icon">▶</span>
              </div>

              {activeMenu === "insights" && (
                <div className="dropdown-menu single-column-dropdown insights-wrap">
                  <ul className="dropdown-item-list">
                    <li><Link to="#" onClick={closeMobile}>Blogs</Link></li>
                    <li><Link to="#" onClick={closeMobile}>Podcasts</Link></li>
                    <li><Link to="#" onClick={closeMobile}>Webinars</Link></li>
                    <li><Link to="#" onClick={closeMobile}>News & Events</Link></li>
                  </ul>
                </div>
              )}
            </li>

            {/* Company Dropdown */}
            <li
              className={`nav-item ${activeMenu === "company" ? "open" : ""}`}
              onMouseEnter={() => handleMouseEnter("company")}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="nav-link"
                onClick={() => toggleMobileSubmenu("company")}
              >
                <span>Company</span>
                <span className="arrow-icon">▶</span>
              </div>

              {activeMenu === "company" && (
                <div className="dropdown-menu single-column-dropdown last-dropdown">
                  <ul className="dropdown-item-list">
                    <li><Link to="#" onClick={closeMobile}>Leadership Team</Link></li>
                    <li><Link to="#" onClick={closeMobile}>Certifications & Partners</Link></li>
                    <li><Link to="#" onClick={closeMobile}>Careers</Link></li>
                    <li><Link to="#" onClick={closeMobile}>Contact Us</Link></li>
                  </ul>
                </div>
              )}
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;