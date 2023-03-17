
import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
import { Input,Button,Select,Space } from "antd";
import { Link } from 'react-router-dom';
import { useParams,useLocation} from 'react-router';




const addTripForm = () => {
  const param = useParams()
  console.log(param)
  const location = useLocation()
  const latLong = location.state.latLong

  useEffect(() => {getTrip()}, []);

  const handleTag = (value) => {
    setNewTag(value);
  };
  
  const [imageUpload, setImageUpload] = useState('');
  const [tripData,setTripData]=useState([])
  const [newTitle,setNewTitle]=useState('')
  const [newDiscription,setNewDiscription]=useState('')
  const [newTag,setNewTag]=useState([])
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
    .post('http://localhost:3000/api/point',{name : newTitle,desc : newDiscription,tag : newTag,trip:selectedTrip,imgUrl: imageUrl,
    position:{
      latitude : latLong.lat,
      longitude : latLong.lng

    }
  })
    .then((result)=>{
    
    setSelectedTrip("")
    setNewTitle("")
    setNewDiscription("")
    setNewTag([])
    setImageUpload("")
    })
    .catch((error)=>console.log(error,'zzz'))
  })}
  

  const updatePoint=()=>{
    uploadImg(imageUpload).then((imageUrl) => {
    axios.patch(`http://localhost:3000/api/point/${param.trip}/${param.id}`,{name:newTitle,desc:newDiscription,tag:newTag,imgUrl: imageUrl,
    position:{
      latitude : latLong.lat,
      longitude : latLong.lng

    }
  })
    .then((result)=>{
      
      setNewTitle('')
      setNewDiscription('')
      setNewTag([])
      setImageUpload("")
    })
    .catch((error)=>console.log(error))
  })}

     
  return (
    
      <form className="forms">
      <Space direction="vertical">
        {!param || !param.trip || !param.id ? (
          <Select
            className="select"
            onChange={(value) => setSelectedTrip(value)}
            placeholder="Select Trip"
            value={selectedTrip}
            style={{width:"100%"}}
          >
            {tripData.map((element) => (
              <Select.Option key={element.name} value={element.name}>
                {element.name}
              </Select.Option>
            ))}
          </Select>
        ) : null}
        <Input
       
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
          placeholder="Description"
        />
        <Select
        mode="tags"
        style={{ width: '100%' }}
        placeholder="Tags"
        onChange={handleTag}
        
        
      /> 
        <Link to="/trip">
          <Button
            className="plus"
            onClick={() => {
              if (param && param.trip && param.id) {
                updatePoint();
              } else {
                addNewPoint();
              }
            }}
          >
            {param && param.trip && param.id ? "Update" : "Submit"}
          </Button>
        </Link>
        </Space>
      </form>
   
  );
  
}
export default addTripForm