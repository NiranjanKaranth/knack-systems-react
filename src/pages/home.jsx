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

  // Industry Transform Cards Data
  const industryCards = [
    {
      id: 1,
      title: "Consumer Products",
      description:
        "Stay ahead of shifting consumer demands with modern e-commerce, sales, CPQ, and marketing solutions. Knack Systems helps consumer brands deliver seamless shopping experiences and build loyalty with data-driven insights.",
      image: "https://www.knacksystems.com/hubfs/ks-website-2025/consumer.webp",
      hoverImage:
        "https://www.knacksystems.com/hubfs/ks-website-2025/consumer-product-black-03.webp",
      link: "#",
    },
    {
      id: 2,
      title: "Building Materials",
      description:
        "Simplify sales, pricing, and customer engagement with tailored SAP CX solutions. From e-commerce to marketing, Knack Systems powers building materials businesses with tools that drive efficiency and growth.",
      image: "https://www.knacksystems.com/hubfs/ks-website-2025/building.webp",
      hoverImage:
        "https://www.knacksystems.com/hubfs/ks-website-2025/building-material-black.webp",
      link: "#",
    },
    {
      id: 3,
      title: "Industrial Manufacturing",
      description:
        "Streamline complex sales and scale operations with SAP CX solutions. Knack Systems enables manufacturers to enhance e-commerce, personalize marketing, and improve customer satisfaction.",
      image:
        "https://www.knacksystems.com/hubfs/ks-website-2025/manufacturing.webp",
      hoverImage:
        "https://www.knacksystems.com/hubfs/ks-website-2025/manufacturing-black.webp",
      link: "#",
    },
    {
      id: 4,
      title: "Chemicals",
      description:
        "Optimize sales and deliver exceptional customer experiences with SAP CX tools. Knack Systems helps chemical businesses drive growth with advanced CPQ, marketing automation, and secure customer data.",
      image: "https://www.knacksystems.com/hubfs/ks-website-2025/chemical.webp",
      hoverImage:
        "https://www.knacksystems.com/hubfs/ks-website-2025/chemical-black.webp",
      link: "#",
    },
    {
      id: 5,
      title: "Wholesale & Distribution",
      description:
        "Boost efficiency and connect better with customers using Knack Systems’ e-commerce, sales, and CPQ solutions. We simplify your operations and help build loyalty with smarter marketing and data insights.",
      image:
        "https://www.knacksystems.com/hubfs/ks-website-2025/wholesale.webp",
      hoverImage:
        "https://www.knacksystems.com/hubfs/ks-website-2025/Wholesale-black.webp",
      link: "#",
    },
  ];

  // SAP-Focused Services State & Data
  const [activeServiceTab, setActiveServiceTab] = useState(0);

  const sapServices = [
    {
      id: 1,
      name: "Strategy & Planning",
      title:
        "A clear roadmap across sales, service and commerce with workflows that fit real business needs. We remove uncertainty by defining simple steps your teams can adopt immediately.",
      buttonText: "Read More",
      link: "#",
    },
    {
      id: 2,
      name: "SAP Implementation Services",
      title:
        "Structured builds using SAP Activate with predictable outcomes and strong engineering. Every implementation stays focused on value, not customization for its own sake.",
      buttonText: "Read More",
      link: "#",
    },
    {
      id: 3,
      name: "Application Managed Services",
      title:
        "Support that keeps your systems stable and your teams focused. Our AMS model gives you faster issue resolution and steady system performance.",
      buttonText: "Read More",
      link: "#",
    },
    {
      id: 4,
      name: "Commerce AMS Services",
      title:
        "Consistent performance, catalog updates and AI supported product discovery. We help you keep your storefront accurate, fast and ready for growth.",
      buttonText: "Read More",
      link: "#",
    },
    {
      id: 5,
      name: "Solution Design",
      title:
        "Simple, human centered design that guides buyers and supports teams. Every design choice is tested for clarity so users get to the right action faster.",
      buttonText: "Read More",
      link: "#",
    },
    {
      id: 6,
      name: "SAP Rollout & Upgrade Services",
      title:
        "Fast upgrades and scalable rollouts with minimal disruption. We keep your SAP CX landscape current so your teams benefit from the latest capabilities.",
      buttonText: "Read More",
      link: "#",
    },
  ];

  // Digital CX Accelerators State & Data
  const [activeAcceleratorTab, setActiveAcceleratorTab] = useState(0);

  const accelerators = [
    {
      id: 1,
      name: "SAP Commerce Cloud, cloud ERP edition",
      title: "Commerce Built for SAP Cloud ERP Customers",
      description:
        "Knack Systems helps empower SAP Cloud ERP customers across their B2B buyers and internal teams with full commerce lifecycle, confident self-service and AI-assisted guidance.",
      features: [
        "Real-time contract pricing",
        "Live order & shipment tracking",
        "Quote-to-order, contract-driven",
        "AI-assisted buying guidance",
      ],
      buttonText: "Learn More!",
      link: "#",
      image:
        "https://www.knacksystems.com/hubfs/ks-website-2025/SAP-Commerce-Cloud-Cloud-ERP.webp",
      layoutType: "standard",
    },
    {
      id: 2,
      name: "AI for SAP CX",
      title: "AI for SAP CX",
      paragraphs: [
        "Customers expect faster answers, clearer choices, and effortless digital experiences. Teams need AI that removes repetitive work and does not add more steps.",
        "Knack Systems delivers enterprise-ready AI across SAP CX using the SAP CX Toolkit, Joule, and SAP BTP. We apply AI directly within sales, service, commerce, and customer data processes to streamline workflows, improve accuracy, and help teams act with confidence.",
      ],
      buttonText: "Learn More!",
      link: "#",
      image:
        "https://www.knacksystems.com/hubfs/ks-website-2025/AI-for-SAP-CX1.webp",
      layoutType: "standard",
    },
    {
      id: 3,
      name: "SAP B2B Self-Service Portal Accelerator",
      title: "Your Fastest Path to B2B Self-Service Success.",
      description:
        "SAP B2B Self-Service Portal Accelerator is a new, fully flexible, cloud-based, enterprise-grade platform built on SAP Commerce Cloud that connects directly to your SAP ERP (S/4, ECC, or even non-SAP systems). It’s a one-stop shop for your channel partners, sales teams, and customers to",
      features: [
        "Check orders & history instantly",
        "Request quotes & create claims",
        "Initiate returns & pay invoices",
        "View contracts & pricing",
        "Submit and track support requests",
      ],
      buttonText: "Request A Demo!",
      link: "#",
      image:
        "https://www.knacksystems.com/hubfs/ks-website-2025/knack-brava.webp",
      layoutType: "standard",
    },
    {
      id: 4,
      name: "B2B Omnichannel Solution",
      logoUrl:
        "https://www.knacksystems.com/hubfs/ks-website-2025/Knack-Brava_Logo.svg",
      description:
        "Knack Brava is a robust B2B self-service solution for SAP ERP, SAP ECC, SAP Commerce Cloud and SAP S4 HANA. It is a comprehensive B2B solution with robust self-service capabilities, enabling seamless order management, real-time collaboration.",
      listCol1: [
        "Order Accuracy",
        "Customizable Platform",
        "Better Collaboration",
        "Committed Support",
        "Rich Product Information",
      ],
      listCol2: [
        "Data Security & Privacy",
        "Reduced Billing Errors",
        "Backend Systems Integration",
      ],
      buttonText: "Request A Demo!",
      link: "#",
      badgeImage:
        "https://www.knacksystems.com/hubfs/ks-website-2025/Available-on-SAP-Store-Black.png",
      mainImage:
        "https://www.knacksystems.com/hubfs/ks-website-2025/B2B-Omnichannel-Solution.webp",
      layoutType: "dual-list-col2",
    },
    {
      id: 5,
      name: "Network Commerce Solution",
      title: "SeasonOne B2B2C",
      subtitle: "Network Commerce Solution",
      description:
        "SeasonOne B2B2C simplifies and speeds up your digital channel growth. It brings your sales reps, channel partners, and customers together, giving you full control, visibility, and agility. With SeasonOne, your team and partners can create microsites, launch events and promotions, and deliver personalized experiences—all in minutes.",
      features: ["Scale", "Speed", "Accuracy"],
      buttonText: "Request A Demo!",
      link: "#",
      badgeImage:
        "https://www.knacksystems.com/hubfs/ks-website-2025/Available-on-SAP-Store-Black.png",
      mainImage:
        "https://www.knacksystems.com/hubfs/ks-website-2025/Network-Commerce-Solution.webp",
      layoutType: "list-badge-col2",
    },
    {
      id: 6,
      name: "B2B Fashion Wholesale Solution",
      title: "SeasonOne",
      subtitle: "B2B Fashion Wholesale Solution",
      description:
        "SeasonOne is one unified platform to enable your sales and service reps to operate efficiently and endow collaboration for the entire B2B network. It includes capabilities for new season launch, customer specific e-Catalog, digital showrooms, Pre-Book, Replenishment & Re-Order, Customer 360, rich product content and Live Order-Book.",
      featureHeading: "Unique Features",
      features: [
        "Pre-Season Ordering",
        "Current Season Ordering",
        "Value-added services for personalized products",
      ],
      buttonText: "Request A Demo!",
      link: "#",
      badgeImage:
        "https://www.knacksystems.com/hubfs/ks-website-2025/Available-on-SAP-Store-Black.png",
      mainImage:
        "https://www.knacksystems.com/hubfs/ks-website-2025/B2B-Fashion-Wholesale-Solution1.webp",
      layoutType: "list-badge-col2",
    },
  ];

  // Helper renderer for Accelerator Tab Content
  const renderAcceleratorContent = (item) => {
    if (item.layoutType === "dual-list-col2") {
      return (
        <div className="accelerator-layout-dual">
          <div className="accelerator-text-side">
            {item.logoUrl && (
              <img
                src={item.logoUrl}
                alt="Logo"
                className="accelerator-logo-img"
              />
            )}
            <p className="accelerator-content-desc">{item.description}</p>

            <div className="dual-lists-wrapper">
              <ul className="accelerator-features-list mobile-list">
                {item.listCol1.map((li, idx) => (
                  <li key={idx}>
                    <span className="feature-arrow">▶</span> {li}
                  </li>
                ))}
              </ul>
              <ul className="accelerator-features-list">
                {item.listCol2.map((li, idx) => (
                  <li key={idx}>
                    <span className="feature-arrow">▶</span> {li}
                  </li>
                ))}
              </ul>
            </div>

            {/* Button and Badge aligned side-by-side below the second column list */}
            <div className="action-button-badge-row">
              <a href={item.link} className="orange-button accelerator-btn">
                {item.buttonText}
              </a>
              {item.badgeImage && (
                <img
                  src={item.badgeImage}
                  alt="SAP Store Badge"
                  className="sap-store-badge"
                />
              )}
            </div>
          </div>
          <div className="accelerator-image-side">
            <div className="accelerator-image-wrapper">
              <img src={item.mainImage} alt="Accelerator Visual" />
            </div>
          </div>
        </div>
      );
    }

    if (item.layoutType === "list-badge-col2") {
      return (
        <div className="accelerator-layout-dual">
          <div className="accelerator-text-side">
            {item.title && (
              <h4 className="accelerator-content-title sub-heading1">
                {item.title}
              </h4>
            )}
            {item.subtitle && (
              <h4 className="accelerator-subtitle-tag">{item.subtitle}</h4>
            )}
            <p className="accelerator-content-desc">{item.description}</p>

            {item.featureHeading && (
              <h4 className="feature-heading-title">{item.featureHeading}</h4>
            )}

            <ul className="accelerator-features-list">
              {item.features.map((li, idx) => (
                <li key={idx}>
                  <span className="feature-arrow">▶</span> {li}
                </li>
              ))}
            </ul>

            {/* Button and Badge container to place them side by side */}
            <div className="action-button-badge-row">
              <a href={item.link} className="orange-button accelerator-btn">
                {item.buttonText}
              </a>
              {item.badgeImage && (
                <img
                  src={item.badgeImage}
                  alt="SAP Store Badge"
                  className="sap-store-badge"
                />
              )}
            </div>
          </div>
          <div className="accelerator-image-side">
            <div className="accelerator-image-wrapper">
              <img src={item.mainImage} alt="Accelerator Visual" />
            </div>
          </div>
        </div>
      );
    }

    // Standard Layout (Items 1, 2, 3)
    return (
      <div className="accelerator-layout-dual">
        <div className="accelerator-text-side">
          {item.title && (
            <h4 className="accelerator-content-title">{item.title}</h4>
          )}
          {item.paragraphs ? (
            item.paragraphs.map((p, idx) => (
              <p key={idx} className="accelerator-content-desc">
                {p}
              </p>
            ))
          ) : (
            <p className="accelerator-content-desc">{item.description}</p>
          )}

          {item.features && (
            <ul className="accelerator-features-list">
              {item.features.map((li, idx) => (
                <li key={idx}>
                  <span className="feature-arrow">▶</span> {li}
                </li>
              ))}
            </ul>
          )}

          <div className="action-button-badge-row">
            <a href={item.link} className="orange-button accelerator-btn">
              {item.buttonText}
            </a>
            {item.badgeImage && (
              <img
                src={item.badgeImage}
                alt="SAP Store Badge"
                className="sap-store-badge"
              />
            )}
          </div>
        </div>
        <div className="accelerator-image-side">
          <div className="accelerator-image-wrapper">
            <img src={item.image} alt="Accelerator Visual" />
          </div>
        </div>
      </div>
    );
  };

  // SAP CX Solutions Vertical Tab State & Data
  const [activeCxTab, setActiveCxTab] = useState(0);

  const cxSolutions = [
    {
      id: 1,
      name: "SAP Commerce Cloud",
      title: "SAP Commerce Cloud",
      paragraphs: [
        "As a niche SAP Commerce Cloud partner, we are committed to delivering exceptional e-commerce solutions tailored to your specific industry needs.",
        "We understand that one size does not fit all when it comes to e-commerce, and that's why we leverage the power of SAP Commerce Cloud for Industries to transform your online shopping experience and drive digital transformation and competitiveness in your sector.",
      ],
      buttonText: "Learn More!",
      link: "#",
      image:
        "https://www.knacksystems.com/hubfs/ks-website-2025/SAP-Commerce-Cloud-02.webp",
    },
    {
      id: 2,
      name: "SAP Sales Cloud",
      title: "SAP Sales Cloud",
      paragraphs: [
        "We help your business thrive by harnessing the full potential of SAP Sales Cloud to optimize processes, enhance customer interactions, and drive revenue growth for your organization.",
        "With our tailored solutions, we empower your team for sales excellence. Partnering with Knack Systems means choosing a dedicated team that is committed to your success.",
      ],
      buttonText: "Learn More!",
      link: "#",
      image:
        "https://www.knacksystems.com/hubfs/ks-website-2025/SAP-Sales-Cloud-02.webp",
    },
    {
      id: 3,
      name: "SAP CPQ",
      title: "SAP CPQ",
      paragraphs: [
        "We specialize in unlocking the full potential of SAP Configure, Price, Quote (CPQ) solution. Our experts will provide tailored solutions that enable precise quotes, shorten sales cycles, and boost profitability.",
        "When you choose Knack Systems as your SAP CPQ partner, you're choosing to gain a competitive edge in today's competitive market with 100% accurate quotes and consistent margin management.",
      ],
      buttonText: "Learn More!",
      link: "#",
      image:
        "https://www.knacksystems.com/hubfs/ks-website-2025/SAP-CPQ-02.webp",
    },
    {
      id: 4,
      name: "SAP Service Cloud",
      title: "SAP Service Cloud",
      paragraphs: [
        "At Knack Systems, we are dedicated to elevating your customer service processes and ensuring customer satisfaction is at the heart of your operations. We specialize in enhancing customer service, streamlining support operations, and nurturing lasting relationships with your valued customers.",
        "By choosing Knack Systems as your partner, you're making a strategic decision to excel and create remarkable customer experiences.",
      ],
      buttonText: "Learn More!",
      link: "#",
      image:
        "https://www.knacksystems.com/hubfs/ks-website-2025/SAP-Service-Cloud-02.webp",
    },
    {
      id: 5,
      name: "SAP Marketing Cloud",
      title: "SAP Marketing Cloud",
      paragraphs: [
        "Marketing is more than just broadcasting messages—it's about creating meaningful connections with your audience. SAP Marketing Cloud is a powerful tool that allows you to do just that.",
        "That's why we work closely with your organization to craft tailored solutions that align perfectly with your specific needs. Our approach ensures that you can make the most of SAP Marketing Cloud, regardless of your industry or size.",
      ],
      buttonText: "Learn More!",
      link: "#",
      image:
        "https://www.knacksystems.com/hubfs/ks-website-2025/SAP-Marketing-Cloud.webp",
    },
    {
      id: 6,
      name: "SAP Customer Data Cloud",
      title: "SAP Customer Data Cloud",
      paragraphs: [
        "SAP Customer Data Cloud is a powerful solution designed to help businesses efficiently manage and protect their customer data.",
        "By partnering with Knack Systems, businesses can optimize their SAP Customer Data Cloud implementation, ensuring a secure and efficient data management system that enables personalized customer experiences, improved marketing strategies, and long-term scalability.",
      ],
      buttonText: "Learn More!",
      link: "#",
      image:
        "https://www.knacksystems.com/hubfs/ks-website-2025/SAP-Customer-Data-Cloud.webp",
    },
  ];

  // Helper renderer for CX tab content
  const renderCxContent = (item) => (
    <div className="cx-content-panel">
      <div className="cx-text-column">
        <h3 className="cx-panel-title">{item.title}</h3>
        {item.paragraphs.map((p, idx) => (
          <p key={idx} className="cx-panel-desc">{p}</p>
        ))}
        <a href={item.link} className="orange-button cx-btn">{item.buttonText}</a>
      </div>

      <div className="cx-image-column">
        <div className="cx-image-wrapper">
          <img src={item.image} alt={item.title} />
        </div>
      </div>
    </div>
  );
  

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
          <h3 className="testimonial-title">Our Customers Have Spoken</h3>

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

      {/* Transforming Industries with AI-Enabled SAP CX Section */}
      <section className="transforming-industries-section">
        <div className="container">
          <div className="transforming-header-row">
            <div className="transforming-title-wrapper">
              <h3 className="transforming-main-title">
                Transforming Industries with AI-Enabled SAP CX
              </h3>
            </div>
            <div className="transforming-action-wrapper">
              <p className="transforming-subtitle">
                We bring industry ready workflows, clear processes and strong
                engineering to help teams work faster and make better decisions.
              </p>
              <a href="#experts" className="orange-button">
                Talk to our experts!
              </a>
            </div>
          </div>

          <div className="transforming-grid">
            {industryCards.map((card) => (
              <div key={card.id} className="transforming-card">
                <div className="transforming-card-media">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="default-img"
                  />
                  <img
                    src={card.hoverImage}
                    alt={`${card.title} hover`}
                    className="hover-img"
                  />
                </div>
                <div className="transforming-card-content">
                  <p className="transforming-card-title">{card.title}</p>
                  <p className="transforming-card-desc">{card.description}</p>
                  <a
                    href={card.link}
                    className="orange-button transforming-card-btn"
                  >
                    Learn More!
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our SAP-Focused Services Section */}
      <section className="sap-services-section">
        {/* Desktop Left Full-Bleed Content Box */}
        <div
          className="desktop-only-content"
          style={{
            backgroundImage: `url('https://www.knacksystems.com/hubfs/ks-website-2025/Redefining-Customer-Experience.jpg')`,
          }}
        >
          <div className="container">
            <h5 className="sap-content-title">
              {sapServices[activeServiceTab].title}
            </h5>
            <a
              href={sapServices[activeServiceTab].link}
              className="orange-button sap-content-btn"
            >
              {sapServices[activeServiceTab].buttonText}
            </a>
          </div>
        </div>

        <div className="container">
          <div className="sap-services-header">
            <h3 className="sap-services-main-title">
              Our SAP-Focused Services Tailored to Your Success
            </h3>
            <p className="sap-services-main-subtitle">
              Focused on customer success, Knack Systems delivers value-driven,
              industry-tailored digital CX transformations with robust service
              offerings.
            </p>
          </div>

          <div className="sap-services-grid-wrapper">
            <div className="desktop-spacer"></div>

            {/* Vertical Tabs & Mobile Accordion List */}
            <div className="sap-services-tabs-box">
              {sapServices.map((service, index) => {
                const isActive = activeServiceTab === index;
                return (
                  <div
                    key={service.id}
                    className={`sap-tab-item ${isActive ? "active" : ""}`}
                    onClick={() => setActiveServiceTab(index)}
                  >
                    <div className="sap-tab-header">
                      <span className="sap-tab-name">{service.name}</span>
                    </div>

                    {/* Mobile Accordion Content Drawer (Appears right under the clicked tab item on mobile) */}
                    <div
                      className="mobile-accordion-content"
                      style={{
                        backgroundImage: `url('https://www.knacksystems.com/hubfs/ks-website-2025/Redefining-Customer-Experience.jpg')`,
                      }}
                    >
                      <h5 className="sap-content-title">{service.title}</h5>
                      <a
                        href={service.link}
                        className="orange-button sap-content-btn"
                      >
                        {service.buttonText}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Digital Customer Experience Accelerators Section */}
      <section className="accelerators-section">
        <div className="container">
          {/* Header Top Row */}
          <div className="accelerators-header-row">
            <div className="accelerators-title-col">
              <h3 className="accelerators-main-title">
                Digital Customer Experience Accelerators for B2B and B2B2C
              </h3>
            </div>
            <div className="accelerators-desc-col">
              <h4 className="accelerators-subheading">
                Our Industry Solutions
              </h4>
              <p className="accelerators-header-desc">
                SAP B2B Self-Service Portal Accelerator, B2B Omnichannel, B2B2C
                Network Commerce and B2B Fashion Wholesale solutions are truly
                innovative solutions that shine in addressing sales, service and
                ordering challenges across Knack-focused industries.
              </p>
            </div>
          </div>

          {/* Horizontal Card Tabs / Mobile Accordion Navigation */}
          <div className="accelerators-tabs-container">
            {accelerators.map((item, index) => {
              const isActive = activeAcceleratorTab === index;
              return (
                <div
                  key={item.id}
                  className={`accelerator-tab-card ${isActive ? "active" : ""}`}
                  onClick={() => setActiveAcceleratorTab(index)}
                >
                  <span className="accelerator-tab-text">{item.name}</span>

                  {/* Mobile Accordion Content Drawer */}
                  <div className="mobile-accelerator-content">
                    {renderAcceleratorContent(item)}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop Content Display Area */}
          <div className="desktop-accelerator-display-area">
            {renderAcceleratorContent(accelerators[activeAcceleratorTab])}
          </div>
        </div>
      </section>

      {/* SAP CX Solutions Section */}
      <section className="cx-solutions-section">
        <div className="container cx-header-container">
          <div className="cx-header-row">
            <h2 className="cx-main-title">
              SAP CX Solutions for Industry-Leading Results
            </h2>
            <p className="cx-main-desc">
              By delivering customized solutions that improve customer
              engagement, sales, CPQ, service, and marketing processes across
              all touchpoints, Knack Systems can help you elevate customer
              relationships and enhance your digital operations, ultimately
              driving business growth and success.
            </p>
          </div>
        </div>

        {/* Full-bleed layout container where right image touches the right window edge */}
        <div className="cx-solutions-full-container">
          <div className="cx-solutions-grid">
            {/* Left Vertical Tab Menu */}
            <div className="cx-vertical-tabs-list">
              {cxSolutions.map((item, index) => {
                const isActive = activeCxTab === index;
                return (
                  <div key={item.id} className="cx-tab-item-wrapper">
                    <button
                      className={`cx-tab-button ${isActive ? "active" : ""}`}
                      onClick={() => setActiveCxTab(index)}
                    >
                      <span>{item.name}</span>
                      <span className="accordion-arrow">▼</span>
                    </button>

                    {/* Mobile Accordion Drawer */}
                    <div className="cx-mobile-accordion-content">
                      {renderCxContent(item)}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Content & Edge-to-Edge Image Area */}
            <div className="cx-desktop-content-area">
              {renderCxContent(cxSolutions[activeCxTab])}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
