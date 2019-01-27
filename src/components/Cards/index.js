import React from "react";
import "./style.css";

const SpaceCard = cards => (

  <div className="card">
  <div className="img-container">
  <img alt={cards.name} src={cards.image} height="170" width= "180" />
  </div>
</div>



)
export default SpaceCard;
