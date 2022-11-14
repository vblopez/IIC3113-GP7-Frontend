import React from 'react';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';

function Mapa({long, lat}) {

    const position = [lat, long]

    function GetUserIcon({ size }) {
        const icon = L.icon({
          iconUrl: require('../../assets/user.png'),
          iconSize: [size, 2*size],
          popupAnchor: [0, -size/2],
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
        </MapContainer>
    );
  }
  
  export default Mapa;