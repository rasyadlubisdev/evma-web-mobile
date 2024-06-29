import React, { useState, useEffect, useRef } from "react";
import "./../styles.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { markers } from "./../components/Markers";
import useGeolocation from "../hooks/useGeolocation";
import { animate } from "framer-motion";
import gpsFixedIcon from "../components/icons/gps-fixed.svg";


const BinsMap = () => {

  const mapRef = useRef()
  // const [map, setMap] = useState(null)
  const ZOOM_LEVEL = 16;

  const binsIcon = new Icon({
    iconUrl: require("../components/icons/marker-bins.png"),
    iconSize: [35, 49]
  });
  const userIcon = new Icon({
    iconUrl: require("../components/icons/marker-user.png"),
    iconSize: [49, 49]
  });

  const location = useGeolocation();

  const showMyLocation = () => {
    if (location.loaded && !location.error) {
      // “leafletElement” is no longer available in “mapRef.current”
      // source: https://medium.com/@Phosimurg/basic-react-leaflet-template-and-some-things-to-know-533b4311fb1b

      // mapRef.current.leafletElement.flyTo(
      //   [location.coordinates.latitude, location.coordinates.longitude], 
      //   ZOOM_LEVEL, 
      //   { animate: true }
      // );
      // mapRef.current._lastCenter.lat = location.coordinates.latitude
      // mapRef.current._lastCenter.lng = location.coordinates.longitude
      // console.log([location.coordinates.latitude, location.coordinates.longitude])
      mapRef.current.setView([location.coordinates.latitude, location.coordinates.longitude], ZOOM_LEVEL, { animate: true })
    } else if (location.error) {
      alert(location.message)
    } else {
      alert("Please wait, location is loading...")
    }
  }

  // useEffect(() => {

  //   function getLocation() {
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition((pos) => {
  //         console.log("POS", pos)
  //         setUserPos({ latitude: pos.coords.latitude, longitude: pos.coords.longitude })
  //       });
  //     } else {
  //       window.alert("Geolocation is not supported by this browser.")
  //     }
  //   }

  //   getLocation()

  //   console.log([userPos.latitude, userPos.longitude])

  // })


  return (
    <MapContainer 
      ref={mapRef}
      center={[-7.280301604812306, 112.79531939931405]}
      zoom={ZOOM_LEVEL}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup chunkedLoading>
        {markers.map((marker, idx) => (
          <Marker position={marker.geocode} icon={binsIcon} key={idx}>
            <Popup>Filled {Math.ceil((marker.filled / 170) * 100)}%</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
      {
        (location.loaded && !location.error) && (
          <Marker position={[location.coordinates.latitude, location.coordinates.longitude]} icon={userIcon}></Marker>
        )
      }

      <button onClick={showMyLocation} style={{ 
          position: 'absolute', 
          bottom: 150, 
          right: 30, 
          zIndex: 1000, 
          border: "none",
          borderRadius: "10px",
          display: "flex",
          padding: "6px",
          backgroundColor: "#019875",
          boxShadow: "0px 0px 32px 0px rgba(4,97,75,0.8)"
        }}>
        <img src={gpsFixedIcon} alt="" />
      </button>
    </MapContainer>
  );
};

export default BinsMap;
