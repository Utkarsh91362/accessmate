import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page home">
      <h1>Welcome to accessMate</h1>
      <p>
        Tired of overpriced subscriptions? At <strong>accessMate</strong>, we make premium access affordable.
        Get instant access to YouTube Premium and OTT bundles starting from <strong>$5/month</strong>.
      </p>

      <h2>Our Services</h2>
      <ul>
        <li>🎥 YouTube Premium Family Invite – Just <strong>$5/month</strong></li>
        <li>📺 OTT Super Pack – Prime, SonyLIV, ZEE5 & more for <strong>$7/month</strong></li>
      </ul>

      <Link to="/pricing" className="btn">View Pricing</Link>
    </div>
  );
}

export default Home;
