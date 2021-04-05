import React, { Component } from 'react';
import Logo from './header/Logo';
import Nav from './header/Nav';

export class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <Logo/>
                    <Nav />
                </header>
            </div>
        )
    }
}

export default Header
