import React from 'react';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';

function Mapa({long, lat, farmaciasDrSimi, farmaciasAhumada, farmaciasEco}) {

    const position = [lat, long]

    function GetUserIcon({ size }) {
        const icon = L.icon({
          iconUrl: require('../../assets/user.png'),
          iconSize: [size, 2*size],
          popupAnchor: [0, -size/2],
        });
        return icon;
      }
    
    function GetDrSimiIcon({ size }) {
      const icon = L.icon({
        iconUrl: require('../../assets/dr-simi.png'),
        iconSize: [size, (3/2)*size],
        popupAnchor: [0, -size/2],
        iconAnchor: [size/2, size],
      });
      return icon;
    }

    function GetAhumadaIcon({ size }) {
      const icon = L.icon({
        iconUrl: require('../../assets/ahumada.png'),
        iconSize: [size, size],
        popupAnchor: [0, -size],
        iconAnchor: [size/2, size],
      });
      return icon;
    }

    function GetEcoIcon({ size }) {
      const icon = L.icon({
        iconUrl: require('../../assets/eco-farmacias.png'),
        iconSize: [size, size],
        popupAnchor: [0, -size],
        iconAnchor: [size/2, size],
      });
      return icon;
    }
  
    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="mapa">
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[position[0], position[1]]} icon={GetUserIcon({size: 30})}>
            <Popup>
                Tu Ubicación
            </Popup>
        </Marker>
        {farmaciasDrSimi.map((farmacia, index) => (
            <>
              <Marker key={index} position={[farmacia.lat, farmacia.lon]} icon={GetDrSimiIcon({ size: 25 })}>
                <Popup>
                  <div style={{fontWeight: 'bold'}}>
                    Farmacias del Dr Simi
                  </div>
                  <div style={{ fontStyle: 'italic' }}>
                    {farmacia.direc}
                  </div>
                </Popup>
              </Marker>
            </>
        ))}
        {farmaciasAhumada.map((farmacia, index) => (
            <>
              <Marker key={index} position={[farmacia.lat, farmacia.lon]} icon={GetAhumadaIcon({ size: 25 })}>
                <Popup>
                  <div style={{fontWeight: 'bold'}}>
                    Farmacia Ahumada
                  </div>
                  <div style={{ fontStyle: 'italic' }}>
                    {farmacia.direc}
                  </div>
                </Popup>
              </Marker>
            </>
        ))}
        {farmaciasEco.map((farmacia, index) => (
            <>
              <Marker key={index} position={[farmacia.lat, farmacia.lon]} icon={GetEcoIcon({ size: 25 })}>
                <Popup>
                  <div style={{fontWeight: 'bold'}}>
                    Eco Farmacias
                  </div>
                  <div style={{ fontStyle: 'italic' }}>
                    {farmacia.direc}
                  </div>
                </Popup>
              </Marker>
            </>
        ))}
        </MapContainer>
    );
  }
  
  export default Mapa;