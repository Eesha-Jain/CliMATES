import React, { useState } from 'react';
import '../scss/water.scss';
import NavBar from './NavBar';

import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Water() {
  let [gallons, setGallons] = useState(0);
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

  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2",
    title:{
      text: "Water Comparison"
    },
    axisY: {
      title: "Gallons",
      suffix: "gal"
    },
    axisX: {
      title: "Years",
      prefix: "1",
      interval: 1
    },
    data: [{type: "line", toolTipContent: "YOUR PATH: {x} yr. - {y} gal.", dataPoints: [
        { x: 1, y: gallons * 52 },
        { x: 2, y: gallons * 52 * 2 },
        { x: 3, y: gallons * 52 * 3 },
        { x: 4, y: gallons * 52 * 4 },
        { x: 5, y: gallons * 52 * 5 },
        { x: 6, y: gallons * 52 * 6 },
        { x: 7, y: gallons * 52 * 7 },
        { x: 8, y: gallons * 52 * 8 },
        { x: 9, y: gallons * 52 * 9 },
        { x: 10, y: gallons * 52 * 10 },
        { x: 11, y: gallons * 52 * 11 },
        { x: 12, y: gallons * 52 * 12 },
        { x: 13, y: gallons * 52 * 13 },
        { x: 14, y: gallons * 52 * 14 },
        { x: 15, y: gallons * 52 * 15 },
        { x: 16, y: gallons * 52 * 16 },
        { x: 17, y: gallons * 52 * 17 },
        { x: 18, y: gallons * 52 * 18 },
        { x: 19, y: gallons * 52 * 19 },
        { x: 20, y: gallons * 52 * 20 }
      ]
    }, {type: "line", toolTipContent: "SUPPOSED PATH: {x} yr. - {y} gal.", dataPoints: [
      { x: 1, y: 210 * 52 },
      { x: 2, y: 210 * 52 * 2 },
      { x: 3, y: 210 * 52 * 3 },
      { x: 4, y: 210 * 52 * 4 },
      { x: 5, y: 210 * 52 * 5 },
      { x: 6, y: 210 * 52 * 6 },
      { x: 7, y: 210 * 52 * 7 },
      { x: 8, y: 210 * 52 * 8 },
      { x: 9, y: 210 * 52 * 9 },
      { x: 10, y: 210 * 52 * 10 },
      { x: 11, y: 210 * 52 * 11 },
      { x: 12, y: 210 * 52 * 12 },
      { x: 13, y: 210 * 52 * 13 },
      { x: 14, y: 210 * 52 * 14 },
      { x: 15, y: 210 * 52 * 15 },
      { x: 16, y: 210 * 52 * 16 },
      { x: 17, y: 210 * 52 * 17 },
      { x: 18, y: 210 * 52 * 18 },
      { x: 19, y: 210 * 52 * 19 },
      { x: 20, y: 210 * 52 * 20 }
    ]
  }]
  }

  function changeGallons() {
    setGallons(Number(one) + Number(two) * Number(three) * 2 + Number(four) * 30 + Number(five) * 10 + Number(six) * 15 + Number(seven) + Number(eight) + Number(nine) * 3 + Number(ten) * 0.07 + Number(eleven) * 32 + Number(tweleve) + Number(thirteen));
  }

  function submitted(event: any) {
    event.preventDefault();
    changeGallons();
  }

  const onChangeOne = (event: any) => { setOne(event.target.value); changeGallons(); };
  const onChangeTwo = (event: any) => { setTwo(event.target.value); changeGallons(); };
  const onChangeThree = (event: any) => { setThree(event.target.value); changeGallons(); };
  const onChangeFour = (event: any) => { setFour(event.target.value); changeGallons(); };
  const onChangeFive = (event: any) => { setFive(event.target.value); changeGallons(); };
  const onChangeSix = (event: any) => { setSix(event.target.value); changeGallons(); };
  const onChangeSeven = (event: any) => { setSeven(event.target.value); changeGallons(); };
  const onChangeEight = (event: any) => { setEight(event.target.value); changeGallons(); };
  const onChangeNine = (event: any) => { setNine(event.target.value); changeGallons(); };
  const onChangeTen = (event: any) => { setTen(event.target.value); changeGallons(); };
  const onChangeEleven = (event: any) => { setEleven(event.target.value); changeGallons(); };
  const onChangeTweleve = (event: any) => { setTweleve(event.target.value); changeGallons(); };
  const onChangeThirteen = (event: any) => { setThirteen(event.target.value); changeGallons(); };

  return (
    <div className="Water">
      <div className="top">
        <NavBar />
        <div className="centered"><h1>WATER</h1></div>
      </div>

      <div className="content">
        <div className="grid">
          <div className="gridItem">
            <div className="form slickBox">
              <h4>Water Weekly</h4>

              <form>
                <label><i className="fas fa-tooth"></i>How many times do you brush your teeth</label>
                <input type="number" min="0" value={one} onChange={onChangeOne} />
                <br />

                <label><i className="fas fa-shower"></i>How many showers do you take</label>
                <input type="number" min="0" value={two} onChange={onChangeTwo} />
                <br />

                <label><i className="fas fa-clock"></i>How long does a shower take</label>
                <input type="number" min="0" value={three} onChange={onChangeThree} />
                <br />

                <label><i className="fas fa-bath"></i>How many baths do you take</label>
                <input type="number" min="0" value={four} onChange={onChangeFour} />
                <br />

                <label><i className="fas fa-utensils"></i>How many dishwasher loads do you do</label>
                <input type="number" min="0" value={five} onChange={onChangeFive} />
                <br />

                <label><i className="fas fa-utensils"></i>How many times do you wash the dishes by hand</label>
                <input type="number" min="0" value={six} onChange={onChangeSix} />
                <br />

                <label><i className="fas fa-hands-wash"></i>How many times do you wash your face + hands</label>
                <input type="number" min="0" value={seven} onChange={onChangeSeven} />
                <br />

                <label><i className="fas fa-quidditch"></i>How often do you shave</label>
                <input type="number" min="0" value={eight} onChange={onChangeEight} />
                <br />

                <label><i className="fas fa-toilet"></i>How often do you flush the tiolet</label>
                <input type="number" min="0" value={nine} onChange={onChangeNine} />
                <br />

                <label><i className="fas fa-mug-hot"></i>How many cups of water do you drink</label>
                <input type="number" min="0" value={ten} onChange={onChangeTen} />
                <br />

                <label><i className="fas fa-tshirt"></i>How many times do you do the laundry</label>
                <input type="number" min="0" value={eleven} onChange={onChangeEleven} />
                <br />

                <label><i className="fas fa-fan"></i>How many gallons of water do you use to garden</label>
                <input type="number" min="0" value={tweleve} onChange={onChangeTweleve} />
                <br />

                <label><i className="fas fa-question"></i>How many gallons of water do you use elsewhere</label>
                <input type="number" min="0" value={thirteen} onChange={onChangeThirteen} />
                <br />

                <button onClick={submitted}>Submit</button>
              </form>
            </div>
          </div>

          <div className="gridItem">
            <h4>How Much You Spend</h4>
            <div className="grid">
              <div className="gridItem slickBox"> You use ${gallons} daily </div>
              <div className="gridItem slickBox"> A person should use ~210 gallons weekly </div>
            </div>

            <br />

            <div className="slickBox">Gallons Wasted: ${gallons - 210}</div>
            <br />
            <div className="slickBox">
              <CanvasJSChart options = {options}
                  /* onRef = {ref => this.chart = ref} */
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Water;