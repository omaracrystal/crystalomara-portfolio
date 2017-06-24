import React from 'react'
import { Link } from 'react-router-dom';
import aboutPic from '../images/about-pic.jpg';

export default () => (
    <div className="work fixed-center">

        <Link to="/" className="title-name white-text">
            CRYSTAL
            <button className="omara"></button>
            'MARA
        </Link>

        <div className="work-header-wrapper">
            <a href="/work" id="menu-work-link" className="menu-link white-text">
                work
            </a>
            <div className="work-header-title">
                DEVELOPMENT
            </div>
        </div>

        <div className="work-project-title">
            gschool trivia
            <i className="fa fa-github"/>
            <i className="fa fa-link"/>
        </div>

        <div className="globe">
            <div className="content-wrapper fixed-center">
                <div className="work-project-text">
                    Created in 4 days, this is my first project with Galvanize.
                    It's a fun trivia game app that keeps score and allows users to add new trivia questions!

                    <div className="work-project-info-wrapper">
                        <ul className="technologies-list">
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>JavaScript</li>
                            <li>jQuery</li>
                            <li>NodeJs</li>
                            <li>Express</li>
                            <li>Swig</li>
                            <li>Gulp</li>
                        </ul>

                        <div className="work-project-snapshot-wrapper">
                            <img className="about-pic" src={aboutPic}/>
                            <i className="fa fa-expand"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div className="globe globe-gradient fixed-center"></div>
        <div className="globe globe-black fixed-center"></div>

        <i className="fa fa-angle-double-down work-scroll"/>

        <Link to="/about" id="menu-about-link" className="menu-link white-text">
            about
        </Link>

        <div className="contact-wrapper">
            <i className="fa fa-linkedin"/>
            <i className="fa fa-envelope"/>
            <i className="fa fa-github"/>
        </div>
    </div>
)
