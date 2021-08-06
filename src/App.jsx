import React, { useRef, useState } from "react";
import "leaflet";
import "leaflet-editable";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "./App.css";
import ReactLeafletEditable from "react-leaflet-editable";
import data from "./data.json"

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
        center={[45.371088, -75.702061]}
        zoom={12}
        scrollWheelZoom={true}
        className="map"
      >
        <GeoJSON attribution="&copy; credits due..." data={data} />
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
