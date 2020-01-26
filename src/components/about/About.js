import React from 'react';
import './About.css';

import bedroom from '../../assets/bedroom.jpg';
import bedroomBed from '../../assets/bedroom-bed.jpg';

function About() {
    return(
        <div className="about" id="about">
            <div className="about-row">
                <div className="about-text">
                    <span className="section-flag">About Us</span>
                    <span className="big-title">A Luxurious place in the heart of America</span>
                    <div className="big-text-about">
                        Suscipit libero pretium nullam potenti. Interdum, blandit phasellus 
                        consectetuer dolor ornare dapibus enim ut tincidunt rhoncus tellus 
                        sollicitudin pede nam maecenas, dolor sem. Neque sollicitudin enim. 
                        Dapibus lorem feugiat facilisi faucibus et. Rhoncus.
                    </div>
                </div>
                <div className="about-pics">
                    <div className="bedroom-img"><img src={bedroom} alt="bedroom" /></div>
                    <div className="bedroom-img"><img src={bedroomBed} alt="bedroom bed"/></div>
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default About;