import React from 'react';
import '../styles/contacts.css';
import '../styles/style.css';

import marcel from '../assets/marcel.png';
const Contact = () => {
  return (
    <div className="contactbox">
      <div className="contact-content">
        <div className="cont-header">
          <h1>LETS CONNECT!</h1>
          <p>
            I would be really happy to connect with you. Do send me an email for a further talk...
          </p>
        </div>

        <div className="contimg">
          <img src={marcel} alt="marceline" />
        </div>

        <div className="cont-footer">
          <p>
            Send mail me at: <span className="highlight">atikahussain248@gmail.com</span>
          </p>
          <a
            href="mailto:atikahussain248@gmail.com?subject=Let's Connect&body=Hello Atika!"
            target="_blank"
            rel="noreferrer"
          >
            <button className="cont-btn">send me an email</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
