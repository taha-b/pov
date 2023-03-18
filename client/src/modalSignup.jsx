import { Button } from 'antd'
import React from 'react'

const modalSignup = () => {
  return (
    <div  style={{backgroundColor:'#C8C8C8', position: 'absolute', width: '100%', height: '100vh'}}>
        <img className='check' src='../public/img/checkkk.png'/>
    <div className='formsg'>
      <h1 className='awesome'>Awesome !</h1>
      <h2>Your Account has been Created <br/>Please Download The Application</h2>
      <Button type='primary' className='downloadapp'>Get the App</Button>
    </div>
    </div>
  )
}

export default modalSignup
