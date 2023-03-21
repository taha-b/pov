import {useState,useEffect} from 'react';
import { Table,Tag,Space, Input } from "antd";
import {  EyeOutlined ,DeleteOutlined,EditOutlined }from "@ant-design/icons";
import axios from 'axios';
import { Link,useNavigate,useLocation } from "react-router-dom";
import Dashboard from './dashboard.jsx';
import Authorisation from './authorisation.jsx';



const trip = () => {

  const navigate=useNavigate()
  const [tripData,setTripData]=useState([])
  const [user, setUser] = useState(null)
  
 
  
  const getTrip = () => {
    axios
      .get("http://localhost:3000/api/trip/")
      .then((result) => {
        setTripData(result.data)
      })
       .catch((error) => console.log(error));
  };

 
    const filtreTrips =(name)=>{
      if (name === "") {
      
        getTrip();
      } else {
      
        const filteredTrips = tripData.filter((element) =>
        element.name.toLowerCase().includes(name.toLowerCase())
        );
        setTripData(filteredTrips);
      }
    
  }

  

  const deleteTrip =(name)=>{
    axios
    .delete(`http://localhost:3000/api/trip/${name}`,{
      headers: {
        id:user.id
      }
    })
    .then((result)=>{
      console.log(result,'hédhi li hachti beha')
      getTrip()})
    .catch((error)=>console.log(error))
  }

  
 
    useEffect(() => {
        
        getTrip(); const storedUser = JSON.parse(localStorage.getItem('user'))
        setUser(storedUser)
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
  title :"Description",
  dataIndex:"desc",
},
{
  title :"Tags",
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
         <EyeOutlined onClick={()=>{ navigate(`/point/${record.name}`)}}/>
         
          
        <Link to={'/map/'+record.name}><EditOutlined /></Link>
          
          
        
    <DeleteOutlined onClick={()=>deleteTrip(record.name)}/>
    </Space>
      </div>
     
  
),
}];
  return (
    <div>
    {user ? (
      <>
        <div >
          <Input className='filtre' onClear={() => getTrip()} onPressEnter={(e) => filtreTrips(e.target.value)} placeholder="Search For Trip"/>
        </div>
        <div className='table'>
          <Table dataSource={tripData} columns={columns} pagination={{ pageSize: 3 }}/>
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

export default trip
