/**
 * Modules Import
 */
import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';


/**
 * SkillsList Imports
 */
import SkillsList1 from './SkillsLists/SkillsList1';
import SkillsList2 from './SkillsLists/SkillsList2';
import SkillsList3 from './SkillsLists/SkillsList3';
import SkillsList4 from './SkillsLists/SkillsList4';

export default class SkillsSlider extends Component {
    render() {
        return (
            <Carousel indicators={false} controls={false} interval={1500}>
                <Carousel.Item animateIn={true} animateOut={true}>
                    <SkillsList1/>
                </Carousel.Item>
                <Carousel.Item animateIn={true} animateOut={true}>
                    <SkillsList2/>
                </Carousel.Item>
                <Carousel.Item animateIn={true} animateOut={true}>
                    <SkillsList3/>
                </Carousel.Item>
                <Carousel.Item animateIn={true} animateOut={true}>
                    <SkillsList4/>
                </Carousel.Item>
            </Carousel>
        );
    }
}
