import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class Nav extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/login'>Login / Register</Link></li>
                </ul>
            </div>
        )
    }
}

export default Nav;
