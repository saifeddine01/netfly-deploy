/**
 * Module Imports
 */
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

/**
 * SVG Imports
 */
/** SVG */

import yarn from './../../../fonts/yarn.svg';
import git from './../../../fonts/git.svg';
import npm from './../../../fonts/npm.svg';
import mysql from './../../../fonts/mysql.svg';
import gulp from './../../../fonts/gulp.svg';
import heroku from './../../../fonts/heroku.svg';


export default class SkillsList4 extends Component {
    render() {
        return (
            <Row componentClass="section" className="TechItems2">
            <Col xs={6} sm={4} md={4} lg={2}>
                <div>
                    <img src={npm} alt="NPM"/>
                 </div>
            </Col>
            <Col xs={6} sm={4} md={4} lg={2}>
                <div>
                    <img src={mysql} alt="Mysql"/>
                 </div>
            </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img src={yarn} alt="yarn"/>
                     </div>
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img className="git" src={git} alt="Git"/>
                    </div>
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img className="gulp" src={gulp} alt="Gulp"/>
                    </div>
                </Col>
                <Col xs={6} sm={4} md={4} lg={2}>
                    <div>
                        <img className="heroku" src={heroku} alt="Heroku"/>
                    </div>
                </Col>
            </Row>
        );
    }
}
