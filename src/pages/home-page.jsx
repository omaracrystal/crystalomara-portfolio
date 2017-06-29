import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import logo from './logo.svg';

const Home = props => (

    <div className="home-page-container">


        <div className="globe globe-gradient fixed-center"></div>
        <div className="globe globe-black fixed-center"></div>


        <div className="globe fixed-center content-wrapper">

            <Link to="/about" id="menu-about-a" className="menu-a white-text">
                about
            </Link>

            <div className="group">
                <Link to="/" className="title-name white-text">
                    <h1>CRYSTAL
                    <button className="omara"></button>
                        'MARA</h1>
                </Link>
                <hr/>
                <h2 className="title-job">
                    front-end developer | UX/UI
                </h2>
            </div>

            <Link to="/work" id="menu-work-a" className="menu-a white-text">
                work
            </Link>
        </div>

    </div>

)

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/about-us')
}, dispatch)

export default connect(
    null,
    mapDispatchToProps
)(Home)