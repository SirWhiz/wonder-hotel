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
                    <div className="offer-content">
                        Are you planning on having a wonderful weekend with us?
                        We will make it even better with up to a 30% discount on the final price.
                    </div>
                    <button>Book Now</button>
                </div>
                <div className="offer-item">
                    <div className="offer-img-container">
                        <img src="https://via.placeholder.com/350/340" alt="Master Card discount"/>
                    </div>
                    <div className="offer-title">5% discount using Master Card</div>
                    <div className="offer-content">
                        Do you have a Master Card credit card? If you use it with us
                        you will be able to enjoy a 5% discount on the final price
                    </div>
                    <button>Book Now</button>
                </div>
                <div className="offer-item">
                    <div className="offer-img-container">
                        <img src="https://via.placeholder.com/350/340" alt="Members discount"/>
                    </div>
                    <div className="offer-title">20% discount for our Members</div>
                    <div className="offer-content">
                        Are you a member of our Wonder Club? If so you can enjoy
                        a 20% discount on the final price for any purchase.
                    </div>
                    <button>Book Now</button>
                </div>
            </div>
        </div>
    );
}

export default Offers;