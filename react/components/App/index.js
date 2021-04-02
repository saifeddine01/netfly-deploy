import React, { Component } from 'react';
import Navigation from './../Navigation';
import Home from './../Home';
import Footer from './../Footer';

import './style.scss';


export default class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Navigation/>
                <div className="app-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
