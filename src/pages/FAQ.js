import React from 'react';

const styles = {
  page: {
    color: '#fff',
    maxWidth: '900px',
    margin: '0 auto',
    padding: '32px',
  },
  heading: {
    color: '#ffffff',
    fontSize: '2rem',
    marginBottom: '24px',
  },
  question: {
    marginTop: '24px',
    color: '#f0f0f0',
  },
  answer: {
    marginTop: '8px',
    lineHeight: '1.6',
  },
};

function FAQ() {
  return (
    <div className="page faq" style={styles.page}>
      <h1 style={styles.heading}>Frequently Asked Questions</h1>

      <h3 style={styles.question}>Is this safe to use?</h3>
      <p style={styles.answer}>
        Yes! We add you to a legally valid family plan or shared access. Your account is not shared with anyone else.
      </p>

      <h3 style={styles.question}>How do I get access after payment?</h3>
      <p style={styles.answer}>
        Once your payment is confirmed, you'll receive a family group invite or direct login details within 5 minutes via Telegram.
      </p>

      <h3 style={styles.question}>How long does the access last?</h3>
      <p style={styles.answer}>
        Each plan is valid for 30 days from the date of activation. You’ll get a renewal reminder before expiry.
      </p>

      <h3 style={styles.question}>What if the access stops working?</h3>
      <p style={styles.answer}>
        We guarantee uptime. If your access stops before the validity period, we’ll replace it at no cost.
      </p>

      <h3 style={styles.question}>How many devices can I use?</h3>
      <p style={styles.answer}>
        Each plan supports 1-2 devices atmost. OTT Bundle services work across multiple apps simultaneously.
      </p>

      <h3 style={styles.question}>Do I need to use my personal Gmail or number?</h3>
      <p style={styles.answer}>
        For YouTube Premium, you will need to join via your Google account. No personal info is shared with others.
      </p>
    </div>
  );
}

export default FAQ;
