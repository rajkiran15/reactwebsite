import React from 'react';
import css from '../mystyle.css';
import {Link} from 'react-router-dom';

class NavBar extends React.Component{
    render(){
        return(
            <header>
                <nav>
                    <ul>
                        <li><Link to="/" className="navbar">Home</Link></li>
                        <li><Link to="/contact" className="navbar">Contact</Link></li>
                        <li><Link to="/about" className="navbar">About</Link></li>
                        <li><Link to="/location" className="navbar">Location</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}
export default NavBar;