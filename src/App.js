import React, { Component } from 'react';
import './App.css';
import Title from "./components/Title/index.js";
import cards from "./cards.js";
import SpaceCard from './components/Cards';
import Score from "./components/Score/index.js";

class App extends Component {
  //listening for change of state for these properties
  state = {
    cards,
    clickedId: [],
    highScore: 0,
    score: 0,
    status: ""
  };

  //shuffle cards when clicked
  shuffleCards = id => {
    let clickedId = this.state.clickedId;

    if(clickedId.includes(id)) {
      this.setState({clickedId: [], highScore: this.state.score, score: 0, status: "Game Over! Click again to play!" });
    }
    else {
      clickedId.push(id)
      this.setState({status:"Correct! Keep guessing..."})

      if(clickedId.length ===12) {
        this.setState({score: 12, highscore: 12, status:"You Won!", clickedId:[]})
      }
      this.setState({cards, clickedId, score: clickedId.length, status:"Great! Keep guessing!"});

      for(let i = cards.length -1; i>0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]]
      }
    }
  }
  //
  render() {
    return (
      <div>
      <div className="header">
        <Title />
        <Score  total = {this.state.score}
                status = {this.state.status}/>
        </div>
        <div className="wrapper container">
        {this.state.cards.map(card => (
          <SpaceCard
            shuffleCards={this.shuffleCards}
            id={card.id}
            image={card.image}
            name={card.name}
            key={card.id}
          />
        ))}
        </div>
      </div>
    );
  }
}

export default App;
