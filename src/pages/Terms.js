import React from 'react';

function Terms() {
  const styles = {
    container: {
      color: 'white',
      padding: '20px',
      maxWidth: '900px',
      margin: '0 auto',
    },
    heading2: {
      color: 'white',
      marginBottom: '16px',
    },
    heading3: {
      color: 'white',
      marginTop: '24px',
      marginBottom: '8px',
    },
    paragraph: {
      color: 'white',
      lineHeight: '1.6',
      marginBottom: '12px',
    },
  };

  return (
    <div className="page terms" style={styles.container}>
      <h2 style={styles.heading2}>Terms & Conditions</h2>

      <p style={styles.paragraph}>
        Welcome to AccessMate. By using our services, you agree to the following terms and conditions. Please read them carefully.
      </p>

      <h3 style={styles.heading3}>1. Payment and Refund Policy</h3>
      <p style={styles.paragraph}>
        All payments are non-refundable once the account or access credentials have been shared with you. 
        Please ensure you understand the plan details before purchasing. No refunds will be issued for cancellations or inactivity.
      </p>

      <h3 style={styles.heading3}>2. Trial Access</h3>
      <p style={styles.paragraph}>
        Trial access is provided strictly for evaluation purposes and is temporary. 
        We reserve the right to terminate trial access at any time without notice.
      </p>

      <h3 style={styles.heading3}>3. Account Usage and Sharing</h3>
      <p style={styles.paragraph}>
        You agree to use the provided accounts only for personal use and not to share credentials with unauthorized users. 
        Misuse or violation of these terms may result in immediate suspension or termination of service without refund.
      </p>

      <h3 style={styles.heading3}>4. Service Availability and Uptime</h3>
      <p style={styles.paragraph}>
        While we strive to provide uninterrupted service, AccessMate does not guarantee 100% uptime due to factors beyond our control. 
        In the event of service disruption within the subscription period, we will make reasonable efforts to restore access or provide compensation as per policy.
      </p>

      <h3 style={styles.heading3}>5. Legal Compliance</h3>
      <p style={styles.paragraph}>
        You agree to comply with all applicable laws regarding the use of our services. AccessMate is not responsible for any illegal activities conducted by users.
      </p>

      <h3 style={styles.heading3}>6. Limitation of Liability</h3>
      <p style={styles.paragraph}>
        AccessMate is not liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our services.
      </p>

      <h3 style={styles.heading3}>7. Changes to Terms</h3>
      <p style={styles.paragraph}>
        We reserve the right to modify these terms and conditions at any time. Continued use of the service after changes implies acceptance of the updated terms.
      </p>

      <h3 style={styles.heading3}>8. Contact Us</h3>
      <p style={styles.paragraph}>
        If you have questions or concerns about these terms, please contact our support team on Telegram.
      </p>
    </div>
  );
}

export default Terms;
