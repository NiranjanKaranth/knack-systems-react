import React, { useState, useEffect } from "react";
import "../home.css";

function Home() {
  const baseSlides = [
    {
      id: 1,
      title: (
        <>
          North America’s Trusted <br /> SAP CX Partner
        </>
      ),
      subtitle: "Building smarter customer experiences and reliable delivery.",
      buttonText: "Learn More",
      buttonLink: "#",
      bgImage:
        "https://www.knacksystems.com/hubfs/ks-website-2025/North-Americas-Trusted-01.webp",
    },
    {
      id: 2,
      title: (
        <>Transforming Customer Experience for the World’s Leading Brands</>
      ),
      subtitle:
        "Real results across commerce, sales, service and partner portals.",
      buttonText: "View Our Work",
      buttonLink: "#",
      bgImage:
        "https://www.knacksystems.com/hubfs/ks-website-2025/customer-experience-banner.webp",
    },
    {
      id: 3,
      title: <>Industry-ready CX Solutions Enhanced by Practical AI</>,
      subtitle:
        "Effortless buying journeys, guided service and smarter sales results.",
      buttonText: "View Our Solutions",
      buttonLink: "#",
      bgImage:
        "https://www.knacksystems.com/hubfs/ks-website-2025/Industry-ready-CX-Solutions-03.webp",
    },
    {
      id: 4,
      title: <>AI-driven CX that delivers real outcomes—instantly</>,
      subtitle: "Upgrade to autonomous CX",
      buttonText: "Our Industries",
      buttonLink: "#",
      bgImage:
        "https://www.knacksystems.com/hubfs/ks-website-2025/autonomous-banner.webp",
    },
    {
      id: 5,
      mobileLogo:
        "https://www.knacksystems.com/hubfs/ks-website-2025/unitedvars-knack-whitelogo.svg",
      title: <>Knack Systems and UNITED VARS Partnership</>,
      subtitle: "Expanding Global SAP Customer Experience Expertise",
      buttonText: "Read the Press Release!",
      buttonLink: "#",
      bgImage:
        "https://www.knacksystems.com/hubfs/ks-website-2025/Homepagebanner-UNITEDVARSplusKnackPR-v02.webp",
    },
    {
      id: 6,
      title: (
        <>
          We’re SAP's Preferred Partner for SAP Commerce Cloud, cloud ERP
          edition
        </>
      ),
      subtitle: "Commerce Built for SAP Cloud ERP Customers.",
      buttonText: "Learn More",
      buttonLink: "#",
      bgImage:
        "https://www.knacksystems.com/hubfs/ks-website-2025/Home-page-banner-SAP-CC-Cloud-ERP.webp",
    },
    {
      id: 7,
      title: <>Accelerate your SAP CX Transformation with AI</>,
      subtitle:
        "Faster time-to-market with proven SAP CX expertise, industry solutions and AI.",
      buttonText: "Explore AI for SAP CX",
      buttonLink: "#",
      bgImage:
        "https://www.knacksystems.com/hubfs/ks-website-2025/AI-for-SAP-CX-with-Knack-Systems.webp",
    },
  ];

  const slides = [
    baseSlides[baseSlides.length - 1],
    ...baseSlides,
    baseSlides[0],
  ];

  const [currentSlide, setCurrentSlide] = useState(1);
  const [isHeroTransitioning, setIsHeroTransitioning] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      handleNextSlide();
    }, 6000);
    return () => clearInterval(slideInterval);
  }, [currentSlide, isAnimating]);

  const handleNextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => prev + 1);
  };

  const handlePrevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => prev - 1);
  };

  const handleHeroTransitionEnd = () => {
    setIsAnimating(false);
    if (currentSlide === slides.length - 1) {
      setIsHeroTransitioning(false);
      setCurrentSlide(1);
    } else if (currentSlide === 0) {
      setIsHeroTransitioning(false);
      setCurrentSlide(slides.length - 2);
    }
  };

  useEffect(() => {
    if (!isHeroTransitioning) {
      const timer = setTimeout(() => {
        setIsHeroTransitioning(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isHeroTransitioning]);

  const logoSlides = [
    [
      {
        id: 1,
        name: "Electrolux",
        url: "https://www.knacksystems.com/hubfs/ks-website-2025/electrolux.svg",
      },
      {
        id: 2,
        name: "Xymogen",
        url: "https://www.knacksystems.com/hubfs/ks-website-2025/xymogen.svg",
      },
      {
        id: 3,
        name: "Plastipak",
        url: "https://www.knacksystems.com/hubfs/ks-website-2025/plastipak.svg",
      },
      {
        id: 4,
        name: "Avantor",
        url: "https://www.knacksystems.com/hubfs/ks-website-2025/avantor.svg",
      },
      {
        id: 5,
        name: "Caleres",
        url: "https://www.knacksystems.com/hubfs/ks-website-2025/caleres.svg",
      },
      {
        id: 6,
        name: "LB Foster",
        url: "https://www.knacksystems.com/hubfs/ks-website-2025/LBFoster.svg",
      },
    ],
    [
      {
        id: 7,
        name: "National Amusement",
        url: "https://www.knacksystems.com/hubfs/ks-website-2025/sloan-new.svg",
      },
      {
        id: 8,
        name: "Pentland",
        url: "https://www.knacksystems.com/hubfs/ks-website-2025/woodgrain.svg",
      },
      {
        id: 9,
        name: "ASICS",
        url: "https://www.knacksystems.com/hubfs/ks-website-2025/pentland-new.svg",
      },
      {
        id: 10,
        name: "Desigual",
        url: "https://www.knacksystems.com/hubfs/ks-website-2025/acushnet.svg",
      },
      {
        id: 11,
        name: "GCP",
        url: "https://www.knacksystems.com/hubfs/ks-website-2025/gcp.svg",
      },
      {
        id: 12,
        name: "FXI",
        url: "https://www.knacksystems.com/hubfs/ks-website-2025/oldcastle.svg",
      },
    ],
  ];

  const [activeLogoSlide, setActiveLogoSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveLogoSlide((prev) =>
        prev === logoSlides.length - 1 ? 0 : prev + 1,
      );
    }, 5000);
    return () => clearInterval(timer);
  }, [logoSlides.length]);

  const baseSuccessStories = [
    {
      id: 1,
      number: "01",
      title: "Digital Commerce Transformation",
      link: "#",
      image:
        "https://www.knacksystems.com/hubfs/ks-website-2025/07Case-study-consumer-products.webp",
    },
    {
      id: 2,
      number: "02",
      title: "Streamlined Service Operations",
      link: "#",
      image:
        "https://www.knacksystems.com/hubfs/ks-website-2025/01Case-study-Carlisle.webp",
    },
    {
      id: 3,
      number: "03",
      title: "AI-Driven Sales Automation",
      link: "#",
      image:
        "https://www.knacksystems.com/hubfs/ks-website-2025/02Case-study-Xymogen.webp",
    },
    {
      id: 4,
      number: "04",
      title: "Simplified Complex B2B Sales",
      link: "#",
      image:
        "https://www.knacksystems.com/hubfs/ks-website-2025/03Case-study-LBFoster.webp",
    },
    {
      id: 5,
      number: "05",
      title: "Omnichannel Customer Experience",
      link: "#",
      image:
        "https://www.knacksystems.com/hubfs/ks-website-2025/04Case-study-Plastipak.webp",
    },
    {
      id: 6,
      number: "06",
      title: "Enterprise Cloud Integration",
      link: "#",
      image:
        "https://www.knacksystems.com/hubfs/ks-website-2025/05Case-study-Acushnet.webp",
    },
  ];

  const stories = [
    ...baseSuccessStories,
    { ...baseSuccessStories[0], id: "clone-1" },
  ];

  const [storyIndex, setStoryIndex] = useState(0);
  const [isStoryTransitioning, setIsStoryTransitioning] = useState(true);

  const handleNextStory = () => {
    setStoryIndex((prev) => prev + 1);
  };

  const handlePrevStory = () => {
    setStoryIndex((prev) =>
      prev === 0 ? baseSuccessStories.length - 1 : prev - 1,
    );
  };

  const handleStoryTransitionEnd = () => {
    if (storyIndex === baseSuccessStories.length) {
      setIsStoryTransitioning(false);
      setStoryIndex(0);
    }
  };

  useEffect(() => {
    if (!isStoryTransitioning) {
      const timer = setTimeout(() => setIsStoryTransitioning(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isStoryTransitioning]);

  const activeDisplayIndex = storyIndex % baseSuccessStories.length;
  const formattedNumber = String(activeDisplayIndex + 1).padStart(2, "0");

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="home-hero-carousel">
        <div
          className="hero-slider-track"
          onTransitionEnd={handleHeroTransitionEnd}
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            transition: isHeroTransitioning
              ? "transform 0.6s ease-in-out"
              : "none",
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={`${slide.id}-${index}`}
              className="hero-slide"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            >
              <div className="container home-hero-content">
                {slide.mobileLogo && (
                  <img
                    src={slide.mobileLogo}
                    alt="logo"
                    className="slider-pr-image"
                  />
                )}
                <h1 className="home-hero-title">{slide.title}</h1>
                <p className="home-hero-subtitle">{slide.subtitle}</p>
                <button className="orange-button">{slide.buttonText}</button>
              </div>
            </div>
          ))}
        </div>

        <div className="carousel-controls-box">
          <button className="carousel-btn prev-btn" onClick={handlePrevSlide}>
            ‹
          </button>
          <button className="carousel-btn next-btn" onClick={handleNextSlide}>
            ›
          </button>
        </div>
      </section>

      {/* Trusted Brands Section */}
      <section className="trusted-brands-section">
        <div className="container trusted-container">
          <div className="trusted-left">
            <h2 className="trusted-heading">
              Trusted by Leading Global Brands
            </h2>
            <p className="trusted-description">
              Results delivered across sales, service, commerce and partner
              ecosystems
            </p>
            <a href="#works" className="view-work-btn">
              <span>View Our Work</span>
              <div className="arrow-box">›</div>
            </a>
          </div>

          <div className="trusted-divider"></div>

          <div className="trusted-right">
            <div className="logo-carousel-viewport">
              <div
                className="logo-carousel-track"
                style={{ transform: `translateX(-${activeLogoSlide * 100}%)` }}
              >
                {logoSlides.map((page, pageIndex) => (
                  <div className="logo-grid-page" key={pageIndex}>
                    {page.map((logo) => (
                      <div className="brand-card" key={logo.id}>
                        <img src={logo.url} alt={logo.name} />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="brand-dots-container">
              {logoSlides.map((_, index) => (
                <span
                  key={index}
                  className={`square-dot ${index === activeLogoSlide ? "active" : ""}`}
                  onClick={() => setActiveLogoSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Success Stories Section */}
      <section className="stories-section">
        <div className="container stories-header-container">
          <h2 className="stories-main-title">Our Customer Success Stories</h2>
          <p className="stories-main-description">
            We help companies simplify commerce, improve sales workflows,
            strengthen service and activate AI where it makes work faster and
            easier. Solutions include digital commerce, B2B self-service, sales,
            CPQ, service, marketing and customer data.
          </p>
        </div>

        <div className="stories-carousel-wrapper">
          <div className="story-bg-number">{formattedNumber}</div>

          <div className="stories-carousel-viewport">
            <div
              className="stories-carousel-track"
              onTransitionEnd={handleStoryTransitionEnd}
              style={{
                /* Mobile shifts cleanly by exact 100vw increments (100vw card + gap math), 
       leaving desktop untouched */
                transform:
                  window.innerWidth <= 767
                    ? `translateX(calc(-${storyIndex * 100}vw + 20px))`
                    : `translateX(calc(-${storyIndex} * (60vw + 20px)))`,
                transition: isStoryTransitioning
                  ? "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)"
                  : "none",
              }}
            >
              {stories.map((story, index) => {
                const isActive = index === storyIndex;

                return (
                  <div
                    key={`${story.id}-${index}`}
                    className={`story-card ${isActive ? "is-active" : ""}`}
                  >
                    <div className="story-card-inner">
                      <div className="story-text-col">
                        <h3 className="story-title">{story.title}</h3>
                        <a
                          href={story.link}
                          className="orange-button story-btn"
                        >
                          Read more
                        </a>
                      </div>

                      <div className="story-image-col">
                        <div className="ms-slide__image-container">
                          <img
                            src={story.image}
                            alt={story.title}
                            className="ms-slide__image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="stories-controls">
            <button className="story-arrow-btn" onClick={handlePrevStory}>
              ‹
            </button>
            <button className="story-arrow-btn" onClick={handleNextStory}>
              ›
            </button>
          </div>
        </div>
      </section>

      {/* Testimonial Section: Our Customers Have Spoken */}
      <section className="testimonial-section">
        <div className="container">
          {/* Section Heading */}
          <h2 className="testimonial-title">Our Customers Have Spoken</h2>

          <div className="testimonial-grid">
            {/* Left Column: Quote & Author Details */}
            <div className="testimonial-content">
              <blockquote className="testimonial-quote">
                <p>
                  <img
                    src="https://www.knacksystems.com/hubfs/ks-website-2025/teststimonial%20quote%20mark-1.svg"
                    alt="quote1"
                    loading="lazy"
                    className="quote-img1"
                  />
                  I wanted to take a moment and acknowledge a fantastic SAP CRM
                  Implementation Partner. We’ve worked closely with Knack
                  Systems for a deployment of a highly complex and sophisticated
                  division in a migration from Salesforce to SAP C4C.
                </p>
                <p>
                  We’re still in the thick of it as we end our realize phase,
                  but I am constantly impressed by the attention to detail,
                  business analysis prowess, technical skill, and flexibility of
                  this parter. If you are looking at SAP CRM and the CX suite of
                  applications for your business, I strongly suggest checking in
                  with the good folks at Knack Systems.
                  <img
                    src="https://www.knacksystems.com/hubfs/ks-website-2025/teststimonial%20quote%20mark-2.svg"
                    alt="quote2"
                    loading="lazy"
                    className="quote-img2"
                  />
                </p>
              </blockquote>

              {/* Author / Client Info Footer */}
              <div className="testimonial-author-box">
                <div className="testimonial-company-logo">
                  <img
                    src="https://www.knacksystems.com/hubfs/ks-website-2025/Woodgrain.svg"
                    alt="Woodgrain"
                  />
                </div>
                <div className="author-divider"></div>
                <div className="author-info">
                  <p>Mark Miller</p>
                  <p>Sales & Distribution IT Function</p>
                  <p>Woodgrain</p>
                </div>
              </div>
            </div>

            {/* Right Column: Video Player */}
            <div className="testimonial-video-col">
              <div className="video-wrapper">
                <video
                  controls
                  poster="https://www.knacksystems.com/hubfs/ks-website-2025/woodgrain-video-thumbnil1.webp"
                >
                  <source
                    src="https://www.knacksystems.com/hubfs/videos/Woodgrain-Testimonial.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
