import React from "react";
import logo from './assets/buscamedi.png';
import farmacias from './assets/logo-farmacias.png';
import './App.css';
import Location from './components/location/Location';
import Buscador from './components/buscador/Buscador';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" />
        <Location />
      </header>
      <Buscador />
      <footer className="App-footer">
        <img src={farmacias} className="logo-farmacias" />
      </footer>
    </div>
  );
}

export default App;
