import React from 'react';
import "./card.css"
import star from "../images/star.png"
import fork from "../images/fork.webp"
import issues from "../images/issues.png"
import calendar from "../images/calendar.svg"
import plus from "../images/plus.svg"
import lic from "../images/license.svg"
import lang from "../images/lang.svg"
import Stat from '../Stat/Stat';

const Card = (props) => {

  return (
    <div className="card">
      <div className='author'>
        <a target="blank" href={`http://github.com/${props.full_name}`}>{props.full_name}</a>
        <img src={props.img} alt="" />
      </div>
      <div className="stats">
        <Stat icon={star} label="Stars" text={props.stargazers_count} />
        <Stat icon={fork} label="Forks" text={props.forks_count} />
        <Stat icon={issues} label="Opem issues" text={props.open_issues_count} />
        <Stat icon={calendar} label="Age" text={props.created_at} />
        <Stat icon={plus} label="Last commit" text="2,212" />
        <Stat icon={lic} label="License" text={props.license} />
        <Stat icon={lang} label="Language" text={props.language} />
      </div>
      <div className='button-container'>
        <button onClick={() => props.deRepo(props.id)} className='remove'>Remove repo</button>
      </div>
    </div>
  );
}

export default Card;
