import React from 'react';
import './App.css';
import Header from './components/header/header';
import bedroom from './assets/bedroom.jpg';
import bedroomBed from './assets/bedroom-bed.jpg';

function App() {
  return (
    <div className="App">
      <div className="main-pic">
        <Header/>
        <div className="call-to-action">
          <div className="cta-title">The Wonder Resort</div>
        </div>
      </div>
      <div className="about">
        <div className="about-row">
          <div className="about-text">
            <span className="section-flag">About Us</span>
            <span className="big-title">A Luxurious place in the heart of America</span>
          </div>
          <div className="about-pics">
            <div className="bedroom-img"><img src={bedroom} alt="bedroom" /></div>
            <div className="bedroom-img"><img src={bedroomBed} alt="bedroom bed"/></div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
