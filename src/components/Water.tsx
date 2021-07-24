import React from 'react';
import '../scss/water.scss';
import NavBar from './NavBar';

function Water() {
  return (
    <div className="Water">
      <div className="top">
        <NavBar />
        <div className="centered"><h1>WATER</h1></div>
      </div>
    </div>
  );
}

export default Water;