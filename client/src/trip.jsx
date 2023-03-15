import {useState,useEffect} from 'react';
import { Table,Tag } from "antd";
import {  EyeOutlined ,DeleteOutlined,EditOutlined }from "@ant-design/icons";
import axios from 'axios';
import { Link,useParams,useNavigate } from "react-router-dom";



const trip = () => {

  const navigate=useNavigate()
  const [tripData,setTripData]=useState([])
  
  
 
  
  const getTrip = () => {
    axios
      .get("http://localhost:3000/api/trip/")
      .then((result) => {
        
        setTripData(result.data);
        console.log(result.data)
      })
      .catch((error) => console.log(error));
  };



  const deleteTrip =(name)=>{
    axios
    .delete(`http://localhost:3000/api/trip/${name}`)
    .then((result)=>{
      console.log(result,'hédhi li hachti beha')
      getTrip()})
    .catch((error)=>console.log(error))
  }

  
 
    useEffect(() => {
        
        getTrip();
      }, []);


const columns = [
{
    title :"Image",
    dataIndex:"imgUrl",
    render: (imgUrl) => <img src={imgUrl} alt="img" style={{ width: '100px', height: '100px' }} />
  },
{
  title :"Title",
  dataIndex:"name",
},
{
  title :"Discription",
  dataIndex:"desc",
},
{
  title :"Tags",
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
          
          
        <Link to={'/map/'+record.name}><EditOutlined /></Link>
          
          
        
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
