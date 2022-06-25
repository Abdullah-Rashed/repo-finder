import Card from "./components/Card/Card";
import Searchbar from "./components/Searchbar/Searchbar";
import { useEffect, useState } from 'react';

function App() {

  const [searchText, setSearchText] = useState("");
  const [repoList, setRepoList] = useState([]);
  const [suggestionArray, setSuggestionArray] = useState([]);

  const fetchRepo = (key) => {
    if (key === "Enter") {
      fetch(`http://api.github.com/search/repositories?q=${searchText}`)
        .then(response => response.json())
        .then(data => setRepoList(prev => [...prev, data.items[0]]))
        .then(setSearchText(""))
    }
  }

  const deleteRepo = (id) => {
    const newList = repoList.filter((repo) => repo.node_id !== id)
    setRepoList(newList)
  }

  useEffect(() => {
    if (searchText.length > 2) {
      const delayedDebounceFn = setTimeout(() => {
        fetch(`http://api.github.com/search/repositories?q=${searchText}`)
          .then(response => response.json())
          .then(data => setSuggestionArray(data.items)
          )
      }, 800);
      return () => clearTimeout(delayedDebounceFn)
    }
    if (searchText.length < 2) {
      setSuggestionArray([])
    }
  }, [searchText])


  return (
    <>
      <Searchbar
        handleSearch={fetchRepo}
        text={searchText}
        setText={setSearchText}
        suggestionArray={suggestionArray}
        setRepoList={setRepoList}
      />
      <div className="grid">
        {repoList.map((repo, key) => {
          return (
            <Card
              key={key}
              id={repo.node_id}
              full_name={repo.full_name}
              img={repo.owner.avatar_url ? repo.owner.avatar_url : ""}
              stargazers_count={repo.stargazers_count}
              forks_count={repo.forks_count}
              open_issues_count={repo.open_issues_count}
              created_at={repo.created_at}
              pushed_at={repo.pushed_at}
              license={repo.license ? repo.license.spdx_id : "No available License"}
              language={repo.language ? repo.language : "No available language"}
              deleteRepo={deleteRepo}
            />
          )
        })}
      </div>
    </>
  );
}

export default App;
