import '../scss/front.scss';
import NavBar from './NavBar';

function Front() {
  return (
    <div className="Front">
      <div className="centered">
        <NavBar />
        
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