import React from 'react'
import { Button, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import "./index.css"
import { Link} from "react-router-dom";

const signup = () => {
  return (
    <div>
      <form className="forms">
        <h1 className="welcome">WELCOME!</h1>
        <Input
          className="site-form-item-icon"
          onChange={(event) => setFullName(event.target.value)}
          prefix={<UserOutlined />}
          placeholder="Full Name"
        />
        <Input
          className="site-form-item-icon"
          onChange={(event) => setAdresseMail(event.target.value)}
          prefix={<UserOutlined />}
          type="addresseMail"
          placeholder="Adresse Mail"
        />
        <Input
          className="site-form-item-icon"
          onChange={(event) => setPasseword(event.target.value)}
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
        <Input
          className="site-form-item-icon"
          onChange={(event) => setCheckPasseword(event.target.value)}
          prefix={<LockOutlined />}
          type="password"
          placeholder="tap again your Password"
        />
        <Button
        //   onClick={myClick}
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          Sign Up
        </Button>
      </form>
    </div>
  )
}

export default signup
