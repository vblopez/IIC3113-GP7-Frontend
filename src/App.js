import React, {useState} from "react";
import logo from './assets/buscamedi.png';
import farmacias from './assets/logo-farmacias.png';
import './App.css';
import Location from './components/location/Location';
import Buscador from './components/buscador/Buscador';
import Lista from './components/lista/Lista';
import Mapa from "./components/mapa/Mapa";
import {useGeolocated} from 'react-geolocated';

function App() {

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });

  const [drugs, setDrugs] = useState({});

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" />
      </header>
      {!isGeolocationAvailable ? (
        <div>Your browser does not support Geolocation</div>
        ) : !isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
        ) : coords ? (
          <div className="mapcontainer">
            <div>
              <div className="mapa">
                <Mapa long={coords.longitude} lat={coords.latitude} />
              </div>
            </div>
          </div>
        ) : (
        <div>Getting the location data&hellip; </div>
      )}
      <Buscador setDrugs={setDrugs} />
      <Lista drugs={drugs} />
      <footer className="App-footer">
        <img src={farmacias} className="logo-farmacias" />
      </footer>
    </div>
  );
}

export default App;
