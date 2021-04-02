import React, { Component } from 'react';
import { Grid, Button, ButtonToolbar, Row, Col, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import $ from 'jquery';
import HeroImg from './../HeroImg';
import Footer from './../Footer';
import PrevProjectsWeb from './../PrevProjectsWeb';
import SkillsSlider from './../SkillsSlider';

import './style.scss';

import support from './../../fonts/call-center-worker-with-headset.svg';
import browser from './../../fonts/browser.svg';
import computer from './../../fonts/screen.svg';
import repair from './../../fonts/repairing-browser.svg';
import responsive from './../../fonts/responsive.svg';
import shopping from './../../fonts/shopping-cart.svg';
import smartphone from './../../fonts/smartphone-call.svg';
import price from './../../fonts/label.svg';

import twitter from './../../fonts/twitter.svg';
import linkedIn from './../../fonts/linkedin.svg';
import codepen from './../../fonts/codepen.svg';

import travelingcoders from './../../img/travelingcoders.jpg';
import birdville from './../../img/birdville.jpeg';
import jonesty from './../../img/jonesty.jpg';
import restaurant from './../../img/restaurant.jpg';
import presidents from './../../img/presidents.png';
import databaseadmin from './../../img/databaseadmin.jpg';
import agency from './../../img/agency.jpg';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            para02: {
                lines: 0,
                projects: 0,
                hours: 0,
                years: 0
            }
        };
    }

    render() {

        const webProjects = [{
            app01: {
                title: "Traveling Coders",
                tech: "HTML5, SASS, Javascript, and PHP",
                info: "A travel blog",
                github: "https://github.com/qcollinscode/traveling-coders",
                demo: "https://travelingcoders.herokuapp.com/",
                style: {
                    backgroundImage: 'url(' + travelingcoders + ')',
                    backgroundSize: 'cover',
                    backgroundPosition: 'top!important',
                    backgroundRepeat: 'no-repeat!important',
                }
            },
            app02: {
                title: "Saifeddine Web App",
                tech: "HTML5, SASS, Javascript, MongoDB, Mongoose, EJS, NodeJS, and ExpressJS",
                info: "Wikipedia clone",
                github: "https://github.com/qcollinscode/birdsville-web-app",
                demo: "https://birdville.herokuapp.com/",
                style: {
                    backgroundImage: 'url('+ birdville + ')',
                    backgroundSize: 'cover',
                    backgroundPosition: 'top!important',
                    backgroundRepeat: 'no-repeat!important',
                }
            },
            app03: {
                title: "Jonesty",
                tech: "HTML5, SASS, Javascript, EJS, NodeJS, and ExpressJS",
                info: "An ecommerce app",
                github: "https://github.com/qcollinscode/jonesty-app",
                demo: "https://jonesty.herokuapp.com/",
                style: {
                    backgroundImage: 'url(' + jonesty + ')',
                    backgroundSize: 'cover',
                    backgroundPosition: 'top!important',
                    backgroundRepeat: 'no-repeat!important',
                },
            },
            app04: {
                title: "Restaurant",
                tech: "HTML5, CSS, Javascript, NodeJS, ExpressJS, and EJS",
                info: "Restaurant web application",
                github: "https://github.com/qcollinscode/eucada-restaurant",
                demo: "https://eucada-restaurant.herokuapp.com/",
                style: {
                    backgroundImage: 'url(' + restaurant + ')',
                    backgroundSize: 'cover',
                    backgroundPosition: 'top!important',
                    backgroundRepeat: 'no-repeat!important',
                }
            },
            app05: {
                title: "Agency",
                tech: "HTML5, CSS, Javascript, NodeJS, ExpressJS, and EJS",
                info: "Agency Web Application",
                github: "https://github.com/qcollinscode/eucada-agency",
                demo: "https://eucada-agency.herokuapp.com/",
                style: {
                    backgroundImage: 'url('+ agency + ')',
                    backgroundSize: 'cover',
                    backgroundPosition: 'top!important',
                    backgroundRepeat: 'no-repeat!important',
                }
            },
            app06: {
                title: "Photo Gallery",
                tech: "PHP, SQL, and MySQL",
                info: "Took an HTML5UP template and created a custom backend for it.",
                github: "https://github.com/qcollinscode/photogallery01",
                demo: "https://photogallery01.herokuapp.com/",
                style: {
                    backgroundImage: 'url(' + databaseadmin + ')',
                    backgroundSize: 'cover',
                    backgroundPosition: 'top!important',
                    backgroundRepeat: 'no-repeat!important',
                }
            }
            
        }];

        const browserAgent = navigator.userAgent,
              browserClass = browserAgent.indexOf("Trident") == -1 ? "moz" : "ie"; 

        return (
            <div className="home">
                <section className="home-section" id="nav01">
                <div className="bg-black">
                    <div className="hero-bg"></div>
                </div>
                <HeroImg />
                    <Grid fluid componentClass="section" className="about-section">
                        <p className="about-section-headtext" ref="aboutMe">Hi, my name is saifeddine sassi, and I'm a web developer. When I'm not fishing or gaming, I'm creating cool things on the internet. My passion is making the web a more accessible and faster place for businesses and individuals who need an online presence. I'm available for freelance work. If you'd like to get in touch, you can email me at <a href="mailto:work@qcollinscode.com" target="_top">work@qcollinscode.com</a></p>
                    </Grid>
                    <Grid componentClass="section" id="nav02" ref="webprojects" className="recentProjects-section">
                        <h1>Projects</h1>
                        <PrevProjectsWeb webProjects={webProjects} />
                    </Grid>
                    <div className={browserClass}>
                        <section className="para01-section">
                            <div className="textbox" id="paraTextBox">
                                <p>&#39;&nbsp;Travel as much as you can. As far as you can. As long as you can.<br/>Life’s not meant to be lived in one place. &#39; <br/><span className="arthor">- Traveller</span></p>
                            </div>
                        </section>
                    </div>
                    <Grid fluid componentClass="section" id="nav03" className="tech-section">
                        <h1>Current Skills</h1>
                        <SkillsSlider/>
                    </Grid>
                    <Grid fluid>
                        <Row>
                            <section className="para02-section">
                                <Col xs={12} sm={12} lg={12}>
                                    <Row>
                                        <Col className="accomp-col" xs={12} sm={6} lg={3}>
                                            <div className="accomp-container">
                                                <div className="accomp-num" ref="accompLinesNum">29394</div>
                                                <p className="accomp-txt">+ Lines of Code</p>
                                            </div>
                                        </Col>
                                        <Col className="accomp-col" xs={12} sm={6} lg={3}>
                                            <div className="accomp-container">
                                                <div className="accomp-num" ref="accompProjectsNum">37</div>
                                                <p className="accomp-txt">+ Projects</p>
                                            </div>
                                        </Col>
                                        <Col className="accomp-col" xs={12} sm={6} lg={3}>
                                            <div className="accomp-container">
                                                <div className="accomp-num" ref="accompHoursNum">6948</div>
                                                <p className="accomp-txt">+ Hours Programming</p>
                                            </div>
                                        </Col>
                                        <Col className="accomp-col" xs={12} sm={6} lg={3}>
                                            <div className="accomp-container">
                                                <div className="accomp-num" ref="accompYearsNum">2</div>
                                                <p className="accomp-txt">+ Years Programming</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </section>
                        </Row>
                    </Grid>
                    <Grid fluid className="services-section" id="nav04">
                        <h1>Services</h1>
                        <Row>
                            <Col className="services-col" xs={12} sm={6} lg={3}>
                                <div className="services-container">
                                    <div className="services-pic"><img className="img-responsive" src={support}></img></div>
                                    <div className="services-txt">Friendly Support</div>
                                </div>
                            </Col>
                            <Col className="services-col" xs={12} sm={6} lg={3}>
                                <div className="services-container">
                                    <div className="services-pic"><img className="img-responsive" src={computer}></img></div>
                                    <div className="services-txt">Web App Development</div>
                                </div>
                            </Col>
                            <Col className="services-col" xs={12} sm={6} lg={3}>
                                <div className="services-container">
                                    <div className="services-pic"><img className="img-responsive" src={browser}></img></div>
                                    <div className="services-txt">CMS</div>
                                </div>
                            </Col>
                            <Col className="services-col" xs={12} sm={6} lg={3}>
                                <div className="services-container">
                                    <div className="services-pic"><img className="img-responsive" src={responsive}></img></div>
                                    <div className="services-txt">Responsive Development</div>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                    <Grid fluid className="social-section" id="nav05">
                        <h1>Social</h1>
                        <Row>
                            <Col className="social-col" xs={12} sm={6} lg={4}>
                                <div className="social-container">
                                    <div className="social-pic"><img className="img-responsive" src={twitter}></img></div>
                                    <div className="social-txt">Twitter</div>
                                    <a href="https://twitter.com/qcollinscode" target="_blank"></a>
                                </div>
                            </Col>
                            <Col className="social-col" xs={12} sm={6} lg={4}>
                                <div className="social-container">
                                    <div className="social-pic"><img className="img-responsive" src={linkedIn}></img></div>
                                    <div className="social-txt">LinkedIn</div>
                                    <a href="https://www.linkedin.com/in/qcollinscode" target="_blank"></a>
                                </div>
                            </Col>
                            <Col className="social-col" xs={12} sm={6} lg={4}>
                                <div className="social-container">
                                    <div className="social-pic"><img className="img-responsive" src={codepen}></img></div>
                                    <div className="social-txt">Codepen</div>
                                    <a href="https://codepen.io/qcollinscode" target="_blank"></a>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                    <section className="resume" id="nav06">
                        <Col lg={12} className="algn-ctr">
                            <form method="get" action="Resume.pdf" target="_blank" className="button-container">
                                <p><Button className="regBtn" type="submit">Resume</Button></p>
                            </form>
                        </Col>
                    </section>
                    <Grid fluid componentClass="footer">
                        <Footer />
                    </Grid>
                </section>
            </div>
        );
    }


    componentDidMount() {

        const self = this;
        const accompArr = [self.refs.accompLinesNum, self.refs.accompProjectsNum, self.refs.accompHoursNum, self.refs.accompYearsNum];

        function animateInfoNums() {
            var y = window.pageYOffset;
            if (y > 2960) {
                $(window).off('scroll', animateInfoNums);
                $(accompArr).each(function() {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 4000,
                        easing: 'swing',
                        step: function(now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
            }
        };
        $(window).on('scroll', animateInfoNums)
    }

}
