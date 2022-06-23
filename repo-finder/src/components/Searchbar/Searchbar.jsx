import React from 'react';
import "./searchbar.css"
import search from "../images/search.svg"
const Searchbar = () => {
  return (
    <div className='container'>
      <div className="searchbar-container">
        <img className='search-icon' src={search} alt="" />
        <input className='searchbar' type="text" placeholder='search for repos' />
      </div>
    </div>
  );
}

export default Searchbar;
