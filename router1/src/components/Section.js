import React, { Component } from 'react';
import Home from './section/Home';
import Blog from './section/Blog';
import Contact from './section/Contact';
import About from './section/About';
import Login  from './section/Login';
import {Route, Switch} from 'react-router-dom';

export class Section extends Component {
    render() {
        return (
           <Section>
               <Switch>
               <Route exact path='/' component={Home} />
               <Route path='/blog' component={Blog} />
               <Route path='/contact' component={Contact} />
               <Route path='/about' component={About} />
               <Route path='/login' component={Login} />
               </Switch>
           </Section>
        )
    }
}

export default Section
