import React, { Component } from 'react';
import './App.css';
import Title from "./components/Title/index.js";
import GameContainer from "./components/GameContainer";
import cards from "./cards.js";
import SpaceCard from './components/Cards';

class App extends Component {
  state = {
    cards,
    clickedId: [],
    highScore: 0,
    score: 0,

  };

  //shuffle cards when clicked
  shuffleCards = id => {
    let clickedId = this.state.clickedId;

    if(clickedId.includes(id)) {
      this.setState({clickedId: [], score: 0, status: "Game Over! You lost!" });
    }
    else {
      clickedId.push(id)

      if(clickedId.length ===12) {
        this.setState({score: 12, status:"You Won!", clickedId:[]})
      }
      this.setState({cards, clickedId, score: clickedId.length});

      for(let i = cards.length -1; i>0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]]
      }
    }
  }
  //
  render() {
    return (
      <div className="wrapper">
        <Title />
        {this.state.cards.map(card => (
          <SpaceCard
            id={card.id}
            image={card.image}
            name={card.name}
            key={card.id}
          />
        ))}
      </div>
    );
  }
}

export default App;
