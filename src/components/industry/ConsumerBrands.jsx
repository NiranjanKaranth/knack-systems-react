import React from 'react';

function ConsumerBrands({ categories }) {
  // Default categories if none are passed (used for Apparel)
  const defaultCategories = [
    {
      title: 'Apparel and Fashion',
      icon: 'https://www.knacksystems.com/hubfs/knack-systems-2020/Apparel-and-Fashion-01.svg',
    },
    {
      title: 'Footwear & Accessories',
      icon: 'https://www.knacksystems.com/hubfs/knack-systems-2020/Footwear-Accessories-02.svg',
    },
    {
      title: 'Sports and Outdoor',
      icon: 'https://www.knacksystems.com/hubfs/knack-systems-2020/Sports-Outdoor-02.svg',
    },
    {
      title: 'Consumer Durables',
      icon: 'https://www.knacksystems.com/hubfs/knack-systems-2020/Consumer-Durables-02.svg',
    },
  ];

  const listToRender = categories || defaultCategories;

  return (
    <section className="consumer-brands-section">
      <div className="container consumer-brands-wrapper">
        {/* Left Side Two-Line Heading */}
        <div className="brands-heading">
          <h2>
            Consumer Brands <br /> We Serve
          </h2>
        </div>

        {/* Right Side Icons Grid */}
        <div className="brands-category-grid">
          {listToRender.map((cat, idx) => (
            <div key={idx} className="brand-item">
              <div className="brand-icon-wrapper">
                <img src={cat.icon} alt={cat.title} />
              </div>
              <p>{cat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ConsumerBrands;