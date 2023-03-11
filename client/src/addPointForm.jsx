
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Input,Button } from "antd";
import { Link } from 'react-router-dom';
import { useParams} from 'react-router';


const addTripForm = () => {
  const param = useParams()
  
  const [newTitle,setNewTitle]=useState('')
  const [newDiscription,setNewDiscription]=useState('')
  const [newTag,setNewTag]=useState([])
    
        
  const addNewPoint=()=>{
    console.log({name : newTitle,desc : newDiscription,tag : newTag})
    axios
    .post('http://localhost:3000/api/trip',{name : newTitle,desc : newDiscription,tag : newTag})
    .then((result)=>{
      
      setNewTitle("")
    setNewDiscription("")
    setNewTag([])
    })
    .catch((error)=>console.log(error,'zzz'))
  }

  const updatePoint=()=>{
    axios.patch(`http://localhost:3000/api/point/${param.name}`,{name:newTitle,desc:newDiscription,tag:newTag})
    .then((result)=>{
      console.log(result)
      setNewTitle('')
      setNewDiscription('')
      setNewTag([])
    })
    .catch((error)=>console.log(error))
  }

      // function UploadImg() {
        // const [imageUpload, setimageUpload] = useState("");
        // const UploadImg = () => {
        //   const formData = new FormData();
        //   formData.append("file", imageUpload);
        //   formData.append("upload_preset", "djqjuoks");
        //   axios
        //     .post("https://api.cloudinary.com/v1_1/dk2x78b4b/image/upload", formData)
        //     .then((response) => {
        //       console.log(response);
        //       console.log(response.data.secure_url);
        //       let imgurl = response.data.secure_url;
        //       console.log("img for the Trip", imgurl);
            //   axios
            //     .put(`http://localhost:3000/api/user/updateUser/31`, {
            //       profile: imgurl,
            //     })
            //     .then((response) => {
            //       console.log(response);
            //     });
        //     });
        // }}
  return (
    <div>
       <form className="forms">
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
          
          
          placeholder="Discription"
        />
        {/* <Input
        className='input-file'
        type="file"
        onChange={(e) => {
          setimageUpload(e.target.files[0]);
        }}
      /> */}
<Link to='/trip'>
  <Button className='plus' 
  onClick={()=>{
  
    param && param.name ? addNewPoint : updatePoint
    console.log(param.name)}}>
    {param && param.name ? "Submit" : 'Update'}
    </Button>
    </Link>
        {/* <Button
          onClick={() => myClick(addNewTrip)}
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          Submit
        </Button> */}
      
      </form>
    </div>
  )
}
export default addTripForm