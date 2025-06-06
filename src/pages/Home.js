import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className="page home">
      <h1>Welcome to AccessMate</h1>
      <p>
        Tired of overpriced subscriptions? At <strong>AccessMate</strong>, we make premium access affordable.
        Get instant access to YouTube Premium and OTT bundles starting from <strong>$5/month</strong>.
      </p>

      <section>
        <h2>Our Services</h2>
        <ul>
          <li>🎥 YouTube Premium Family Invite – Just <strong>$5/month</strong></li>
          <li>📺 OTT Super Pack – Prime, SonyLIV, ZEE5 &amp; more for <strong>$7/month</strong></li>
        </ul>
      </section>

      <Link to="/pricing" className="btn" aria-label="View Pricing Plans">
        View Pricing
      </Link>
    </main>
  );
}

export default Home;
