import React, { useState } from 'react';
import '../scss/energy.scss';
import NavBar from './NavBar';

import CanvasJSReact from './canvasjs.react';
import Footer from './Footer';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Energy() {
  let [joules, setJoules] = useState(0);
  let [one, setOne] = useState(0);
  let [two, setTwo] = useState(0);
  let [three, setThree] = useState(0);
  let [four, setFour] = useState(0);
  let [five, setFive] = useState(0);
  let [six, setSix] = useState(0);
  let [seven, setSeven] = useState(0);
  let [eight, setEight] = useState(0);
  let [nine, setNine] = useState(0);
  let [ten, setTen] = useState(0);
  let [eleven, setEleven] = useState(0);
  let [tweleve, setTweleve] = useState(0);
  let [thirteen, setThirteen] = useState(0);
  let [fourteen, setFourteen] = useState(0);
  let [fifteen, setFifteen] = useState(0);
  let [sixteen, setSixteen] = useState(0);

  let num = 406;

  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2",
    title:{
      text: "Energy Usage Comparison"
    },
    axisY: {
      title: "Watts",
      suffix: "W"
    },
    axisX: {
      title: "Years",
      prefix: "",
      interval: 1
    },
    data: [{type: "line", toolTipContent: "YOUR PATH: {x} yr. - {y} gal.", dataPoints: [
        { x: 1, y: joules * 52 },
        { x: 2, y: joules * 52 * 2 },
        { x: 3, y: joules * 52 * 3 },
        { x: 4, y: joules * 52 * 4 },
        { x: 5, y: joules * 52 * 5 },
        { x: 6, y: joules * 52 * 6 },
        { x: 7, y: joules * 52 * 7 },
        { x: 8, y: joules * 52 * 8 },
        { x: 9, y: joules * 52 * 9 },
        { x: 10, y: joules * 52 * 10 },
        { x: 11, y: joules * 52 * 11 },
        { x: 12, y: joules * 52 * 12 },
        { x: 13, y: joules * 52 * 13 },
        { x: 14, y: joules * 52 * 14 },
        { x: 15, y: joules * 52 * 15 },
        { x: 16, y: joules * 52 * 16 },
        { x: 17, y: joules * 52 * 17 },
        { x: 18, y: joules * 52 * 18 },
        { x: 19, y: joules * 52 * 19 },
        { x: 20, y: joules * 52 * 20 }
      ]
    }, {type: "line", toolTipContent: "SUPPOSED PATH: {x} yr. - {y} gal.", dataPoints: [
      { x: 1, y: num * 52},
      { x: 2, y: num * 52 * 2 },
      { x: 3, y: num * 52 * 3 },
      { x: 4, y: num * 52 * 4 },
      { x: 5, y: num * 52 * 5 },
      { x: 6, y: num * 52 * 6 },
      { x: 7, y: num * 52 * 7 },
      { x: 8, y: num * 52 * 8 },
      { x: 9, y: num * 52 * 9 },
      { x: 10, y: num * 52 * 10 },
      { x: 11, y: num * 52 * 11 },
      { x: 12, y: num * 52 * 12 },
      { x: 13, y: num * 52 * 13 },
      { x: 14, y: num * 52 * 14 },
      { x: 15, y: num * 52 * 15 },
      { x: 16, y: num * 52 * 16 },
      { x: 17, y: num * 52 * 17 },
      { x: 18, y: num * 52 * 18 },
      { x: 19, y: num * 52 * 19 },
      { x: 20, y: num * 52 * 20 }
    ]
  }]
  }

  function changeJoules() {
    setJoules(Number(one) * 225 + Number(three) * 2300 + Number(four) * 3000 + Number(five) * 1800 + Number(six) * 1200 + (Number(seven) / 2.35) * 24 * 1000 + Number(eight) * 234 + Number(nine) * 100 + Number(ten) * 200 + Number(eleven) * 100 + Number(tweleve) * Number(two) * 10 + Number(thirteen) * 500 + Number(fourteen) * 4000 + Number(fifteen));
  }

  function submitted(event: any) {
    event.preventDefault();
    changeJoules();
  }

  const onChangeOne = (event: any) => { setOne(event.target.value); changeJoules(); };
  const onChangeTwo = (event: any) => { setTwo(event.target.value); changeJoules(); };
  const onChangeThree = (event: any) => { setThree(event.target.value); changeJoules(); };
  const onChangeFour = (event: any) => { setFour(event.target.value); changeJoules(); };
  const onChangeFive = (event: any) => { setFive(event.target.value); changeJoules(); };
  const onChangeSix = (event: any) => { setSix(event.target.value); changeJoules(); };
  const onChangeSeven = (event: any) => { setSeven(event.target.value); changeJoules(); };
  const onChangeEight = (event: any) => { setEight(event.target.value); changeJoules(); };
  const onChangeNine = (event: any) => { setNine(event.target.value); changeJoules(); };
  const onChangeTen = (event: any) => { setTen(event.target.value); changeJoules(); };
  const onChangeEleven = (event: any) => { setEleven(event.target.value); changeJoules(); };
  const onChangeTweleve = (event: any) => { setTweleve(event.target.value); changeJoules(); };
  const onChangeThirteen = (event: any) => { setThirteen(event.target.value); changeJoules(); };
  const onChangeFourteen = (event: any) => { setFourteen(event.target.value); changeJoules(); };
  const onChangeFifteen = (event: any) => { setFifteen(event.target.value); changeJoules(); };
  const onChangeSixteen = (event: any) => { setSixteen(event.target.value); changeJoules(); };

  return (
    <div className="Energy">
      <div className="top">
        <NavBar />
        <div className="centered"><h1>ENERGY</h1></div>
      </div>

      <br />

      <div className="content">
        <div className="grid">
          <div className="gridItem">
            <div className="form slickBox">
              <h4>Energy Weekly </h4>

              <form>
                <label><i className="fas fa-hamburger"></i>How many hours is your refrigerator turned on</label>
                <input type="number" min="0" value={one} onChange={onChangeOne} />
                <br />

                <label><i className="fas fa-hamburger"></i>How many hours is your oven turned on</label>
                <input type="number" min="0" value={three} onChange={onChangeThree} />
                <br />

                <label><i className="fas fa-hamburger"></i>How many hours is your stovetop turned on</label>
                <input type="number" min="0" value={four} onChange={onChangeFour} />
                <br />

                <label><i className="fas fa-hamburger"></i>How many hours is your dishwasher turned on</label>
                <input type="number" min="0" value={five} onChange={onChangeFive} />
                <br />

                <label><i className="fas fa-hamburger"></i>How many hours is your microwave turned on</label>
                <input type="number" min="0" max="100" value={six} onChange={onChangeSix} />
                <br />

                <label><i className="fas fa-house-user"></i>How much do you spend on heating + cooling</label>
                <input type="number" min="0" value={seven} onChange={onChangeSeven} />
                <br />

                <label><i className="fas fa-tv"></i>How many hours do you spend on the TV</label>
                <input type="number" min="0" value={eight} onChange={onChangeEight} />
                <br />

                <label><i className="fas fa-tv"></i>How many hours do you spend on a gaming console</label>
                <input type="number" min="0" value={nine} onChange={onChangeNine} />
                <br />

                <label><i className="fas fa-tv"></i>How many hours do you spend on the home computer</label>
                <input type="number" min="0" value={ten} onChange={onChangeTen} />
                <br />

                <label><i className="fas fa-tv"></i>How many hours do you spend on a speaking system</label>
                <input type="number" min="0" value={eleven} onChange={onChangeEleven} />
                <br />

                <label><i className="fas fa-swimming-pool"></i>How many watts of energy do you use outside</label>
                <input type="number" min="0" value={tweleve} onChange={onChangeTweleve} />
                <br />

                <label><i className="fas fa-bolt"></i>How many hours do you turn on your ceiling lights</label>
                <input type="number" min="0" value={thirteen} onChange={onChangeThirteen} />
                <br />

                <label><i className="fas fa-bolt"></i>~How many lights do you turn on during these hours?</label>
                <input type="number" min="0" value={two} onChange={onChangeTwo} />
                <br />

                <label><i className="fas fa-bolt"></i>How many hours do you turn on your washer</label>
                <input type="number" min="0" value={fourteen} onChange={onChangeFourteen} />
                <br />

                <label><i className="fas fa-bolt"></i>How many hours do you turn on your dryer</label>
                <input type="number" min="0" value={fifteen} onChange={onChangeFifteen} />
                <br />

                <label><i className="fas fa-question"></i>How many watts of energy do you use elsewhere</label>
                <input type="number" min="0" value={sixteen} onChange={onChangeSixteen} />
                <br />

                <button onClick={submitted}>Submit</button>
              </form>
            </div>
          </div>

          <div className="gridItem">
            <h4>How Much You Spend</h4>
            <div className="grid">
              <div className="gridItem slickBox"> You use {joules} weekly </div>
              <div className="gridItem slickBox"> An average person uses ~{num} watts monthly </div>
            </div>

            <br />

            <div className="slickBox">Watts Wasted: {joules - num}</div>
            <br />
            <div className="slickBox">
              <CanvasJSChart options = {options}
                  /* onRef = {ref => this.chart = ref} */
              />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Energy;