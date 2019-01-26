import React from "react";

const Title = (props) =>(
  <div className="banner">
  <h1 className="text-center">Galaxy Memory Game!</h1>
      <ul className = "nav nav-pills nav justified">
      <li className="nav-item">
      Click on a tile to earn points, but only click once!
      </li>
      <li className= "nav-item">
        Score: {props.score}  High Score: {props.highScore}
      </li>

      </ul>
  </div>
)


export default Title;


 