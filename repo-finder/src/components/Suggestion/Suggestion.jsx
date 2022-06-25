import React from 'react';
import "./suggestion.css"
const Suggestion = ({ repo, setText, setRepoList, }) => {
  const addFromSuggestions = () => {
    setRepoList(prev => [...prev, repo])
    setText("")
  }
  return (
    <div className='suggestion' onClick={addFromSuggestions}>
      <img src={repo.owner.avatar_url} alt="" />
      <p>{repo.full_name}</p>
      <p>{repo.stargazers_count}</p>
    </div>
  );
}

export default Suggestion;
