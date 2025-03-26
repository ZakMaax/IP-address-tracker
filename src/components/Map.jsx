import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import iconImage from "../assets/icon-location.svg"; // import icon

const customIcon = new L.Icon({
  iconUrl: iconImage, // icon path
  iconSize: [30, 50], // Size of the icon
  iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
});

function ChangeView({ center }) {
  const map = useMap();
  map.setView(center);
  return null;
}

export default function Map({ location }) {
  return (
    <MapContainer
      center={location}
      zoom={13}
      className="h-[400px] w-full z-0"
    >
      <ChangeView center={location} />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={location} icon={customIcon}>
        <Popup>Hello! This is your location.</Popup>
      </Marker>
    </MapContainer>
  );
}