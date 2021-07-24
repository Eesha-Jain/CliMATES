import ReactDOM from 'react-dom';
import '../scss/front.scss';
import NavBar from './NavBar';
import About from './About';

function Front() {
  function onClick() {
    ReactDOM.render(
        <About />,
        document.getElementById("root")
    )
  }

  return (
    <div className="Front">
      <NavBar />
      
      <div className="centered">
        <div>
          <h1>CliMATES</h1>
          <p>MATES Fighting Climate Change</p>

          <button onClick={onClick}>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Front;