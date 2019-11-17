import React from 'react';
import './header.css';

function Header() {
    
    return (
        <div className="header">
            <header>
                <div className="header-menu">
                    <span>Home</span>
                    <span>Rooms</span>
                    <span>About</span>
                    <span>Contact</span>
                </div>
                <div className="logo">LOGO</div>
                <div className="book-button">
                    <button>Book Your Room</button>
                </div>
                <div className="mobile-button">
                    <i className="fas fa-bars fa-2x clickable"></i>
                </div>
            </header>
        </div>
    );
}

export default Header;