import React, { Component } from 'react';
import './App.css';
import NavTabs from "./components/NavTabs";
import GameContainer from "./components/GameContainer";
import cards from "./cards.js";
// import Wrapper from "./components/Wrapper/index";
// import Title from "./components/Title/index";
import SpaceCard from './components/Cards';

class App extends Component {
  state = {
    cards
  };
  render() {
    return (
      <div className="container-fluid">
        <h1>Image Shuffle</h1>

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
