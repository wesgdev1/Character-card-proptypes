import CharacterCard from "./components/CharacterCard";

import data from "./assets/data.json";

import "./app.css";
import CharacterCardList from "./components/CharacterCardList";

function App() {
  return (
    <div className="app">
      <h1>Rick and Morty Characters</h1>
      <h2>Your code here</h2>

      <div className="container">
        <CharacterCardList list={data} />
        {/* <CharacterCard /> */}
      </div>
    </div>
  );
}

export default App;
