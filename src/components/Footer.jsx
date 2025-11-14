import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="up">
        <div className="left">
          Let’s make something cool together!
          <img src="images/icons.svg" alt="" />
        </div>

        <section className="form-section">
          <form className="contact-form">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Your message" rows="3"></textarea>
            <button type="submit">View Work ↗</button>
          </form>
        </section>
      </div>

      <div className="down">
        <img src="images/logoo.png" alt="" />
        <div>ABOUT</div>
        <div>WORK</div>
        <div>CONTACT</div>
        <div>© Copyright 2025</div>
        <div>Legal Terms</div>
        <div>Privacy and Policy</div>
      </div>
    </footer>
  );
}
