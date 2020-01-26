import React from 'react';
import './Food.css';

import fish from '../../assets/fish.jpg';
import meat from '../../assets/meat.jpg';

function Food() {
    return (
      <div className="food">
        <div className="food-row">
            <div className="food-images">
                <div className="food-img-container"><img src={fish} alt="fish meal" /></div>
                <div className="food-img-container"><img src={meat} alt="meat meal" /></div>
            </div>
            <div className="food-text">
                <span className="food-section">Delicious food</span>
                <div className="food-title">Fresh and Delicious food</div>
                <div className="food-big-text">
                    Suscipit libero pretium nullam potenti. Interdum, blandit phasellus
                    consectetuer dolor ornare dapibus enim ut tincidunt rhoncus tellus 
                    sollicitudin pede nam maecenas, dolor sem. Neque sollicitudin enim. 
                    Dapibus lorem feugiat facilisi faucibus et. Rhoncus.
                </div>
            </div>
        </div>
      </div>
    );
  }
  
export default Food;