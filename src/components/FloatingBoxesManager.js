import React, { useState } from 'react';
import About from './about';
import Links from './links';
import Projects from './projects';
import Contact from './contact';
import '../styles/style.css';

import aboutme from '../assets/aboutme.png';
import links from '../assets/links.png';
import contact from '../assets/contact.png';
import project from '../assets/project.png';
import crossbtn from '../assets/cross.png';

const componentMap = {
  about: About,
  links: Links,
  project: Projects,
  contact: Contact,
};

const icons = {
  about: aboutme,
  links: links,
  project: project,
  contact: contact,
};

let zIndexCounter = 1000;

export default function FloatingBoxesManager() {
  const [boxes, setBoxes] = useState([]);

  const estimatedHeights = {
    about: 630,
    project: 600,
    links: 350,
    contact: 400,
  };

  const addBox = (type) => {
    if (boxes.find((b) => b.type === type)) return;

    const isMobile = window.innerWidth <= 768;

    const estimatedHeight = estimatedHeights[type] || 400;
    const estimatedWidth = 350;


    const newBox = {
      id: Date.now(),
      type,
      zIndex: ++zIndexCounter,
      position: {
      x: isMobile ? (window.innerWidth - estimatedWidth) / 2 : Math.random() * (window.innerWidth - 400),
      y: isMobile ? (window.innerHeight - estimatedHeight) / 2 : Math.random() * (window.innerHeight - 300),
      },
    };

    setBoxes((prev) => [...prev, newBox]);
  };

  const removeBox = (id) => {
    setBoxes(boxes.filter((b) => b.id !== id));
  };

  const bringToFront = (id) => {
    setBoxes((prev) =>
      prev.map((box) =>
        box.id === id ? { ...box, zIndex: ++zIndexCounter } : box
      )
    );
  };

  const handleDrag = (e, id) => {
    const box = boxes.find((b) => b.id === id);
    if (!box) return;

    const offsetX = e.clientX - box.position.x;
    const offsetY = e.clientY - box.position.y;

    const onMouseMove = (moveEvent) => {
      const x = Math.max(
        0,
        Math.min(moveEvent.clientX - offsetX, window.innerWidth - 400)
      );
      const y = Math.max(
        0,
        Math.min(moveEvent.clientY - offsetY, window.innerHeight - 300)
      );
      setBoxes((prev) =>
        prev.map((b) =>
          b.id === id ? { ...b, position: { x, y } } : b
        )
      );
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  return (
    <>
      <div className="icon-buttons">
        {['about', 'links', 'project', 'contact'].map((label) => (
          <button key={label} onClick={() => addBox(label)}>
            <img src={icons[label]} alt={label} />
            <span>{label}</span>
          </button>
        ))}
      </div>

      {boxes.map(({ id, type, zIndex, position }) => {
        const Component = componentMap[type];
        return (
          <div
            key={id}
            className="floatingbox"
            style={{
              position: 'fixed',
              top: position.y,
              left: position.x,
              zIndex,
            }}
            onMouseDown={() => bringToFront(id)}
          >
            <div
              className="boxes-navbar"
              onMouseDown={(e) => handleDrag(e, id)}
              style={{ cursor: 'grab' }}
            >
              <span className="navtitle">{type}</span>
              <i
               className="fa-solid fa-circle-xmark close-btn"
                onClick={() => removeBox(id)}
              ></i>
            </div>
            <Component />
          </div>
        );
      })}
    </>
  );
}
