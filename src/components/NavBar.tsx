import React from 'react';
import '../scss/navbar.scss';
import logo from '../assets/logo.png';

function NavBar() {
  return (
    <div className="NavBar">
        <ul className="tabs">
            <li className="logo" style={{marginLeft: 10}}>
                <a href="Front.tsx"><img src={logo} width="45px" height="45px" alt="logo" /></a>
            </li>

            <li className="tab"><a href="About.tsx" id="about" className="tab-label">About</a></li>
            <li className="tab"><a href="Water.tsx" id="water" className="tab-label">Water</a></li>
            <li className="tab"><a href="Carbon.tsx" id="carbon" className="tab-label">Carbon</a></li>
            <li className="tab"><a href="Energy.tsx" id="energy" className="tab-label">Energy</a></li>

            <li className="toggle" style={{padding: 5, paddingBottom: 10, marginRight: 10}}><span className="bars"></span></li>
        </ul>
    </div>
  );
}

export default NavBar;