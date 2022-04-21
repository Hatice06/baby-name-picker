import React from "react";

function FavoriteNames(props) {
  return (
    <div>
      <span>Favorites: </span>
      {props.favoriteNames.map((baby) => (
        <span className={baby.sex} onClick={() => props.removeFavName(baby)}>
          {baby.name}
        </span>
      ))}
    </div>
  );
}

export default FavoriteNames;
