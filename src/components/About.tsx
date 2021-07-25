import React from 'react';
import '../scss/about.scss';
import infographic from "../assets/infographic.jpg";
import logo from "../assets/logo.png";
import NavBar from './NavBar';
import Footer from './Footer';

function About() {
  return (
    <div className="About">
      <div className="top">
        <NavBar />
        <div className="centered"><h1>ABOUT</h1></div>
      </div>

      <div className="content">
        
        <div className="grid">
          <div className="gridItem" style={{ flexDirection: 'row' }}>
            <div className="setWidth" style={{ flexShrink: 1 }}>
              <h4>What is Global Warming?</h4>
              <p style={{ flexShrink: 1 }}>Global Warming is a gradual increase in the overall temperature of the earth's atmosphere generally attributed to the greenhouse effect caused by increased levels of carbon dioxide, chlorofluorocarbons, and other pollutants. (Definition provided by Google)</p>
              <br/>
              <p>To some extent, global warming is a natural process that keeps us alive. However, due to pollutants that humans have released into the atmosphere, this has become excessive to the point that it is damaging our environment.</p>
            </div>
          </div>

          <div className="gridItem">
            <img src={infographic} className="infographic" alt="Global Warming Infographic" style={{width: 400, borderRadius: 10}} />
          </div>
        </div>

        <div className="grid">
          <div className="gridItem">
            <img src={logo} alt="Logo" style={{width: 100}} />
          </div>

          <div className="gridItem">
            <div>
              <h4>What is CliMATES?</h4>
              <p>CliMATES is an effort to help change the outcome of this phenomenon by helping users truly understand the impact of each decision they make. They can track their water, carbon, and energy levels to see how much they waste over the course of years and understand how they can make a difference. Become a part of our effort. Become a MATE! </p>
            </div>
          </div>
        </div>

        <br />
      </div>

      <Footer />
    </div>
  );
}

export default About;