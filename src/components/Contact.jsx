// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div className="contact-content">
      <h1>Contact the Shire</h1>
      <p>
        Connect with us through our social media channels!
        Follow us for updates, news, and more about life in the Shire.
      </p>
      <ul className="social-links">
        <li>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </li>
        <li>
          <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
            Pinterest
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;