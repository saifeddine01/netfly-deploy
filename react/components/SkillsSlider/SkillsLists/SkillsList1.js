/**
 * Module Imports
 */
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

/**
 * SVG Imports
 */
/** SVG */
import react from './../../../fonts/react.svg';
import nodejs from './../../../fonts/nodejs.svg';
import express from './../../../fonts/expressjs.svg';
import mongodb from './../../../fonts/mongodb.svg';
import php from './../../../fonts/php.svg';
import bootstrap from './../../../fonts/bootstrap.svg';

export default class SkillsList1 extends Component {
    render() {
        return (
            <Row componentClass="section">
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={react} alt="ReactJS"/>
                     </div>
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={nodejs} alt="NodeJS"/>
                     </div>
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img className="expressjs" src={express} alt="ExpressJS"/>
                     </div>
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img className="mongodb" src={mongodb} alt="MongoDB"/>
                     </div>
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={php} alt="PHP"/>
                     </div>
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={bootstrap} alt="Bootstrap"/>
                     </div>
                </Col>
            </Row>
        );
    }
}
