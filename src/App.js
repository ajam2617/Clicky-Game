import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavTabs from "./components/NavTabs";
import GameContainer from "./components/GameContainer";

function App () {
  return (
      <div>
        <NavTabs />
        <GameContainer />
      </div>
    );
}

export default App;
