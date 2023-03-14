import {useState,useEffect} from 'react'
import { Button } from 'antd'
import L from "leaflet"
import { useMap } from 'react-leaflet'
import axios from 'axios'
import { useNavigate } from 'react-router'



const geocoder = () => {
    const [latLong,setLatLong]=useState('')
    const map = useMap()
    const navigate = useNavigate()

    const getMap=()=>{
        L.Control.geocoder({
            defaultMarkGeocode: false
          })
            .on('markgeocode', function(e) {
              
              var lat_long = e.geocode.center
              console.log(e)
              setLatLong(lat_long)
              L.marker(lat_long).addTo(map)
              map.fitBounds(e.geocode.bbox)
              
         
            })
            .addTo(map);
    }

    useEffect(()=>{getMap()},[])
 
  return (
    <div>
<Button className='AddLongLat' onClick={() => navigate("/addTrip", { state: { latLong } })}>Add To Trip</Button>    </div>
  )
    
}

export default geocoder
