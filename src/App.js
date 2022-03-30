import React from "react";
import "./App.css";
import babyNamesData from "./babyNamesData.json";

function App() {
  return (
    <div className="baby-name-container">
      {babyNamesData.map((baby) => {
        if (baby.sex === "f") {
          return <span className="baby-girl"> {baby.name} </span>;
        } else {
          return <span className="baby-boy"> {baby.name} </span>;
        }
      })}
    </div>
  );
}

export default App;
