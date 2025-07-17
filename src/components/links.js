import React from 'react';
import linkedinicon from '../assets/linkedinicon.png';
import mailicon from '../assets/mailicon.png';
import githubicon from '../assets/githubicon.png';
import instaicon from '../assets/instaicon.png';
import leetcodeicon from '../assets/leetcodeicon.png';
import pinterest from '../assets/pinterest.png';
import mediumicon from '../assets/medium.png';

import '../styles/links.css';
import '../styles/style.css';

const Links = () => {
  return (
    <div className="linkbox">
      <div className="icon-buttons">
        <a href="mailto:atikahussain248@gmail.com" target="_blank" rel="noreferrer">
          <button>
            <img src={mailicon} alt="mail" />
            <span>MAIL</span>
          </button>
        </a>
        <a href="https://www.linkedin.com/in/atikaahussain248" target="_blank" rel="noreferrer">
          <button>
            <img src={linkedinicon} alt="linkedin" />
            <span>LINKEDIN</span>
          </button>
        </a>
        <a href="https://github.com/atikaahussain" target="_blank" rel="noreferrer">
          <button>
            <img src={githubicon} alt="git" />
            <span>GITHUB</span>
          </button>
        </a>
        <a href="https://instagram.com/radiantartt" target="_blank" rel="noreferrer">
          <button>
            <img src={instaicon} alt="ig" />
            <span>INSTAGRAM</span>
          </button>
        </a>
        <a href="https://leetcode.com/atikaa_hussain" target="_blank" rel="noreferrer">
          <button>
            <img src={leetcodeicon} alt="leetcode" />
            <span>LEETCODE</span>
          </button>
        </a>
        <a href="https://www.pinterest.com/atikaa_hussain/" target="_blank" rel="noreferrer">
          <button>
            <img src={pinterest} alt="pinterest" />
            <span>PINTEREST</span>
          </button>
        </a>
        <a href="https://medium.com/@atikaahussain" target="_blank" rel="noreferrer">
          <button>
            <img src={mediumicon} alt="medium" />
            <span>MEDIUM</span>
          </button>
        </a>
        <p>*clicking any of the links opens a new tab</p>
      </div>
    </div>
  );
};

export default Links;
