import React from 'react';
import "./card.css"
import image from "../images/GitHub-Logo.png"
import Stat from '../Stat/Stat';
const Card = () => {
  return (
    <div className="card">
      <div className='author'>
        <p>facebook/react</p>
        <img src="" alt="" />
      </div>
      <div className="stats">
        <Stat icon={image} name="Stars" number="2,212" />
        <Stat icon={image} name="Forks" number="2,212" />
        <Stat icon={image} name="Opem issues" number="2,212" />
        <Stat icon={image} name="Age" number="2,212" />
        <Stat icon={image} name="Last commit" number="2,212" />
        <Stat icon={image} name="License" number="2,212" />
        <Stat icon={image} name="Language" number="2,212" />
      </div>
    </div>
  );
}

export default Card;
