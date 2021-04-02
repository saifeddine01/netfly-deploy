/**
 * Module Imports
 */
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

/**
 * SVG Imports
 */
/** SVG */

import ubuntu from './../../../fonts/ubuntu.svg';
import webpack from './../../../fonts/webpack.svg';
import terminal from './../../../fonts/terminal.svg';
import wordpress from './../../../fonts/wordpress.svg';
import git from './../../../fonts/git.svg';
import javascript from './../../../fonts/javascript.svg';






export default class SkillsList3 extends Component {
    render() {
        return (
            <Row componentClass="section" className="TechItems2">
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={terminal} alt="Terminal"/>
                     </div>
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={ubuntu} alt="Ubuntu"/>
                     </div>
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={webpack} alt="Webpack"/>
                     </div>
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img className="wordpress" src={wordpress} alt="Wordpress"/>
                    </div>
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img className="git" src={git} alt="Git"/>
                    </div>
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={javascript} alt="Javascript"/>
                     </div>
                </Col>
            </Row>
        );
    }
}
