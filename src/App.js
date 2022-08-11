import logo from './logo.svg';
import './App.css';

const person = {
  name: "Martin",
  lastName: "Ferreira Yic"
}

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {person.name} {person.lastName}
        </p>
        <p>
          Curso React Js - Comisión 436645
        </p>
      </header>
    </div>
  );
}

export default App;
