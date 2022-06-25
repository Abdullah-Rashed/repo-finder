import React from 'react';
import "./searchbar.css"
import search from "../images/search.svg"
import Suggestion from '../Suggestion/Suggestion';
const Searchbar = ({ handleSearch, text, setText, suggestionArray, setRepoList }) => {
  return (
    <div className='container'>
      <div className="searchbar-container">
        <img className='search-icon' src={search} alt="" />
        <input className='searchbar'
          type="text"
          placeholder='search for repos'
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => handleSearch(e.key)}
        />
        <div className="suggeststion-container">
          {suggestionArray.map((repo, key) => {
            return (
              <Suggestion
                key={key}
                repo={repo}
                setText={setText}
                setRepoList={setRepoList}
              />
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
