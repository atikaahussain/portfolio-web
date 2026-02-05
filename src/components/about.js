import React from 'react';
import profilePic from '../assets/profile.png';
import '../styles/about.css'; // if you have a dedicated CSS file

const About = ({ onClose }) => {
  return (
    <div className="aboutbox floatingbox" data-id="about">
      <div className="about-box">

        <div className="about-top">
          <img className="about-img" src={profilePic} alt="Atika" />
          <div className="about-text">
            <h1 className="highlight">ATIKA HUSSAIN</h1>
            <p>Software Engineer, illustrator, Computer Science Undergrad </p>
          </div>
        </div>

        <div className="box-content">
          <div className="about-content">
            <p>
              Hello i am a <span className="highlight">Software Engineer</span> currently in my third year of BS
              in Computer Science major i am passionate about...
            </p>
            <ul>
              <li>Game developement</li>
              <li>Problem Solving</li>
              <li>Data Base integration</li>
              <li>Story Boarding</li>
              <li>Creative illustrations</li>
              <li>Fun and creative website designing</li>
            </ul>
            <p>
              I am intrested in building creative and interactive applications that combine <span className="highlight">problem-solving, storyboarding,</span>
              and innovative design—blending technical expertise with artistic vision.
            </p>
            <p>
              Intrested in working with me? Send mail me at:
              <a href="mailto:atikahussain248@gmail.com" target="_blank" rel="noreferrer">
                <span className="highlight">atikahussain248@gmail.com</span>
              </a>
            </p>
            <p>
              you can download my resume from here:
              <a href="/assets/cv.pdf" download>
                <button className="cont-btn">DOWNLOAD CV</button>
              </a>
            </p>
          </div>

          <div className="about-edu">
            <h1>EDUCATION</h1>
            <p>Third year university student doing Bachelors in Computer Science from FAST NUCES.</p>
          </div>

          <div className="about-int">
            <h1>OTHER INTERESTS</h1>
            <p>Some of my interests and hobbies are</p>
            <ul>
              <li>
                Free hand sketching, You can see my work from my page:
                <a href="https://instagram.com/radiantartt" target="_blank" rel="noreferrer">
                  <span className="highlight">RADIANTART</span>
                </a>
              </li>
              <li>Learning Physics especially clestial mechanics You can read my blog here:
              <a href="https://medium.com/@atikaahussain" target="_blank" rel="noreferrer">
                  <span className="highlight">MEDIUM</span>
                </a>
              </li>
              <li>Exploring human personalities</li>
              <li>Music, kdramas, baking, gaming... etc etc</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
