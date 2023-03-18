import {useState,useEffect} from 'react'
import { Button } from 'antd'
import L from "leaflet"
import { useMap } from 'react-leaflet'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { useParams } from 'react-router'
import Authorisation from './authorisation.jsx';



const geocoder = () => {
    const [latLong,setLatLong]=useState('')
    const map = useMap()
    const navigate = useNavigate()
    const param = useParams()
    console.log(param)
    const [user, setUser] = useState({})

 
    
    

    const getMap=()=>{
        L.Control.geocoder({
            defaultMarkGeocode: false
          })
            .on('markgeocode', function(e) {
              
              var lat_long = e.geocode.center
              
              setLatLong(lat_long)
              L.marker(lat_long).addTo(map)
              map.fitBounds(e.geocode.bbox)
              
         
            })
            .addTo(map);
    }

    useEffect(()=>{getMap();
      const storedUser = JSON.parse(localStorage.getItem('user'))
      setUser(storedUser)},[])
 
  return (
    <div className='AddLongLat'>
{user ? (
    <>
      <Button type='primary' onClick={() => param && param.name ? navigate(`/addTrip/${param.name}`, { state: { latLong } }) : navigate("/addTrip/", { state: { latLong } })}>{param && param.name ? "Update Trip" : "Add To Trip"}</Button>
      <Button type='primary' onClick={() => param && param.trip && param.id ? navigate(`/pointForm/${param.trip}/${param.id}`, { state: { latLong } }) : navigate("/pointForm/", { state: { latLong } })}>{param && param.trip ? "Update Point" : "Add To Point"}</Button>
    </>
  ) : (
    <Authorisation />
  )}
</div>
  )
    
}

export default geocoder
