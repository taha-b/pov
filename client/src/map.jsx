import React from 'react'
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import L from "leaflet"
import "./index.css"
import Geocoder from './geocoder.jsx'

const map = () => {
    const position = [36.8891, 10.3223]
  return (
    <div>
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Geocoder/>
  </MapContainer>,
    </div>
  )
}
let DefautIcon=L.icon({
    iconUrl:"../public/img/marker-icon.png",
    iconSize : [25,41]
})
L.Marker.prototype.options.icon = DefautIcon;
export default map
