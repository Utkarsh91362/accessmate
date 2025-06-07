import React from 'react';
import PlanCard from '../components/PlanCard';

function Pricing() {
  return (
    <main className="page pricing">
      <h1 style={{ color: 'white' }}>Plans & Pricing (in USD)</h1>


      <section className="plans">
        <PlanCard
          title="YouTube Premium"
          price={5}
          features={[
            'Join family group instantly',
            'No ads, background play & downloads',
            'Up to 2 devices per user',
            'Renew manually or monthly recurring',
          ]}
        />

        <PlanCard
          title="OTT Super Bundle"
          price={7}
          features={[
            'Amazon Prime',
            'SonyLIV Premium',
            'ZEE5 Premium',
            'Only 1 device allowed',
            'Auto access with monthly renewal',
          ]}
        />
      </section>

      <aside className="note" aria-live="polite">
  💸 Payments accepted via USDT (TRC20) only.
  <br />
  💬 DM on{' '}
  <a href="https://t.me/+QGHgAanPpDw4OGY1" target="_blank" rel="noopener noreferrer">
    Telegram
  </a>{' '}
  to activate.
</aside>

    </main>
  );
}

export default Pricing;
