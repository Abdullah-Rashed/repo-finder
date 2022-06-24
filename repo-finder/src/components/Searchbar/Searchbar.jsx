import React from 'react';
import "./searchbar.css"
import search from "../images/search.svg"
const Searchbar = ({ handleSearch, text, setText }) => {
  return (
    <div className='container'>
      <div className="searchbar-container">
        <img className='search-icon' src={search} alt="" />
        <input className='searchbar'
          type="text"
          placeholder='search for repos'
          value={text}
          onChange={(e) => setText(e.target.value)}
          onkey
        />
      </div>
      <button onClick={handleSearch}>add</button>
    </div>
  );
}

export default Searchbar;
