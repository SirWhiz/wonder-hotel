import React from 'react';
import AwesomeSlider from 'react-awesome-slider';

import 'react-awesome-slider/dist/styles.css';
import './Slider.css';

import wine from '../../assets/wine.jpg';
import pool from '../../assets/pool.jpg';
import bed from '../../assets/woman-bed.jpg';

function Slider () {
    return (
        <div className="slider-container">
            <AwesomeSlider className="aws-btn">
                <div data-src={wine} />
                <div data-src={pool} />
                <div data-src={bed} />
            </AwesomeSlider>
        </div>
    );
}

export default Slider;