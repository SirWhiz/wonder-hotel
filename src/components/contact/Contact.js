import React from 'react';

import './Contact.css';

function Contact () {
    return (
        <div className="contact-container">
            <div className="contact-text">
                <span className="contact-section">Contact us</span>
                <div className="food-title">For Bookings or Queries?</div>
            </div>
            <div className="contact-info">
                <div>Call us 24/7, it's free of charge:</div>
                <div className="highlited">+34 928 35 46 81</div>
            </div>
            <div className="contact-info">
                <div>Send us an email:</div>
                <div className="highlited">contact@wonder-hotel.com</div>
            </div>
        </div>
    );
}

export default Contact;