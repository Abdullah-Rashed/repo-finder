import Card from "./components/Card/Card";
import Searchbar from "./components/Searchbar/Searchbar";
import { useEffect, useState } from 'react';
import Suggestion from "./components/Suggestion/Suggestion";

function App() {

  const [text, setText] = useState("");
  const [repoList, setRepoList] = useState([]);
  const [suggestionArray, setSuggestionArray] = useState([]);

  const fetchRepos = (key) => {
    if (key === "Enter") {
      fetch(`http://api.github.com/search/repositories?q=${text}`)
        .then(response => response.json())
        .then(data => setRepoList(prev => [...prev, data.items[0]]))
        .then(setText(""))
    }
  }

  const deleteRepo = (id) => {
    const newList = repoList.filter((repo) => repo.node_id !== id)
    setRepoList(newList)
  }

  useEffect(() => {
    if (text.length > 2) {
      const delayedDebounceFn = setTimeout(() => {
        console.log(text)
        fetch(`http://api.github.com/search/repositories?q=${text}`)
          .then(response => response.json())
          .then(data => setSuggestionArray(data.items)
          )
      }, 500)
      return () => clearTimeout(delayedDebounceFn)
    }
    if (text.length < 2) {
      setSuggestionArray([])
    }
  }, [text])


  return (
    <div className="App">
      <Searchbar
        handleSearch={fetchRepos}
        text={text}
        setText={setText}
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
              deRepo={deleteRepo}
            />
          )
        })}
      </div>
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
  );
}

export default App;
