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
    marginBottom: '16px',
  },
  link: {
    color: '#00c2ff',
    textDecoration: 'none',
  },
  subheading: {
    marginTop: '24px',
    color: '#f0f0f0',
  },
};

function Contact() {
  return (
    <div className="page contact" style={styles.page}>
      <h1 style={styles.heading}>Contact & Support</h1>
      <p>If you need help or want to activate your plan, our support team is always online.</p>

      <h3 style={styles.subheading}>Telegram Support:</h3>
      <p>
        <a
          href="https://t.me/+QGHgAanPpDw4OGY1"
          target="_blank"
          rel="noreferrer"
          style={styles.link}
        >
          @accessMateSupport
        </a>
      </p>

      <h3 style={styles.subheading}>Business Hours:</h3>
      <p>🕒 9 AM – 11 PM IST, Every Day</p>

      <h3 style={styles.subheading}>Payments Accepted:</h3>
      <ul>
        <li>✅ USDT (TRC20) – Global users only</li>
      </ul>
    </div>
  );
}

export default Contact;
