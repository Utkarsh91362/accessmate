import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../components/images/background.png';

function Home() {
  useEffect(() => {
    // Set background image on body so it covers everything including under the navbar
    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.minHeight = '100vh';
    document.body.style.margin = 0;

    // Cleanup when leaving page
    return () => {
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundPosition = '';
      document.body.style.backgroundRepeat = '';
      document.body.style.minHeight = '';
      document.body.style.margin = '';
    };
  }, []);

  const styles = {
    heroContent: {
  background: 'rgba(0, 0, 0, 0.06)',
  color: 'white',
  padding: '40px',
  borderRadius: '12px',
  width: 'calc(100% )',  // 10px gap left + right
  height: 'calc(100% )', // 10px gap top + bottom
  boxSizing: 'border-box',
  textAlign: 'center',
  margin: '10px',
},
    heading: {
      fontSize: '3rem',
      marginBottom: '20px',
      color: '#ffffff',
    },
    paragraph: {
      fontSize: '1.2rem',
      lineHeight: '1.6',
    },
    button: {
      display: 'inline-block',
      marginTop: '30px',
      padding: '12px 24px',
      backgroundColor: '#00c2ff',
      color: 'white',
      borderRadius: '8px',
      textDecoration: 'none',
      fontWeight: 'bold',
      transition: 'background-color 0.3s ease',
    },
    service:{
      color: '#FFD700', // example: gold color
  fontSize: '2rem',
  marginTop: '40px',
  marginBottom: '16px',
    }
  };

  return (
    <main className="page home">
      <div style={styles.heroContent}>
        <h1 style={styles.heading}>Welcome to AccessMate</h1>
        <p style={styles.paragraph}>
          Tired of overpriced subscriptions? At <strong>AccessMate</strong>, we make premium access affordable.
          Get instant access to YouTube Premium and OTT bundles starting from <strong>$5/month</strong>.
        </p>

        <section>
          <h2 style={styles.service}>Our Services</h2>
          <ul style={styles.paragraph}>
            <li>🎥 YouTube Premium Family Invite – Just <strong>$5/month</strong></li>
            <li>📺 OTT Super Pack – Prime, SonyLIV, ZEE5 &amp; more for <strong>$7/month</strong></li>
          </ul>
        </section>

        <Link to="/pricing" style={styles.button} aria-label="View Pricing Plans">
          View Pricing
        </Link>
      </div>
    </main>
  );
}

export default Home;
