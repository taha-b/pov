
import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
import { Input,Button,Select } from "antd";
import { Link } from 'react-router-dom';
import { useParams} from 'react-router';



const addTripForm = () => {
  const param = useParams()

  useEffect(() => {getTrip()}, []);
  
  const [imageUpload, setImageUpload] = useState('');
  const [tripData,setTripData]=useState([])
  const [newTitle,setNewTitle]=useState('')
  const [newDiscription,setNewDiscription]=useState('')
  const [newTag,setNewTag]=useState([])
  const [newlatitude,setLatitude]=useState('')
  const [newlongitude,setLongitude]=useState('')
  const [selectedTrip,setSelectedTrip]=useState('')
    
  const uploadImg = async () => {
    const formData = new FormData();
    formData.append('file', imageUpload);
    formData.append('upload_preset', 'gmysyjod');
    
    const response = await axios.post('https://api.cloudinary.com/v1_1/dk2x78b4b/image/upload', formData);
    console.log(response);
    console.log(response.data.secure_url);
    return response.data.secure_url;
  };

  const getTrip = () => {
    axios
      .get("http://localhost:3000/api/trip/")
      .then((result) => {
        setTripData(result.data);
        
      })
      .catch((error) => console.log(error));
  };
        
  const addNewPoint=()=>{
    uploadImg(imageUpload).then((imageUrl) => {
    axios
    .post('http://localhost:3000/api/point',{name : newTitle,desc : newDiscription,tag : newTag,latitude:newlatitude,longitude:newlongitude,trip:selectedTrip,imgUrl: imageUrl})
    .then((result)=>{
    
    setSelectedTrip("")
    setNewTitle("")
    setNewDiscription("")
    setNewTag([])
    setLatitude("")
    setLongitude("")
    setImageUpload("")
    })
    .catch((error)=>console.log(error,'zzz'))
  })}
  

  const updatePoint=()=>{
    uploadImg(imageUpload).then((imageUrl) => {
    axios.patch(`http://localhost:3000/api/point/${trip}/${id}`,{name:newTitle,desc:newDiscription,tag:newTag,latitude:newlatitude,longitude:newlongitude,imgUrl: imageUrl})
    .then((result)=>{
      
      setNewTitle('')
      setNewDiscription('')
      setNewTag([])
      setLatitude("")
      setLongitude("")
      setImageUpload("")
    })
    .catch((error)=>console.log(error))
  })}

     
  return (
    <div>
       <form className="forms">
       <Select
          className="select"
          onChange={(value) => setSelectedTrip(value)}
          placeholder="Select Trip"
          value={selectedTrip}
        >
          {tripData.map((element) => (
            <Select.Option key={element.name} value={element.name}>
              {element.name}
            </Select.Option>
          ))}
        </Select>
        <input
        type="file"
        onChange={(e) => {
          setImageUpload(e.target.files[0]);
        }}
      />
        <Input
          className="site-form-item-icon"
          onChange={(event) => setNewTitle(event.target.value)}
          
          placeholder="Title"
        />
        <Input
          className="site-form-item-icon"
          onChange={(event) => setNewDiscription(event.target.value)}
          
          
          placeholder="Discription"
        />
        <Input
          className="site-form-item-icon"
          onChange={(event) => setNewTag(event.target.value)}
          
          
          placeholder="Tags"
        />
        {/* <Input
        className='input-file'
        type="file"
        onChange={(e) => {
          setimageUpload(e.target.files[0]);
        }}
      /> */}

        {/* <Button
          onClick={() => myClick(addNewTrip)}
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          Submit
        </Button> */}
      <Input
          className="site-form-item-icon"
          onChange={(event) => setLatitude(event.target.value)}
          
          
          placeholder="Latitude"
        />
        <Input
          className="site-form-item-icon"
          onChange={(event) => setLongitude(event.target.value)}
          
          
          placeholder="Longitude"
        />
        <Link to='/trip'>
  <Button className='plus' 
  onClick={()=>{
  
    if (param && param.name) {
      updatePoint();
    } else {
      addNewPoint();
    } 
    }}>
    {param && param.name ? "Update" : 'Submit'}
    </Button>
    </Link>
      </form>
    </div>
  )
}
export default addTripForm