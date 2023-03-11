
import { LogoutOutlined, PlusOutlined, HeartOutlined, ShareAltOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import React from "react";


const Dashboard = () => {

    

  return (
    <div >
      <div className="navbar">
        <a href="#" >
          <LogoutOutlined style={{ marginRight: '10px' }} />
          Log Out
        </a>
        <Link to='/addTrip'><a>
          <PlusOutlined style={{ marginRight: '10px' }} />
          Add New POV
        </a></Link>
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