import React from "react";

function SpaceCard(cards) {
  console.log(cards);
  return (
   
      <div className="img-container">
        <img alt={cards.name} src={cards.image} />

      </div>
    
  );
}


export default SpaceCard;
