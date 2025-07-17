import React from 'react';
import crossIcon from '../assets/cross.png';

const FloatingBoxNavBar = ({ title, onClose }) => {
  return (
    <div className="boxes-navbar">
      <span className="navtitle">{title}</span>
      <img
        src={crossIcon}
        alt="Close"
        className="close-btn"
        onClick={onClose}
      />
    </div>
  );
};

export default FloatingBoxNavBar;
