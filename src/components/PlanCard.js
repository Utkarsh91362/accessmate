// src/components/PlanCard.js
import React from 'react';

function PlanCard({ title, price, features }) {
  return (
    <div className="plan">
      <h2>{title}</h2>
      <p><strong>${price} / month</strong></p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>✅ {feature}</li>
        ))}
      </ul>
    </div>
  );
}

export default PlanCard;
