import React from 'react';
import '../scss/carbon.scss';
import NavBar from './NavBar';

function Carbon() {
  return (
    <div className="Carbon">
      <div className="top">
        <NavBar />
        <div className="centered"><h1>CARBON</h1></div>
      </div>
    </div>
  );
}

export default Carbon;