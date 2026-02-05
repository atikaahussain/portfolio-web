import React from 'react';
import '../styles/top.css';
import '../styles/style.css';

const HeaderBar = () => {
  return (
    <div className="top">
      <div className="socials">
        <a
          href="mailto:atikahussain248@gmail.com"
          className="fa fa-envelope"
          style={{ fontSize: '18px' }}
          aria-label="Send email to Atika Hussain"
        ></a>

        <a
          href="https://www.linkedin.com/in/atikaahussain248"
          aria-label="Atika Hussain LinkedIn profile"
        >
          <i
            className="fa-brands fa-linkedin"
            style={{ fontSize: '18px' }}
            aria-hidden="true"
          ></i>
        </a>

        <a
          href="https://github.com/atikaahussain"
          aria-label="Atika Hussain GitHub profile"
        >
          <i
            className="fa-brands fa-github"
            style={{ fontSize: '18px' }}
            aria-hidden="true"
          ></i>
        </a>

        <a
          href="https://medium.com/@atikaahussain"
          aria-label="Atika Hussain Medium articles"
        >
          <i
            className="fa fa-pencil"
            style={{ fontSize: '18px' }}
            aria-hidden="true"
          ></i>
        </a>
      </div>
    </div>
  );
};

export default HeaderBar;