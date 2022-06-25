import React from 'react';
import "./suggestion.css"
import img from "../images/star.png"
const Suggestion = ({ repo, setText, setRepoList, }) => {

  const addFromSuggestions = () => {
    setRepoList(prev => [...prev, repo])
    setText("")
  }

  return (
    <div className='suggestion' onClick={addFromSuggestions}>
      <div className="author-container">
        <img src={repo.owner.avatar_url} alt="" />
        <p>{repo.full_name}</p>
      </div>
      <div className="star-container">
        <img src={img} alt="" />
        <p>{repo.stargazers_count}</p>
      </div>
    </div>
  );
}

export default Suggestion;
