import React, {useState} from "react";
import "./App.css";
import babyNamesData from "./babyNamesData.json";
import AllBabyNames from "./AllBabyNames";

function App() {


  const[sortedNames, setSortedNames]=useState(babyNamesData.sort((a,b)=> a.name > b.name ? 1 : -1));

  const handleClick = (event) => {
    const searchName =babyNamesData.filter(item => item.name.includes(event.target.value))
   setSortedNames(searchName);
   console.log(searchName);
  }

  return (
    <div className="baby-name-container">
      <input type="text" placeholder="Search baby name" onKeyUp={handleClick}> 
      </input>
      <AllBabyNames sortedNames={sortedNames} />
      <hr />
    </div>
  );
}

export default App;
