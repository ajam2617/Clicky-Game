import React from "react";
import "./style.css";

const SpaceCard = cards => (

  <div className="card">
  <div className="img-container">
  <img alt={cards.name} src={cards.image} id={cards.id} height="170" width= "180" onClick={() => cards.shuffleCards(cards.id)} />
  </div>
</div>



)
export default SpaceCard;
