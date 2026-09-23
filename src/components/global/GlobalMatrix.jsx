import React from "react";

function GlobalMatrix({ stats = [] }) {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div className="stat-item" key={index}>
              <h2>{stat.value}</h2>
              <p dangerouslySetInnerHTML={{ __html: stat.label }}></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GlobalMatrix;