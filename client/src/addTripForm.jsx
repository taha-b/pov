
import axios from 'axios';
import React from 'react'
import { useState } from 'react';

import { Input,Button,Select } from "antd";
import { Link } from 'react-router-dom';
import { useParams,useLocation} from 'react-router';



const addTripForm = () => {
  const param = useParams()
  const location = useLocation()
  console.log(location)
  const latLong = location.state.latLong
  
  
  const [imageUpload, setImageUpload] = useState('');
  const [newTitle,setNewTitle]=useState('')
  const [newDiscription,setNewDiscription]=useState('')
  const [newTag,setNewTag]=useState([])
  
    
  const handleTag = (value) => {
    setNewTag(value);
  };

  const uploadImg = async () => {
    const formData = new FormData();
    formData.append('file', imageUpload);
    formData.append('upload_preset', 'gmysyjod');
    
    const response = await axios.post('https://api.cloudinary.com/v1_1/dk2x78b4b/image/upload', formData);
   
    console.log(response.data.secure_url);
    return response.data.secure_url;
  };
  const addNewTrip = () => {

    uploadImg(imageUpload).then((imageUrl) => {
      axios.post('http://localhost:3000/api/trip', {
        name: newTitle,
        desc: newDiscription,
        tag: newTag,
        imgUrl: imageUrl,
        position:{
          latitude : latLong.lat,
          longitude : latLong.lng

        }
      })
      .then((result) => {
        console.log('ya weldi')
        setNewTitle('');
        setNewDiscription('');
        setNewTag([]);
        setImageUpload('');
        
      })
      .catch((error) => console.log(error));
    });
  };
  

  const updateTrip=()=>{
    
    uploadImg(imageUpload).then((imageUrl) => {
      axios.patch(`http://localhost:3000/api/trip/${param.name}`,{name:newTitle,desc:newDiscription,tag:newTag,imgUrl: imageUrl,
      position:{
        latitude : latLong.lat,
        longitude : latLong.lng

      }})
    .then((result)=>{
      
      setNewTitle('')
      setNewDiscription('')
      setNewTag([])
      setImageUpload('')
      
      
    })
    .catch((error)=>console.log(error))
  })
}


  
  return (
    <div>
       <form className="forms">
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
        <Select
        mode="tags"
        style={{ width: '100%' }}
        placeholder="Tags"
        onChange={handleTag}
        
        
      /> 

   
<Link to='/trip'>
  <Button className='plus' 
  onClick={
  
    param && param.name ? updateTrip : addNewTrip    
    }>
    {param && param.name ? 'Update': "Submit"  }
    </Button>
    </Link>
       </form>
    </div>
  )
}
export default addTripForm;
