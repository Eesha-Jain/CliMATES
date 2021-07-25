import React from 'react';
import '../scss/carbon.scss';
import Footer from './Footer';
import NavBar from './NavBar';

function Carbon() {
  return (
    <div className="Carbon">
      <div className="top">
        <NavBar />
        <div className="centered"><h1>CARBON</h1></div>
      </div>

      <div className="content">
        
      </div>

      <Footer />
    </div>
  );
}

export default Carbon;