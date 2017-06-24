import React, { Component } from 'react';
//import logo from './logo.svg';
import HomePage from './pages/home-page';
import AboutPage from './pages/about-page';
import WorkPage from './pages/work-page';
import './App.css';
import { Route, Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (

        <div>
            <header>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>

            </header>

            <main>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/work" component={WorkPage} />

            </main>
        </div>

    );
  }
}

export default App;
