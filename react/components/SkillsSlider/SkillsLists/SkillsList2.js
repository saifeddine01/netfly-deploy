/**
 * Module Imports
 */
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

/**
 * SVG Imports
 */
/** SVG */
import jekyll from './../../../fonts/jekyll.svg';
import babel from './../../../fonts/babel.svg';
import github from './../../../fonts/github.svg';
import atom from './../../../fonts/atom.svg';
import jquery from './../../../fonts/jquery.svg';
import sass from './../../../fonts/sass.svg';


export default class SkillsList2 extends Component {
    render() {
        return (
            <Row componentClass="section" className="TechItems2">
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={jekyll} alt="Jekyll"/>
                     </div>
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={babel} alt="Babel"/>
                     </div>
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img className="github" src={github} alt="Github"/>
                     </div>
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={atom} alt="Atom"/>
                     </div>
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img className="jquery" src={jquery} alt="JQuery"/>
                     </div>
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={sass} alt="Sass"/>
                    </div>
                </Col>
            </Row>
        );
    }
}
