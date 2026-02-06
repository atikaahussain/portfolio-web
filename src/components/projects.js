import React from 'react';
import '../styles/projects.css';
import '../styles/style.css';
import ill1 from '../assets/ill-1.jpg';
import ill2 from '../assets/ill-2.jpg';
import ill3 from '../assets/ill-3.jpg';
import ill4 from '../assets/ill-4.jpg';
import ill5 from '../assets/ill-5.jpg';
import ill6 from '../assets/ill-6.jpg';
import ill7 from '../assets/ill-7.jpg';
import ill8 from '../assets/ill-8.jpg';


const projects = [
  {
    title: "GOING CARAT",
    description: "A fan app of Seventeen band that gathers seventeen related content in one place",
    tech: "React",
     github: "https://github.com/atikaahussain/going-carat",
    demo: "https://goingcarat.vercel.app/"
  },
  {
    title: "GYM-MANAGEMENT WEBSITE",
    description: "A full responsive web app using React, Node.js, and MySQL (soon to be uploaded)",
    tech: "React, Node.js, MySQL",
     github: "https://github.com/atikaahussain/Gym-Management-System",
    demo: ""
  },
  {
    title: "TRAIN-RESERVATION SYSTEM",
    description: "A full responsive web app using React, Node.js, and MySQL (soon to be uploaded)",
    tech: "Java, JavaFX, PostgreSQL",
    github: "https://github.com/atikaahussain/Train-Reservation-System",
    demo: ""
  },
  {
    title: "INSTA FOLLOW TRACKER",
    description: "code made to keep track who not following you, who follows you and who you following back etc etc",
    tech: "python, selenium",
     github: "https://github.com/atikaahussain/insta-follow-tracker",
    demo: ""
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
  //    github: "",
  //   demo: ""
  // },

  {
    title: "CANDY CRUSH CLONE",
    description: "Candy Crush project made with core C++ basics and SFML library for graphical interface (soon to be uploaded)",
    tech: "C++ and SFML",
     github: "",
    demo: "" 
  },
  {
    title: "PORTFOLIO WEBSITE",
    description: "Responsive personal portfolio site with creative UI (soon to be uploaded)",
    tech: "React",
     github: "https://github.com/atikaahussain/portfolio-web",
    demo: ""
  }
];
const illustrationImages = [
  ill8,ill3,ill5,ill1,ill2,ill6,ill7,ill4

];
const Projects = () => {
  return (
    <div className="projectbox">

      <div className='project-box'>
        {/* navbar */}
        <div className="project-content">
        <h1>Development</h1>
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
        
         {/* Illustrations */}
          <div className='illustration-content'>
            <h1>Illustrations</h1>
            
            <ul className=" ill-grid">
              {illustrationImages.map((src, index) => (
                <li key={index} className="ill-card">
                  <img src={src} alt={`Illustration ${index + 1}`} />
                </li>
              ))}
            </ul>
          </div>


        </div>
      </div>

    </div>
  );
};

export default Projects;
