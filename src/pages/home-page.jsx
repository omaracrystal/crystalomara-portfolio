import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import logo from './logo.svg';

const Home = props => (

    <div id="home" className="home">

        <div className="globe fixed-center content-wrapper">

            <Link to="/about" id="menu-about-a" className="menu-a white-text">
                about
            </Link>

            <div className="group">
                <Link to="/" className="title-name white-text">
                    CRYSTAL
                    <button className="omara"></button>
                    'MARA
                </Link>
                <hr/>
                <div className="title-job">
                    front-end developer | UX/UI
                </div>
            </div>

            <Link to="/work" id="menu-work-a" className="menu-a white-text">
                work
            </Link>
        </div>

        <div className="globe globe-gradient fixed-center"></div>
        <div className="globe globe-black fixed-center"></div>

    </div>

)

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/about-us')
}, dispatch)

export default connect(
    null,
    mapDispatchToProps
)(Home)