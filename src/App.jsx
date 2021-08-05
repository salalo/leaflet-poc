import React, { useRef, useState } from "react";
import "leaflet";
import "leaflet-editable";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import "./App.css";
import { ReactLeafletEditable } from "react-leaflet-editable";
// const ReactLeafletEditable = require("react-leaflet-editable");

const multiPolyline = [
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

const App = () => {
  const editRef = useRef();
  const [map, setMap] = useState();
  const editPolygon = () => {
    editRef.current.startPolygon();
  };
  const whenMapCreated = (map) => {
    setMap(map);
  };

  return (
    <ReactLeafletEditable ref={editRef} map={map}>
      <MapContainer
        whenCreated={whenMapCreated}
        editable={true}
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
        className="map"
      >
        <button onClick={editPolygon} className="editable-btn">
          polygon
        </button>
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
    </ReactLeafletEditable>
  );
};

export default App;
