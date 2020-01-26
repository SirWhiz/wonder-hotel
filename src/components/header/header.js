import React, { Component } from 'react';

import { Link } from "react-scroll";
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
            const isTop = window.scrollY < 500;
            if(isTop !== true){
                this.setState({ scrolled: true });
            }else{
                this.setState({ scrolled: false });
            }
        });
    }

    componentWillUnmount(){
        window.removeEventListener('scroll');
    }

    render(){
        return (
            <div className={this.state.scrolled ? 'header scrolled' : 'header'}>
                <header>
                    <div className="header-menu">
                        <Link className="test" to="home" smooth={true} offset={-70}>Home</Link>
                        <Link className="test" to="about" smooth={true}>About</Link>
                        <Link className="test" to="food" smooth={true}>Food</Link>
                        <Link className="test" to="contact" smooth={true} offset={-100}>Contact</Link>
                    </div>
                    <div className="logo">
                        <i className={this.state.scrolled ? 'fas fa-hotel fa-2x main-color' : 'fas fa-hotel fa-2x logo-color'}></i>
                    </div>
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