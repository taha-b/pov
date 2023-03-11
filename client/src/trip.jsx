import {useState,useEffect} from 'react';
import { Table,Tag } from "antd";
import {  EyeOutlined ,DeleteOutlined,EditOutlined }from "@ant-design/icons";
import axios from 'axios';
import { Link,useParams,useNavigate } from "react-router-dom";



const trip = () => {
  const [tripData,setTripData]=useState([])
  const [pointData,setPointData]=useState([])
  const param = useParams()
  const navigate=useNavigate()
  
 
  
  const getTrip = () => {
    axios
      .get("http://localhost:3000/api/trip/")
      .then((result) => {
        setTripData(result.data);
        
      })
      .catch((error) => console.log(error));
  };

  const addNewTrip=()=>{
    
    axios
    .post('http://localhost:3000/api/trip',{name : newTitle,desc : newDiscription,tag : newTag})
    .then((result)=>{
      
      setNewTitle("")
    setNewDiscription("")
    setNewTag([])
    })
    .catch((error)=>console.log(error,'zzz'))
  }

  const deleteTrip =(name)=>{
    axios
    .delete(`http://localhost:3000/api/trip/${name}`)
    .then((result)=>setTripData(''))
    .catch((error)=>console.log(error))
  }

  
 
    useEffect(() => {
        
        getTrip();
      }, []);


const columns = [{
  title :"Title",
  dataIndex:"name",
},
{
  title :"Discription",
  dataIndex:"desc",
},
{
  title :"Tag",
  dataIndex:"tag",
  render: (tag) => (
      <>
        {tag?.map((element, i) => {
          
          let color = "";
          if (i === 0) {
            color = "yellow";
          } else if (i === 1) {
            color = "orange";
          } else if (i === 2) {
            color = "red";
          }
          return <Tag color={color} key={element}>{element}</Tag>;
        })}
      </>
    ),
},
{
  title :"Action",
  dataIndex:"action",
  render: (_, record) => (
      <>
        
         <EyeOutlined onClick={()=>{ navigate(`/point/${record.name}`)}}/>
          
          
        <Link to='/addTrip'><EditOutlined /></Link>
          
          
        
    <DeleteOutlined onClick={()=>deleteTrip(record.name)}/>
      
      </>
     
  
),
}];
  return (
  
      <div className='table'>
      <Table dataSource={tripData} columns={columns} />
      
      </div>
  
  )
}

export default trip
