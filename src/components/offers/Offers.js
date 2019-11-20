import React from 'react';
import './Offers.css';

function Offers() {
    
    return (
        <div className="offers">
            <span className="offers-flag">Offers</span>
            <div className="offers-title">Enjoy offers just for You</div>
            <div className="offers-container">
                <div className="offer-item">
                    <div className="offer-img-container">
                        <img src="https://via.placeholder.com/350/340" alt="Weekends discount"/>
                    </div>
                    <div className="offer-title">Up to 30% discount on Weekends</div>
                </div>
                <div className="offer-item">
                    <div className="offer-img-container">
                        <img src="https://via.placeholder.com/350/340" alt="Master Card discount"/>
                    </div>
                    <div className="offer-title">5% discount using Master Card</div>
                </div>
                <div className="offer-item">
                    <div className="offer-img-container">
                        <img src="https://via.placeholder.com/350/340" alt="Members discount"/>
                    </div>
                    <div className="offer-title">20% discount for our Members</div>
                </div>
            </div>
        </div>
    );
}

export default Offers;