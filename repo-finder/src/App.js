import Card from "./components/Card/Card";
import Searchbar from "./components/Searchbar/Searchbar";
function App() {
  return (
    <div className="App">
      <Searchbar />
      <div className="grid">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
