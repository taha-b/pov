
import { LogoutOutlined, PlusOutlined, HeartOutlined, ShareAltOutlined} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import React from "react";


const Dashboard = () => {
const navigate=useNavigate()
    

  return (
    <div >
      <div className="navbar">
        <a >
          <LogoutOutlined style={{ marginRight: '10px' }} />
          Log Out
        </a>
        <a onClick={()=>navigate("/map")}>
          <PlusOutlined style={{ marginRight: '10px' }} />
          Add New POV
        </a>
        <a href="#" >
          <HeartOutlined style={{ marginRight: '10px' }} />
          Favorite
        </a>
        <a href="#" >
          <ShareAltOutlined style={{ marginRight: '10px' }} />
          Share
        </a>
      </div>
     
      
      
      
    </div>
    
  );
  
};

export default Dashboard;