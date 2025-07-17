import React from 'react';
import profilePic from '../assets/profile.jpg';
import crossIcon from '../assets/cross.png'; // adjust path if needed
import '../styles/about.css'; // if you have a dedicated CSS file

const About = ({ onClose }) => {
  return (
    <div className="aboutbox floatingbox" data-id="about">
      <div className="about-box">

        <div className="about-top">
          <img className="about-img" src={profilePic} alt="Atika" />
          <div className="about-text">
            <h1 className="highlight">ATIKA HUSSAIN🍃</h1>
            <p>Software Engineer, Game Developer, illustrator, Computer Science Student </p>
          </div>
        </div>

        <div className="box-content">
          <div className="about-content">
            <p>
              hello i am a software and <span className="highlight">game developer</span> currently in my third year of BS
              in Computer Science major and i am passionate about...
            </p>
            <ul>
              <li>Game developement</li>
              <li>Problem Solving</li>
              <li>Data Base integration</li>
              <li>Story Boarding</li>
              <li>Creative illustrations</li>
            </ul>
            <p>
              I am intrested in building creative and interactive applications that combine <span className="highlight">problem-solving, storyboarding,</span>
              and innovative design—blending technical expertise with artistic vision.
            </p>
            <p>
              Intrested in working with me? Send mail me at:
              <a href="mailto:atikahussain248.com" target="_blank" rel="noreferrer">
                <span className="highlight">atikahussain248@gmail.com</span>
              </a>
            </p>
            <p>
              you can download my resume from the following:
              <a href="/assets/cv.pdf" download>
                <button className="cont-btn">DOWNLOAD CV</button>
              </a>
            </p>
          </div>

          <div className="about-edu">
            <h1>EDUCATION</h1>
            <p>Third year university student persuing BS Computer Science from FAST NUCES LHR.</p>
          </div>

          <div className="about-int">
            <h1>OTHER INTERESTS</h1>
            <p>some of my interests and hobbies are</p>
            <ul>
              <li>
                free hand sketching,you can see my work from my art page:
                <a href="https://instagram.com/radiantartt" target="_blank" rel="noreferrer">
                  <span className="highlight">RADIANTART</span>
                </a>
              </li>
              <li>physics especially <span className="highlight">clestial mechanics</span></li>
              <li>exploring human personalities</li>
              <li>music, kdramas,baking, gaming... etc etc</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
