import React, { useState } from "react";
import "./App.css";
import babyNamesData from "./babyNamesData.json";
import AllBabyNames from "./AllBabyNames";
import SearchBar from "./SearchBar";
import FavoriteNames from "./FavoriteNames";

function App() {
  const [sortedNames, setSortedNames] = useState(
    babyNamesData.sort((a, b) => (a.name > b.name ? 1 : -1))
  );
  const [favoriteNames, setFavoriteNames] = useState([]);

  const handleClick = (event) => {
    const searchName = sortedNames.filter((item) =>
      item.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSortedNames(searchName);
    console.log(searchName);
  };

  const addFavName = (baby) => {
    setFavoriteNames([...favoriteNames, baby]);
  }

  const removeFavName = (favBaby) => {
    
    setFavoriteNames(favoriteNames.filter(baby => baby.name !== favBaby.name ));
  };

  return (
    <div className="baby-name-container">
      <SearchBar handleClick={handleClick} />
      <FavoriteNames favoriteNames={favoriteNames} removeFavName={removeFavName}/>
      <hr />
      <AllBabyNames sortedNames={sortedNames} addFavName={addFavName} />
      <hr />
    </div>
  );
}

export default App;
