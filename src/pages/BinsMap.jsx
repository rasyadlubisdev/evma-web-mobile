import React from "react";
import "./../styles.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { markers } from "./../components/Markers";

const BinsMap = () => {
  const customIcon = new Icon({
    iconUrl: require("./../components/icons/marker-bins.png"),
    iconSize: [35, 49]
  });
  return (
    <MapContainer
      center={[-6.174032, 106.825981]}
      zoom={14}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup chunkedLoading>
        {markers.map((marker, idx) => (
          <Marker position={marker.geocode} icon={customIcon} key={idx}>
            <Popup>Filled {Math.ceil((marker.filled / 170) * 100)}%</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default BinsMap;
