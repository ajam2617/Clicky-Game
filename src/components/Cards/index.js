import React from "react";

const SpaceCard = cards => (

  <div className="card" onClick={() => cards.click(cards.id)} >
  <img alt={cards.name} src={cards.image} />
</div>



)
export default SpaceCard;
