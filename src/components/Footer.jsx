import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="app-footer">
      <p>&copy; {currentYear} Made with <span className="heart">&hearts;</span> by Your Name</p>
    </footer>
  );
};

export default Footer;