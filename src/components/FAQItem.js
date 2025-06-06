// src/components/FAQItem.js
import React, { useState } from 'react';

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item" onClick={() => setOpen(!open)}>
      <h3 style={{ cursor: 'pointer' }}>
        {open ? '− ' : '+ '} {question}
      </h3>
      {open && <p>{answer}</p>}
    </div>
  );
}

export default FAQItem;
