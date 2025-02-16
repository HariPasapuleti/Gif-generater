import React from 'react';
import Random from './components/Random';
import Tag from './components/Tag';
import './App.css';

const App = () => (
  <div className="background">
    <div className="title-container">
      <h1 className="title">RANDOM GIFS</h1>
    </div>
    <div className="app-container">
      <Random />
      <Tag />
    </div>
  </div>
);

export default App;
