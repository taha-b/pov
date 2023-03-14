import React from 'react'
import { Button, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link} from "react-router-dom";
import "./index.css"

const login = () => {
  return (
    <div>
      <form className="forms">
        <h1 className="welcome">WELCOME Back !</h1>

        <Input
          className="site-form-item-icon"
          onChange={(event) => setAdresseMail(event.target.value)}
          prefix={<UserOutlined />}
          placeholder="Adresse Mail"
        />
        <Input
          className="site-form-item-icon"
          onChange={(event) => setPasseword(event.target.value)}
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />

        <Button
          onClick={() => myClick()}
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          Login
        </Button>
        <div className="register-now">
          <Link to="/signUp">register now!</Link>
        </div>
      </form>
    </div>
  )
}

export default login
