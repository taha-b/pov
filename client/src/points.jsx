import {useState,useEffect} from 'react';
import { Table,Tag,Space,Input } from "antd";
import {DeleteOutlined,EditOutlined }from "@ant-design/icons";
import axios from 'axios';
import {useParams,useNavigate } from "react-router-dom";
import Dashboard from './dashboard.jsx';



const point = () => {
  const [pointData,setPointData]=useState([])
  const navigate=useNavigate()

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

  const filtrePoints =(name)=>{
    if (name === "") {
      
      getpoints();
    } else {
      
      const filteredPoints = pointData.filter((element) =>
        element.name.includes(name)
      );
      setPointData(filteredPoints);
    }
  }
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
  title :"Description",
  dataIndex:"desc",
},
{
  title :"Tag",
  dataIndex:"tag",
  render: (tag) => (
    <>
      {tag?.map((element) => {
        const randomIndex = Math.floor(Math.random() * tag.length);
        const randomColor = ["yellow", "orange", "red", "blue", "green", "purple","magenta","volcano"][randomIndex];
        return <Tag color={randomColor} key={element}>{element}</Tag>;
      })}
      </>
    ),
},
{
  title :"Action",
  dataIndex:"action",
  render: (_, record) => (
      <div >
        <Space>
        <EditOutlined onClick={()=>navigate(`/map/${record.trip}/${record.id}`)}/>
        <DeleteOutlined onClick={()=>deleteTrip(record.id)}/> 
        </Space>
      </div>  
),
}];
  return (
  <div>
     <div >
      <Input className='filtre' onClear={() => getpoints()} onPressEnter={(e) => filtrePoints(e.target.value)} placeholder="Search For Point"/>
      </div>
      <div className='table'>
        <Table dataSource={pointData.length > 0 ? pointData : []} columns={columns} />
      </div>
      <div>
      <Dashboard/>
      </div>
      </div>
  
  )
}

export default point
