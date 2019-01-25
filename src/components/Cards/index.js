import React from "react";

function SpaceCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img src={props.image} />
      </div>
    </div>
  );
}


export default SpaceCard;
