import React from 'react';
import '../scss/front.scss';
import NavBar from './NavBar';
import About from './About';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Front() {
  return (
    <Router>
      <div className="Front">
        <NavBar />

        <div className="centered">
          <div>
            <h1>CliMATES</h1>
            <p>MATES Fighting Climate Change</p>

            <Link to="/about">Get Started</Link>
          </div>
        </div>
      </div>

      <Route path="/about" exact component={About} />
    </Router>
  );
}

export default Front;