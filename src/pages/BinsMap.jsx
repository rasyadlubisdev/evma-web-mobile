import React, { useState, useEffect, useRef } from "react";
import "./../styles.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { markers } from "./../components/Markers";
import useGeolocation from "../hooks/useGeolocation";
import { animate } from "framer-motion";

const BinsMap = () => {

  // const [location, setLocation] = useState(useGeolocation())
  const [control, setControl] = useState()
  // const mapRef = useRef()
  const [map, setMap] = useState(null)
  const ZOOM_LEVEL = 14;

  const customIcon = new Icon({
    iconUrl: require("./../components/icons/marker-bins.png"),
    iconSize: [35, 49]
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
      map.setView([location.coordinates.latitude, location.coordinates.longitude], ZOOM_LEVEL, { animate: true })
    } else {
      alert(location.error.message)
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
      ref={setMap}
      center={[-6.174032, 106.825981]}
      zoom={ZOOM_LEVEL}
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
      {
        (location.loaded && !location.error) && (
          <Marker position={[location.coordinates.latitude, location.coordinates.longitude]} icon={customIcon}></Marker>
        )
      }

      <button onClick={showMyLocation} style={{ position: 'absolute', bottom: 100, right: 50, zIndex: 1000 }}>
        Click Me
      </button>
    </MapContainer>
  );
};

export default BinsMap;
