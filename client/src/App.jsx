import React from 'react'
import { GoogleAuth } from './config/firebase'
import {Button,Input} from 'antd'

import "./index.css"




function App() {
  console.log(import.meta.env.VITE_REACT_FIREBASE_API_KEY)
  return (
    <div className='hero'>
      <nav>
        <img src="../public/img/logo.png" className='logo'/>
      <a href="#">Home</a>
		<a href="#">What we do</a>
		<a href="#">Why us</a>
		<a href="#">Our work</a>
		<Button type='primary'>Sign up</Button>
    <Button type='primary' onClick={()=>GoogleAuth()}>
      Sign in
      </Button>
      </nav>
      
     
      
      <div className='div'>
        <div>
        <h1>Looking to explore new destinations<br/>and plan your next adventure?<br/>
      Look no further than our app!</h1>
      <img className='android' src='../public/img/download.png'/>
      
      </div>
      
      <img src="../public/img/map.png" className='map'/>
      </div>
      
      {/* <h3>With our app, you can:</h3>
      <ul>
        <li>save time and organize your trip</li>
        <li>get suggestions based on intrest points</li>
        <li> Connect <Button type='primary' className='start' >Get Started</Button></li>
      </ul> */}
      <div>
        <h1 className='center'>what we do</h1>
        <div className='pov-forms'>
      <div className='pov-form'><img src="../public/img/discover.png"  className='form-img'/><h2>Discover amazing destinations </h2> Encourage users to explore new places and find hidden gems.</div>
      <div className='pov-form'><img src="../public/img/planning.jpg"  className='form-img'/><h2>Plan your perfect trip</h2> Offer tools and resources to help users plan their travel itinerary.</div>
      <div className='pov-form'><img src="../public/img/creat.png"  className='form-img'/><h2>Create unforgettable memories</h2> Emphasize the transformative power of travel and the importance of creating lasting memories.</div>
      </div>
      
        
        <div className='right'>
        <img src="../public/img/sign-up.png"  className='join'/>
        <div className='input'>
        <Input className='Sign' placeholder='Full Name'></Input>
        <Input className='Sign' placeholder='Adress Mail'></Input>
        <Input className='Sign' placeholder='Passeword'></Input>
        <Input className='Sign' placeholder='Check Passeword'></Input>
        <Button type='primary' className='Sign'>Sign up for free</Button>
        
        </div>
        </div>
      
      </div>
      <div className='why'>
      <h1 className='center'>Why POV </h1>
      </div>
      <div className='pov-forms'>
      <div className='pov-form'>
      <img src="../public/img/dolar.jpg"  className='form-img'/>
        <h2>Price</h2>
        <p>Save your money it's for free</p>
        </div>
      <div className='pov-form'><img src="../public/img/settings.png"  className='form-img'/><h2>User-friendly interface</h2> Emphasize that your app has a user-friendly interface that makes it easy for users to find the information they need.</div>
      <div className='pov-form'><img src="../public/img/trust.png"  className='form-img'/><h2>Trusted recommendations</h2> Highlight that your app offers trusted recommendations from travel experts and real travelers, making it easy for users to plan and book their trips with confidence.</div>
      
</div>
<h1 className='center'>Join thousands of happiest customers</h1>
        <div className='pov-forms'>
      <div className='pov-form'><img src="../public/img/chat.png"  className='form-img'/><h2>Discover amazing destinations</h2>Encourage users to explore new places and find hidden gems.</div>
      <div className='pov-form'><img src="../public/img/chat.png"  className='form-img'/><h2>Plan your perfect trip</h2>Offer tools and resources to help users plan their travel itinerary.</div>
      <div className='pov-form'><img src="../public/img/chat.png"  className='form-img'/><h2>Create unforgettable memories</h2>Emphasize the transformative power of travel and the importance of creating lasting memories.</div>
      </div>
      <div className='separator'></div>
      <footer>
      <img src="../public/img/logo.png" className='logo'/>
        <ul>
          <li><h2 className='title'>Company</h2></li>
          <li>About us</li>
          <li>Features</li>
          <li>Pricing</li>
        </ul>
        <ul>
          <li><h2 className='title'>Application</h2></li>
          <li>Help center</li>
          <li>Contact</li>
        </ul>
        <ul>
          <li><h2 className='title'>Ressources</h2></li>
          <li>FAQ</li>
          <li>Testimonial</li>
        </ul>
      </footer>
     
    </div>
  )
}

export default App
