import {useState,useEffect} from 'react';
import { Table,Tag } from "antd";
import {  EyeOutlined ,DeleteOutlined,EditOutlined }from "@ant-design/icons";
import axios from 'axios';
import { Link,useParams } from "react-router-dom";



const point = () => {
  const [pointData,setPointData]=useState([])

  const {trip} = useParams()
  console.log(trip)
  const getpoints = () => {
    axios
      .get(`http://localhost:3000/api/point/${trip}`)
      .then((result) => {
        
       
        setPointData(result.data);
        
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
        
    getpoints();
  }, []);
  
  

  
  const deleteTrip =(id)=>{
    axios
    .delete(`http://localhost:3000/api/point/${trip}/${id}`)
    .then((result)=> getpoints())
    .catch((error)=>console.log(error))
  }

  
 
  

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
          
          
        
    <DeleteOutlined onClick={()=>deleteTrip(record.id)}/> 
      
      </>
     
  
),
}];
  return (
  
      <div className='table'>
        <Link to={'/pointForm'}><button>addone</button></Link>
        <Table dataSource={pointData.length > 0 ? pointData : []} columns={columns} />
      </div>
  
  )
}

export default point
