import logo from './logo.svg';
import './App.css';
import MovieToWatch from "./Components/MovieToWatch/MovieToWatch";
function App() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My Movie Manager
        </p>
      </header>
      <br />
      <MovieToWatch />
    </div>
  );
}

export default App;
