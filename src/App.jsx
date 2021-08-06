import React, { useRef, useState } from "react";
import "leaflet";
import "leaflet-editable";
import { MapContainer, TileLayer } from "react-leaflet";
import "./App.css";
import ReactLeafletEditable from "react-leaflet-editable";

// const multiPolyline = [
//   [
//     [51.5, -0.1],
//     [51.5, -0.12],
//     [51.52, -0.12],
//   ],
//   [
//     [51.5, -0.05],
//     [51.5, -0.06],
//     [51.52, -0.06],
//   ],
// ];

const App = () => {
  const editRef = useRef();
  const [map, setMap] = useState();
  const editPolyline = () => {
    editRef.current.startPolyline();
  };
  const whenMapCreated = (map) => {
    setMap(map);
  };

  return (
    <ReactLeafletEditable ref={editRef} map={map}>
      <button onClick={editPolyline} className="editable-btn">
        Start/Stop drawing
      </button>
      <MapContainer
        whenCreated={whenMapCreated}
        editable={true}
        center={[51.505, -0.09]}
        zoom={19}
        scrollWheelZoom={true}
        className="map"
      >
        <TileLayer
          maxZoom={25}
          maxNativeZoom={19}
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </ReactLeafletEditable>
  );
};

export default App;
