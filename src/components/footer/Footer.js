import React from 'react';

import './Footer.css';

function Footer () {

    let currentYear = new Date().getFullYear();

    return (
        <div className="footer-container">
            <div className="col-container">
                <div className="footer-item">
                    <div className="title">Address</div>
                    <div className="content">
                        120, Main road, Maine,
                        New Yor City USA
                    </div>
                </div>
                <div className="footer-item">
                    <div className="title">Contact</div>
                    <div className="content">
                        +34 928 35 46 81<br/>contact@wonder-hotel.com
                    </div>
                </div>
                <div className="footer-item">
                    <div className="title">Navigation</div>
                    <div className="content">
                        <span className="footer-nav">Home</span>
                        <span className="footer-nav">Rooms</span>
                        <span className="footer-nav">About</span>
                        <span className="footer-nav">Contact</span>
                    </div>
                </div>
                <div className="footer-item">
                    <div className="title">Newsletter</div>
                    <div className="content">
                        <input type="text" placeholder="Enter your email"></input>
                        <button>Send</button>
                    </div>
                </div>
            </div>
            <div className="copy">
                Copyright &copy; {currentYear} | Template made by <a href="https://github.com/SirWhiz" rel="noopener noreferrer" target="_blank">Alvaro</a>
            </div>
        </div>
    );
}

export default Footer;