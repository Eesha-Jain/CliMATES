import React, { useState } from 'react';
import '../scss/carbon.scss';
import NavBar from './NavBar';

import CanvasJSReact from './canvasjs.react';
import Footer from './Footer';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Carbon() {
  let [pounds, setPounds] = useState(0);
  let [one, setOne] = useState(0);
  let [two, setTwo] = useState(0);
  let [three, setThree] = useState(0);
  let [four, setFour] = useState(0);
  let [five, setFive] = useState(0);
  let [six, setSix] = useState(0);
  let [seven, setSeven] = useState(0);
  let [eight, setEight] = useState(0);
  let [nine, setNine] = useState(0);

  let num = 56520;

  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2",
    title:{
      text: "Carbon Footprint Comparison"
    },
    axisY: {
      title: "Pounds",
      suffix: "lb"
    },
    axisX: {
      title: "Years",
      prefix: "",
      interval: 1
    },
    data: [{type: "line", toolTipContent: "YOUR PATH: {x} yr. - {y} gal.", dataPoints: [
        { x: 1, y: pounds * 12 },
        { x: 2, y: pounds * 12 * 2 },
        { x: 3, y: pounds * 12 * 3 },
        { x: 4, y: pounds * 12 * 4 },
        { x: 5, y: pounds * 12 * 5 },
        { x: 6, y: pounds * 12 * 6 },
        { x: 7, y: pounds * 12 * 7 },
        { x: 8, y: pounds * 12 * 8 },
        { x: 9, y: pounds * 12 * 9 },
        { x: 10, y: pounds * 12 * 10 },
        { x: 11, y: pounds * 12 * 11 },
        { x: 12, y: pounds * 12 * 12 },
        { x: 13, y: pounds * 12 * 13 },
        { x: 14, y: pounds * 12 * 14 },
        { x: 15, y: pounds * 12 * 15 },
        { x: 16, y: pounds * 12 * 16 },
        { x: 17, y: pounds * 12 * 17 },
        { x: 18, y: pounds * 12 * 18 },
        { x: 19, y: pounds * 12 * 19 },
        { x: 20, y: pounds * 12 * 20 }
      ]
    }, {type: "line", toolTipContent: "SUPPOSED PATH: {x} yr. - {y} gal.", dataPoints: [
      { x: 1, y: num * 12},
      { x: 2, y: num * 12 * 2 },
      { x: 3, y: num * 12 * 3 },
      { x: 4, y: num * 12 * 4 },
      { x: 5, y: num * 12 * 5 },
      { x: 6, y: num * 12 * 6 },
      { x: 7, y: num * 12 * 7 },
      { x: 8, y: num * 12 * 8 },
      { x: 9, y: num * 12 * 9 },
      { x: 10, y: num * 12 * 10 },
      { x: 11, y: num * 12 * 11 },
      { x: 12, y: num * 12 * 12 },
      { x: 13, y: num * 12 * 13 },
      { x: 14, y: num * 12 * 14 },
      { x: 15, y: num * 12 * 15 },
      { x: 16, y: num * 12 * 16 },
      { x: 17, y: num * 12 * 17 },
      { x: 18, y: num * 12 * 18 },
      { x: 19, y: num * 12 * 19 },
      { x: 20, y: num * 12 * 20 }
    ]
  }]
  }

  function changePounds() {
    setPounds((Number(one) / 9) * 5.5 + (Number(two) / 9) * 5.5 + (Number(three) / 9) * 5.5 + (Number(four) / 9) * 5.5 + (Number(five) * 1 - Number(six)) * 9.2 + (Number(seven) / 2.35) * 24 + Number(eight) * 0.007 + Number(nine));
  }

  function submitted(event: any) {
    event.preventDefault();
    changePounds();
  }

  const onChangeOne = (event: any) => { setOne(event.target.value); changePounds(); };
  const onChangeTwo = (event: any) => { setTwo(event.target.value); changePounds(); };
  const onChangeThree = (event: any) => { setThree(event.target.value); changePounds(); };
  const onChangeFour = (event: any) => { setFour(event.target.value); changePounds(); };
  const onChangeFive = (event: any) => { setFive(event.target.value); changePounds(); };
  const onChangeSix = (event: any) => { setSix(event.target.value); changePounds(); };
  const onChangeSeven = (event: any) => { setSeven(event.target.value); changePounds(); };
  const onChangeEight = (event: any) => { setEight(event.target.value); changePounds(); };
  const onChangeNine = (event: any) => { setNine(event.target.value); changePounds(); };

  return (
    <div className="Water">
      <div className="top">
        <NavBar />
        <div className="centered"><h1>CARBON FOOTPRINT</h1></div>
      </div>

      <div className="content">
        <div className="grid">
          <div className="gridItem">
            <div className="form slickBox">
              <h4>Carbon Monthly</h4>

              <form>
                <label><i className="fas fa-plane"></i>How many miles do you travel by car</label>
                <input type="number" min="0" value={one} onChange={onChangeOne} />
                <br />

                <label><i className="fas fa-plane"></i>How many miles do you travel by bus</label>
                <input type="number" min="0" value={two} onChange={onChangeTwo} />
                <br />

                <label><i className="fas fa-plane"></i>How many miles do you travel by air</label>
                <input type="number" min="0" value={three} onChange={onChangeThree} />
                <br />

                <label><i className="fas fa-plane"></i>How many miles do you travel using other modes of transportation</label>
                <input type="number" min="0" value={four} onChange={onChangeFour} />
                <br />

                <label><i className="fas fa-house-user"></i>How much do you spend on electricity bills</label>
                <input type="number" min="0" value={five} onChange={onChangeFive} />
                <br />

                <label><i className="fas fa-house-user"></i>What percent of your electricity is clean energy</label>
                <input type="number" min="0" max="100" value={six} onChange={onChangeSix} />
                <br />

                <label><i className="fas fa-house-user"></i>How much do you spend on heating + cooling</label>
                <input type="number" min="0" value={seven} onChange={onChangeSeven} />
                <br />

                <label><i className="fas fa-hamburger"></i>How much calories do you consume</label>
                <input type="number" min="0" value={eight} onChange={onChangeEight} />
                <br />

                <label><i className="fas fa-hamburger"></i>How many pounds of carbon do other services use </label>
                <input type="number" min="0" value={nine} onChange={onChangeNine} />
                <br />

                <button onClick={submitted}>Submit</button>
              </form>
            </div>
          </div>

          <div className="gridItem">
            <h4>How Much You Spend</h4>
            <div className="grid">
              <div className="gridItem slickBox"> You use {pounds} monthly </div>
              <div className="gridItem slickBox"> An average household uses ~{num} pounds monthly </div>
            </div>

            <br />

            <div className="slickBox">Pounds Wasted: {pounds - num}</div>
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

export default Carbon;