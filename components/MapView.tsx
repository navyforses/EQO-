import React from 'react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export interface MapLocation {
  name: string;
  description: string;
  lat: number;
  lng: number;
}

interface MapViewProps {
  locations: MapLocation[];
}

const MapView: React.FC<MapViewProps> = ({ locations }) => {
  if (!locations || locations.length === 0) {
    return <div className="flex items-center justify-center h-full">No locations available.</div>;
  }

  const center = { lat: locations[0].lat, lng: locations[0].lng };

  return (
    <MapContainer center={center} zoom={6} className="w-full h-full rounded-lg">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {locations.map((loc, idx) => (
        <Marker key={idx} position={[loc.lat, loc.lng]}>
          <Tooltip>{`${loc.name}: ${loc.description}`}</Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
