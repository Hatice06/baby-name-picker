import React from "react";

function AllBabyNames(props) {
  return (
    <p>
      {props.sortedNames.map((baby, index) => {
        return (
          <span className={baby.sex} key={index}>
            {" "}
            {baby.name}{" "}
          </span>
        );
      })}
    </p>
  );
}

export default AllBabyNames;
