import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import "./style.scss";

export default class Footer extends Component {
    render() {
        return (
                <Row>
                    <div className="footer">
                        <Row className="footer-header">
                            <Col sm={12} lg={12} className="footer-header-txt-container">
                                <div className="email"><h1>saifeddine.sassi@esprit.tn</h1></div>
                            </Col>
                        </Row>
                        <Row className="footer-footer">
                            <p>&copy; 2017 Q Collins. All rights reserved.</p>
                        </Row>
                    </div>
                </Row>
        );
    }
}
