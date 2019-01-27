import React from "react";

const Score = props => (
    <div className="container-fluid">
        <ul className = "nav nav-pills nav justified">
      <li className="nav-item">
      Click on a tile to earn points, but only click once!
      </li>
      <li className= "nav-item">
        Score: {props.total}  High Score: {props.highScore}
      </li>
      </ul>
      <h3 className="satus">{props.status}</h3>
    </div>
)

export default Score;