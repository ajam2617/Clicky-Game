import React from "react";

const Score = props => (
    <div className="container-fluid">
        <ul className = "nav nav-pills nav justified">
      <li className="itemLeft">
      Click on a tile to earn points, but only click once!
      </li>
      <li className="itemCenter">
      {props.status}
      </li>
      <li className= "itemRight">
        Score: {props.total}  
      </li>
      <li className="itemRight">
      High Score: {props.highScore}
      </li>
      </ul>
    </div>
)

export default Score;