import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import $ from 'jquery';

import './style.scss';

export default class HeroImg extends React.Component {

    onButtonClick(e) {
        $('html, body').animate({
            scrollTop: $(".about-section").offset().top - 25
        }, 1000);
    }

    render() {
        return (
            <Jumbotron className="heroImg">
                <div className="heroImg-text-container" ref="heroImgContainer">
                    <h1> Saifeddine Sassi </h1>
                    <p>Web Developer</p>
                    <p><Button className="regBtn" onClick={this.onButtonClick.bind(this)}>Learn More</Button></p>
                </div>
            </Jumbotron>
        );
    }
    componentDidMount() {
        const self = this;
        $(this.refs.heroImgContainer).css({opacity: 0});
        setTimeout(() => {
            $(self.refs.heroImgContainer).animate({
                opacity: 1
            }, 1100);
        }, 1000);
    }
}
