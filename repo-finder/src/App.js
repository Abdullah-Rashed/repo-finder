import Card from "./components/Card/Card";
import Searchbar from "./components/Searchbar/Searchbar";
import { useEffect, useState } from 'react';
const moment = require("moment")
function App() {

  const [text, setText] = useState("");
  const [repoList, setRepoList] = useState([]);
  const [suggestionArray, setSuggestionArray] = useState([]);

  const fetchRepo = (key) => {
    if (key === "Enter") {
      fetch(`https://api.github.com/search/repositories?q=${text}`)
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
        fetch(`https://api.github.com/search/repositories?q=${text}`)
          .then(response => response.json())
          .then(data => setSuggestionArray(data.items)
          )
      }, 500);
      return () => clearTimeout(delayedDebounceFn)
    }
    if (text.length < 2) {
      setSuggestionArray([])
    }
  }, [text])


  return (
    <>
      <Searchbar
        handleSearch={fetchRepo}
        text={text}
        setText={setText}
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
              created_at={moment(repo.created_at, "YYYYMMDD").fromNow()}
              pushed_at={moment(repo.pushed_at, "YYYYMMDD").fromNow()}
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
