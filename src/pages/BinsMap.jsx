import React, { useState, useEffect } from "react";
import "./../styles.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { markers } from "./../components/Markers";

const BinsMap = () => {

  const [userPos, setUserPos] = useState({ latitude: -6.174032, longitude: 106.825981 })

  const customIcon = new Icon({
    iconUrl: require("./../components/icons/marker-bins.png"),
    iconSize: [35, 49]
  });

  useEffect(() => {

    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
          console.log("POS", pos)
          setUserPos({ latitude: pos.coords.latitude, longitude: pos.coords.longitude })
        });
      } else {
        window.alert("Geolocation is not supported by this browser.")
      }
    }

    getLocation()

    console.log([userPos.latitude, userPos.longitude])

  })


  return (
    <MapContainer
      center={[userPos.latitude, userPos.longitude]}
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
            {/* <Popup>Filled {Math.ceil((marker.filled / 170) * 100)}%</Popup> */}
            {
              console.log("NEW", [userPos.latitude, userPos.longitude])
            }
            <Popup>{toString(userPos)}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default BinsMap;
