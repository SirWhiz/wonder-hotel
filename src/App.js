import React from 'react';
import './App.css';

import Header from './components/header/header';
import About from './components/about/About';
import Offers from './components/offers/Offers';
import Food from './components/food/Food';
import Slider from './components/slider/Slider';

function App() {
  return (
    <div className="App">
      <div className="main-pic">
        <Header/>
        <div className="call-to-action">
          <div className="cta-title">The Wonder Resort</div>
        </div>
      </div>
      <About/>
      <Offers/>
      <Food/>
      <Slider/>
    </div>
  );
}

export default App;