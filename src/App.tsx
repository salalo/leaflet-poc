import React, { useEffect } from "react";
import "./App.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import * as L from "leaflet";

const multiPolyline: L.LatLngExpression[][] = [
  [
    [51.5, -0.1],
    [51.5, -0.12],
    [51.52, -0.12],
  ],
  [
    [51.5, -0.05],
    [51.5, -0.06],
    [51.52, -0.06],
  ],
];

function Square(props) {
  const context = useLeafletContext();

  useEffect(() => {
    const bounds = L.latLng(props.center).toBounds(props.size);
    const square = new L.Rectangle(bounds);
    const container = context.layerContainer || context.map;
    container.addLayer(square);

    return () => {
      container.removeLayer(square);
    };
  });

  return null;
}

function App() {
  return (
    <div className="App">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
        className="map"
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polyline pathOptions={{ color: "blue" }} positions={multiPolyline} />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;
