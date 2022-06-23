import React from 'react';
import "./card.css"
import star from "../images/star.png"
import fork from "../images/fork.webp"
import issues from "../images/issues.png"
import calendar from "../images/calendar.svg"
import plus from "../images/plus.svg"
import license from "../images/license.svg"
import lang from "../images/lang.svg"
import Stat from '../Stat/Stat';


const Card = () => {
  return (
    <div className="card">
      <div className='author'>
        <p>facebook/react</p>
        <img src={plus} alt="" />
      </div>
      <div className="stats">
        <Stat icon={star} label="Stars" text="2,212" />
        <Stat icon={fork} label="Forks" text="2,212" />
        <Stat icon={issues} label="Opem issues" text="2,212" />
        <Stat icon={calendar} label="Age" text="2,212" />
        <Stat icon={plus} label="Last commit" text="2,212" />
        <Stat icon={license} label="License" text="2,212" />
        <Stat icon={lang} label="Language" text="2,212" />
      </div>
      <div className='button-container'>
        <button className='remove'>Remove repo</button>
      </div>
    </div>
  );
}

export default Card;
