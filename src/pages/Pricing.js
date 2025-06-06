import React from 'react';
import PlanCard from '../components/PlanCard';

function Pricing() {
  return (
    <div className="page pricing">
      <h1>Plans & Pricing (in USD)</h1>

      <PlanCard
        title="YouTube Premium"
        price={5}
        features={[
          'Join family group instantly',
          'No ads, background play & downloads',
          'Up to 5 devices per user',
          'Renew manually or monthly recurring'
        ]}
      />

      <PlanCard
        title="OTT Super Bundle"
        price={7}
        features={[
          'Amazon Prime',
          'SonyLIV Premium',
          'ZEE5 Premium',
          'Up to 4 devices',
          'Auto access with monthly renewal'
        ]}
      />

      <div className="note">
        💸 Payments accepted via USDT (TRC20), PayPal, or Indian UPI.
        <br />
        💬 DM on Telegram to activate.
      </div>
    </div>
  );
}

export default Pricing;
