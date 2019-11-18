import React from 'react';
import './App.css';

import Header from './components/header/header';
import About from './components/about/About';

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
    </div>
  );
}

export default App;
