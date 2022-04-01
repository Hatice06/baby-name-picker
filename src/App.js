import React from "react";
import "./App.css";
import babyNamesData from "./babyNamesData.json";

function App() {
  const sortedNames =babyNamesData.sort((a,b)=> a.name > b.name ? 1 : -1);
  return (
    <div className="baby-name-container">
     
      
    </div>
  );
}

export default App;
