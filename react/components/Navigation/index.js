import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import $ from 'jquery';
import { browserHistory, Link } from 'react-router';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';

import './style.scss';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigation : {
                nav01: true,
                nav02: false,
                nav03: false,
                nav04: false,
                nav05: false,
                nav06: false
            }
        };
    }


    selectListItem(e) {
        const event = e || window.event;
        var elClass = event.target.parentElement.classList[0];
        const self = this;
        if(this.refs[elClass]) {
            this.setState({
                navigation:{
                    [elClass]: true
                }
            });

            $('html, body').animate({
                scrollTop: document.getElementById(elClass).offsetTop - 25
            }, 1000);
        }
    }

    componentWillMount() {
        const self = this;
        // var y = document.documentElement.scrollTop;
        //     console.log(y)
        $(window).scroll(function() {
            console.log("hello")
            // var y = window.pageYOffset;
            var y = $(this).scrollTop();
            console.log(y)
            if (y < 1199) {
                if(self.refs.nav01) { //home
                    self.setState({
                        navigation:{
                            nav01: true
                        }
                    });
                }
            } else if(y >= 1199 && y < 3178) { //projects
                if(self.refs.nav02) {
                    self.setState({
                        navigation:{
                            nav02: true
                        }
                    });
                }
            } else if(y >= 3178 && y < 4130) { //skills
                if(self.refs.nav03) {
                    self.setState({
                        navigation:{
                            nav03: true
                        }
                    });
                }
            } else if(y >= 4130 && y < 4585) { //Services
                if(self.refs.nav04) {
                    self.setState({
                        navigation:{
                            nav04: true
                        }
                    });
                }
            } else if(y >= 4585 && y < 9000) { //Contact
                if(self.refs.nav05) {
                    self.setState({
                        navigation:{
                            nav05: true
                        }
                    });
                }
            }
        })
    }

    openInNewTab(url) {
        const win = window.open(url, '_blank');
        win.focus();
    }

    render() {
        var isSelected01 = this.state.navigation.nav01 ? "nav01 nav-li-selected" : "nav01",
            isSelected02 = this.state.navigation.nav02 ? "nav02 nav-li-selected" : "nav02",
            isSelected03 = this.state.navigation.nav03 ? "nav03 nav-li-selected" : "nav03",
            isSelected04 = this.state.navigation.nav04 ? "nav04 nav-li-selected" : "nav04",
            isSelected05 = this.state.navigation.nav05 ? "nav05 nav-li-selected" : "nav05";
        return (
            <Navbar fluid inverse fixedTop collapseOnSelect>
                <div></div>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a className="logo-a">QCCODE</a>
                    </Navbar.Brand>
                    <Navbar.Toggle className="menuButton"/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem className={isSelected01} ref="nav01" onClick={this.selectListItem.bind(this)}>Home</NavItem>
                        <NavItem className={isSelected02} ref="nav02" onClick={this.selectListItem.bind(this)}>Projects</NavItem>
                        <NavItem className={isSelected03} ref="nav03" onClick={this.selectListItem.bind(this)}>Skills</NavItem>
                        <NavItem className={isSelected04} ref="nav04" onClick={this.selectListItem.bind(this)}>Services</NavItem>
                        <NavItem className={isSelected05} ref="nav05" onClick={this.selectListItem.bind(this)}>Contact</NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem href="https://www.github.com" onClick={this.openInNewTab.bind(this, 'https://www.github.com/qcollinscode')}>Github</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
