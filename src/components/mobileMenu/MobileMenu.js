import React from 'react';
import { Link } from "react-scroll";

import './MobileMenu.css';

class MobileMenu extends React.Component {

    render() {
        return(
            <div className="mobile-menu">
                <div className="icon-container">
                    <i className="fas fa-times-circle fa-3x primary-color" onClick={this.props.toggle}></i>
                </div>
                <div>
                    <Link className="mobile-item" to="home" smooth={true} offset={-70}>Home</Link>
                    <Link className="mobile-item" to="about" smooth={true}>About</Link>
                    <Link className="mobile-item" to="food" smooth={true}>Food</Link>
                    <Link className="mobile-item" to="contact" smooth={true} offset={-100}>Contact</Link>
                </div>
            </div>
        );
    }
}

export default MobileMenu;