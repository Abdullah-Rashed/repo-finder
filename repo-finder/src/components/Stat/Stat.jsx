import React from 'react';
import "./stat.css"
const Stat = ({ icon, label, text }) => {
  return (
    <div className="stat">
      <div className="name-icon-container">
        <img src={icon} alt="" />
        <p>{label}</p>
      </div>
      <p>{text}</p>
    </div>
  );
}

export default Stat;
