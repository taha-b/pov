
import { LogoutOutlined, PlusOutlined, UserOutlined} from '@ant-design/icons';
import { useNavigate,useLocation } from 'react-router-dom';


const Dashboard = () => {
const navigate=useNavigate()



 return (
    <div >
      <div className="navbar">
        <a 
        onClick={()=>{
          localStorage.removeItem('user');
          navigate('/login')

        }}>
          <LogoutOutlined 
          
          style={{ marginRight: '10px' }} />
          Log Out
        </a>
        <a onClick={()=>navigate("/map")}>
          <PlusOutlined style={{ marginRight: '10px' }} />
          Add New Trip
        </a>
        <a onClick={()=>navigate("/map")}>
          <PlusOutlined style={{ marginRight: '10px' }} />
          Add New Point
        </a>
        <a onClick={()=>navigate("/user")} >
          <UserOutlined  style={{ marginRight: '10px' }} />
          Users
        </a>
       
      </div>
   
    </div>
    
  );
  
};

export default Dashboard;