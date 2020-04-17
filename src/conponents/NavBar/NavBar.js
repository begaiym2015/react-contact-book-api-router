import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div className="nav-bar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/add">Add</Link></li>
                    <li><Link to="/edit">Edit</Link></li>
                </ul>
                
            </div>
        );
    }
}

export default NavBar;