import React, { Component } from 'react';
import './header.css';

class Header extends Component {

    constructor(){
        super();
        this.state = {
            scrolled: false
        };
    }

    componentDidMount(){
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 180;
            if(isTop !== true){
                this.setState({ scrolled: true });
            }else{
                this.setState({ scrolled: false });
            }
        });
    }

    render(){
        return (
            <div className={this.state.scrolled ? 'header scrolled' : 'header'}>
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

}

export default Header;