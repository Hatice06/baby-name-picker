import React from "react";
import "./App.css";
import babyNamesData from "./babyNamesData.json";

function App() {
  const sortedNames =babyNamesData.sort((a,b)=> a.name > b.name ? 1 : -1);
  return (
    <div className="baby-name-container">
      <p>
        {sortedNames.map((baby) => {
          if (baby.sex === "f") {
            return <span className="baby-girl"> {baby.name} </span>;
          } else {
            return <span className="baby-boy"> {baby.name} </span>;
          }
        })}
      </p>
      <hr />
    </div>
  );
}

export default App;
