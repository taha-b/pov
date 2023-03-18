import React from 'react'
import {Button} from 'antd'
import { Link} from "react-router-dom";

const authorisation = () => {
  return (
    <div>
      <div  style={{backgroundColor:'#C8C8C8', position: 'relative', width: '100%', height: '100vh'}}>
        <img className='checks' src='../public/img/uncheck.png'/>
    <div className='formsgs'>
      <h1 className='awesomes'>Oops !</h1>
      <h2>You are not a user <br/> you cannot use this page</h2>
      <Link to={'/login'}><Button type='primary' className='downloadapp'>Login</Button></Link>
    </div>
    </div>
    </div>
  )
}

export default authorisation
