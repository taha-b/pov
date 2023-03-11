import {useState,useEffect} from 'react';
import { Table,Tag } from "antd";
import {  EyeOutlined ,DeleteOutlined,EditOutlined }from "@ant-design/icons";
import axios from 'axios';
import { Link,useLocation } from "react-router-dom";



const trip = () => {
  const [pointData,setPointData]=useState([])

  const location = useLocation()
  console.log(location?.pathname.slice(7),"aze")
  const getpoints = (param) => {
    axios
      .get(`http://localhost:3000/api/point/${location?.pathname.slice(7)}`)
      .then((result) => {
        
       
        console.log(result.data)
        setPointData(result.data);
        
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
        
    getpoints();
  }, []);
  
  

  // const addNewPoint=()=>{
    
  //   axios
  //   .post('http://localhost:3000/api/point',{name : newTitle,desc : newDiscription,tag : newTag})
  //   .then((result)=>{
      
  //     setNewTitle("")
  //   setNewDiscription("")
  //   setNewTag([])
  //   })
  //   .catch((error)=>console.log(error,'zzz'))
  // }

  // const deleteTrip =(name)=>{
  //   axios
  //   .delete(`http://localhost:3000/api/trip/${name}`)
  //   .then((result)=>console.log(result))
  //   .catch((error)=>console.log(error))
  // }

  
 
  //   useEffect(() => {
        
  //       getTrip();
  //     }, []);


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
        
         <EyeOutlined onClick={() => {
            // handle view action
          }}/>
          
          
        <Link to='/addTrip'><EditOutlined /></Link>
          
          
        
    {/* <DeleteOutlined onClick={()=>deleteTrip(record.name)}/> */}
      
      </>
     
  
),
}];
  return (
  
      <div className='table'>
      <Table dataSource={pointData} columns={columns} />
      </div>
  
  )
}

export default trip
