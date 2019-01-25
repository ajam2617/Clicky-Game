import React, { Component } from 'react';
import './App.css';
import NavTabs from "./components/NavTabs";
import GameContainer from "./components/GameContainer";
import cards from "./cards.json"
import Wrapper from "./components/Wrapper/index";
import Title from "./components/Title/index";
import SpaceCard from './components/Cards';

class App extends Component {
  state = {
    cards
  };
  render() {

  }
  render() {
    return (
      <Wrapper>
        <Title>Image Shuffle</Title>
        {this.state.cards.map(cards => (
          <SpaceCard
            id={cards.id}
            image={cards.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
