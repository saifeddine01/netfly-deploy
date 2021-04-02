/**
 * Module Imports
 */
import React, { Component } from 'react';
import { Button, Row, Col } from 'react-bootstrap';

import './style.scss';
/**
 * Images Imports
 */
import projPic2 from './../../img/travelingcoders.jpg';

/**
 * Component Imports
 */


export default class PrevProjects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "webProjects": props
        }
    }

    renderCardInfo() {
        var arr = [];
        const obj = this.state.webProjects.webProjects[0],
              len = Object.keys(obj).length,
              browser = navigator.userAgent,
              browserClass = browser.indexOf("Trident") == -1 ? "moz" : "ie"; 
        for(var i = 0; i < len; i++) {
            let objKey = Object.keys(obj)[i];
            arr.push(
                <Col key={i} xs={12} md={4} lg={4}>
                    <div className={browserClass}>
                        <section className="card-container" ref="card-container">
                            <div id="card">
                                <figure href="#" className="figure front" style={obj[objKey].style}>
                                </figure>
                                <figure className="figure back">
                                    <h2 className="tp">{obj[objKey].title}</h2>
                                    <h4 className="tp">{obj[objKey].tech}</h4>
                                    <p className="tp">{obj[objKey].info}</p>
                                    <p className="tp"><Button className="btn1" href={obj[objKey].github} target="_blank">Github&nbsp;<i className="fa fa-github" style={{fontSize:'1.2em'}}></i></Button></p>
                                    <p className="tp"><Button className="btn2" href={obj[objKey].demo} target="_blank">Demo&nbsp;<i className="fa fa-desktop" style={{fontSize:'1em'}}></i></Button></p>
                                </figure>
                            </div>
                        </section>
                    </div>
                </Col>
            );
        }

        return arr;
    }

    render() {
        return (
            <Row componentClass="section" ref="webprojects1">
                {this.renderCardInfo()}
            </Row>
        );
    }
}
