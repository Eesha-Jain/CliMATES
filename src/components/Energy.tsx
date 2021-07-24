import React from 'react';
import '../scss/energy.scss';
import NavBar from './NavBar';

function Energy() {
  return (
    <div className="Energy">
      <div className="top">
        <NavBar />
        <div className="centered"><h1>ENERGY</h1></div>
      </div>
    </div>
  );
}

export default Energy;