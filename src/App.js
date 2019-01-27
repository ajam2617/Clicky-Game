import React, { Component } from 'react';
import './App.css';
import Title from "./components/Title/index.js";
import cards from "./cards.js";
import SpaceCard from './components/Cards';
import Score from "./components/Score/index.js";
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

class App extends Component {
  //listening for change of state for these properties
  state = {
    cards,
    clickedId: [],
    highScore: 0,
    score: 0,
    status: ""
  };

  componentDidMount() {
    this.setState({cards: this.shuffleArr(this.state.cards)})
  };

  //shuffle cards when clicked
  shuffleArr = cards => {
    for(let i = cards.length -1; i>0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]]
    }
    return cards;
  }

   highScoreTrack = () => {

    if(this.state.score > this.state.highScore) {
      this.setState({clickedId: [], highScore: this.state.score, score: 0, status: "New top score!" })
    }
  }

    clickTrack = id => {

      let clickedId = this.state.clickedId;

      if(clickedId.includes(id)) {

        this.highScoreTrack();

        this.setState({clickedId: [], score: 0, status: "You clicked the same tile twice! Click again to replay!" });
        return
      }
      else {
        clickedId.push(id)
        this.setState({cards: this.shuffleArr(this.state.cards), score: this.state.score +1, status:"Correct! Keep guessing..."})
  
        if(clickedId.length ===10) {
          this.setState({score: 0, highscore: 12, status:"You Won!", clickedId:[]})
        }
      }
    }
  
  //
  render() {
    return (
      <div>
      <div className="header">
        <Title />
        <Score  status = {this.state.status}
                total = {this.state.score}
                highScore = {this.state.highScore}/>
        </div>
        <div className="wrapper container">
        {this.state.cards.map(card => (
          <SpaceCard
            clickTrack={this.clickTrack}
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
