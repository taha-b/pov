
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Input,Button,Upload } from "antd";
import {UploadOutlined} from "@ant-design/icons"
import { Link } from 'react-router-dom';
import { useParams} from 'react-router';


const addTripForm = () => {
  const param = useParams()
  
  const [imageUpload, setImageUpload] = useState('');
  const [newTitle,setNewTitle]=useState('')
  const [newDiscription,setNewDiscription]=useState('')
  const [newTag,setNewTag]=useState([])
    
        
  const uploadImg = async () => {
    const formData = new FormData();
    formData.append('file', imageUpload);
    formData.append('upload_preset', 'gmysyjod');
    
    const response = await axios.post('https://api.cloudinary.com/v1_1/dk2x78b4b/image/upload', formData);
    console.log(response);
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
      })
      .then((result) => {
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
      axios.patch(`http://localhost:3000/api/trip/${param.name}`,{name:newTitle,desc:newDiscription,tag:newTag,imgUrl: imageUrl})
    .then((result)=>{
      
      setNewTitle('')
      setNewDiscription('')
      setNewTag([])
      setImageUpload('');
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
        <Input
          className="site-form-item-icon"
          onChange={(event) => setNewTag(event.target.value)}
          placeholder="Tags"
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
