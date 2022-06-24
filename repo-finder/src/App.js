import Card from "./components/Card/Card";
import Searchbar from "./components/Searchbar/Searchbar";
import { useState } from 'react';

function App() {

  const [text, setText] = useState("");
  const [repoList, setRepoList] = useState([]);


  const fetchRepos = () => {
    fetch(`http://api.github.com/search/repositories?q=${text}`)
      .then(response => response.json())
      .then(data => setRepoList(prev => [...prev, data.items[0]]))
  }

  const deleteRepo = (id) => {
    const newList = repoList.filter((repo) => repo.node_id !== id)
    setRepoList(newList)
  }


  console.log(repoList)
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
              license={repo.license ? repo.license.spdx_id : "No available License"}
              language={repo.language ? repo.language : "No available language"}
              deRepo={deleteRepo}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
