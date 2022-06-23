import React from 'react';

const Stat = ({ icon, name, number }) => {
  return (
    <div className="stat">
      <div className="name-icon-container">
        <img src={icon} alt="" />
        <p>{name}</p>
      </div>
      <p>{number}</p>
    </div>
  );
}

export default Stat;
