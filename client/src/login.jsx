import React from 'react'
import { Button, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link} from "react-router-dom";
import "./index.css"
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const login = () => {
  const [name,setName]=useState('')
  const [password,setPassword]=useState('')
  const navigate = useNavigate()

  const login = function(){
    axios.post("http://localhost:3000/api/admin",  {
      name,
      password
    })
    .then((result)=>{
      if(result.data.length){
        localStorage.setItem('user', JSON.stringify(result.data[0]));
        
      }
    })

    
  }
  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      backgroundImage:
        'url("https://wallpapercave.com/wp/wp2939993.jpg")',
      backgroundSize: "cover",
    }}>
      <form className="forms">
        <h1 className="welcome">WELCOME Back !</h1>

        <Input
          className="site-form-item-icon"
          onChange={(event) => setName(event.target.value)}
          prefix={<UserOutlined />}
          placeholder="Adresse Mail"
        />
        <Input
          className="site-form-item-icon"
          onChange={(event) => setPassword(event.target.value)}
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />

        <Button
          onClick={() => login()}
          // type="primary"
          htmlType="submit"
          className="login-form-button"
         
        >
          Login
        </Button>
        <Link to="/signUp"><h2 className="register-now">
          Signup Now !
        </h2></Link>
      </form>
    </div>
  )
}

export default login
