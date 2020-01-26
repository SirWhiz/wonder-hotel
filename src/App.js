import React from 'react';
import './App.css';

import Header from './components/header/header';
import About from './components/about/About';
import Offers from './components/offers/Offers';
import Food from './components/food/Food';
import Slider from './components/slider/Slider';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="main-pic" id="home">
        <Header/>
        <div className="call-to-action">
          <div className="cta-title">The Wonder Resort</div>
        </div>
      </div>
      <About/>
      <Offers/>
      <Food/>
      <Slider/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;