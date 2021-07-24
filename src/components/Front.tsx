import '../scss/front.scss';
import NavBar from './NavBar';

function Front() {
  return (
    <div className="Front">
      <NavBar />
      
      <div className="centered">
        <div>
          <h1>CliMATES</h1>
          <p>MATES Fighting Climate Change</p>

          <a href="/about">Get Started</a>
        </div>
      </div>
    </div>
  );
}

export default Front;