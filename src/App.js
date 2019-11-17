import React from 'react';
import './App.css';
import Header from './components/header/header';
import bedroom from './assets/bedroom.jpg'

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
          <div>A Luxurious place in the heart of America</div>
          <div className="bedroom-img"><img src={bedroom} /></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
