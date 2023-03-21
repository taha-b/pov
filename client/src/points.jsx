import {useState,useEffect} from 'react';
import { Table,Tag,Space,Input } from "antd";
import {DeleteOutlined,EditOutlined }from "@ant-design/icons";
import axios from 'axios';
import {useParams,useNavigate } from "react-router-dom";
import Dashboard from './dashboard.jsx';
import Authorisation from './authorisation.jsx';



const point = () => {
  const [pointData,setPointData]=useState([])
  const [user, setUser] = useState({})
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
      element.name.toLowerCase().includes(name.toLowerCase())
      );
      setPointData(filteredPoints);
    }
  }
  useEffect(() => {
        
    getpoints();
    const storedUser = JSON.parse(localStorage.getItem('user'))
      setUser(storedUser)
  }, []);
  
  

  
  const deleteTrip =(id)=>{
    axios
    .delete(`http://localhost:3000/api/point/${trip}/${id}`,{
      headers: {
        id:user.id
      }
    })
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
    {user ? (
      <>
        <div >
          <Input className='filtre' onClear={() => getpoints()} onPressEnter={(e) => filtrePoints(e.target.value)} placeholder="Search For Point"/>
        </div>
        <div className='table'>
          <Table dataSource={pointData.length > 0 ? pointData : []} columns={columns} pagination={{ pageSize: 3 }}/>
        </div>
        <div>
          <Dashboard/>
        </div>
      </>
    ) : (
      <Authorisation />
    )}
  </div>
  
  )
}

export default point
