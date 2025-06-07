import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <Link className="logo" to="/">
        AccessMate
      </Link>
      <div className="links">
        <Link to="/pricing">Pricing</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/terms">Terms</Link>
      </div>
    </nav>
  );
}

export default Navbar;
