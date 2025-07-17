import React from 'react';
import '../styles/projects.css';
import '../styles/style.css';
const projects = [
  {
    title: "CANDY CRUSH CLONE",
    description: "Candy Crush project made with core C++ basics and SFML library for graphical interface (soon to be uploaded)",
    tech: "C++ and SFML",
     github: "https://github.com/atikaahussain/candy-crush-clone",
    demo: "" 
  },
  {
    title: "GYM-MANAGEMENT WEBSITE",
    description: "A full responsive web app using React, Node.js, and MySQL (soon to be uploaded)",
    tech: "React, Node.js, MySQL",
     github: "https://github.com/atikaahussain/candy-crush-clone",
    demo: "https://github.com/atikaahussain/candy-crush-clone"
  },
  {
    title: "FLAPPY BIRD CLONE",
    description: "A Flappy Bird clone made in x86 Assembly on 80x25 interface",
    tech: "x86 Assembly (80x25)",
     github: "https://github.com/atikaahussain/Flappy-Bird",
    demo: ""
  },
  // {
  //   title: "BOUNCE",
  //   description: "A 3D ball game built with Unity to learn Unity basics (soon to be uploaded)",
  //   tech: "C#, Unity",
  //    github: "https://github.com/atikaahussain/candy-crush-clone",
  //   demo: "https://github.com/atikaahussain/candy-crush-clone"
  // },
  // {
  //   title: "GOING SVT",
  //   description: "Responsive fan app for SEVENTEEN boy band (soon to be uploaded)",
  //   tech: "React, HTML, CSS, JS",
  //    github: "https://github.com/atikaahussain/candy-crush-clone",
  //   demo: "https://github.com/atikaahussain/candy-crush-clone"
  // },
  {
    title: "PORTFOLIO WEBSITE",
    description: "Responsive personal portfolio site with creative UI (soon to be uploaded)",
    tech: "HTML, CSS, JS",
     github: "https://github.com/atikaahussain/portfolio-web",
    demo: "atikadesktop.vercel.app"
  }
];

const Projects = () => {
  return (
    <div className="projectbox">

      <div className='project-box'>
        {/* navbar */}
        <div className="project-content">

          <ul className="proj-grid">

            {projects.map((proj, index) => (
              <li className="proj-card" key={index}>
                <div className="proj-header">
                  {proj.github && (
                    <a href={proj.github}><i className="fa-brands fa-square-github" style={{ fontSize: '20px' }}></i></a>)}
                  {proj.demo && (
                    <a href={proj.demo}><i className="fa-solid fa-arrow-up-from-bracket" style={{ fontSize: '18px' }}></i></a>)}
                </div>
                <div className="proj-title">{proj.title}</div>
                <div className="proj-text">{proj.description}</div>
                <div className="proj-tech">{proj.tech}</div>
              </li>
            ))}
          </ul>

        </div>
      </div>

    </div>
  );
};

export default Projects;
