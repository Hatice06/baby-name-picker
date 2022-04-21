import React from "react";

function AllBabyNames(props) {
  return (
    <p>
      {props.sortedNames.map((baby, index) => {
        if (baby.sex === "f") {
          return <span className="baby-girl" key={index}> {baby.name} </span>;
        } else {
          return <span className="baby-boy" key={index}> {baby.name} </span>;
        }
      })}
    </p>
  );
}

export default AllBabyNames;
