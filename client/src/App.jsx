import {useEffect,useRef} from 'react'
import {Button,Input} from 'antd'
import { Link,useNavigate } from 'react-router-dom'
import lottie from 'lottie-web'
import "./index.css"
import mapData from '../map.json'




function App() {
  
  console.log(import.meta.env.VITE_REACT_FIREBASE_API_KEY)
  const navigate=useNavigate()
  const container = useRef(null)

  useEffect(()=>{
    lottie.loadAnimation({
      container : container.current,
      render:'svg',
      loop:true,
      autoplay:true,
      animationData:mapData
    })
  },[])
  return (
    <div className='hero'>
      <nav>
        <img src="../public/img/logo.png" className='logo'/>
        <Link to={'/trip'}><a >Work</a></Link>
        <a onClick={() => document.getElementById('what-we-do').scrollIntoView({ behavior: 'smooth' })}>What we do</a>
		<a onClick={() => document.getElementById('why-pov').scrollIntoView({ behavior: 'smooth' })}>Why us</a>
		<a onClick={() => document.getElementById('center').scrollIntoView({ behavior: 'smooth' })}>Testimonals</a>
		<Link to={'/signup'}><Button type='primary'>Sign up</Button></Link>
    </nav>
      
     
      
      <div className='div'>
        <div>
        <h1>Looking to explore new destinations<br/>and plan your next adventure?<br/>
      Look no further than our app!</h1>
      <img className='android' src='../public/img/download.png'/>
      
      </div>
      
      <div className='container' ref={container}></div>
      {/* <img src="../public/img/map.png" className='map'/> */}
      </div>
      
     
      <div>
        <h1 id="what-we-do">what we do</h1>
        <div className='pov-forms'>
      <div className='pov-form'><img src="../public/img/discover.png"  className='form-img'/><h2>Discover amazing destinations </h2> Encourage users to explore new places and find hidden gems.</div>
      <div className='pov-form'><img src="../public/img/planning.jpg"  className='form-img'/><h2>Plan your perfect trip</h2> Offer tools and resources to help users plan their travel itinerary.</div>
      <div className='pov-form'><img src="../public/img/creat.png"  className='form-img'/><h2>Create unforgettable memories</h2> Emphasize the transformative power of travel and the importance of creating lasting memories.</div>
      </div>
      
        
        <div className='right'>
        <img src="../public/img/sign-up.png"  className='join'/>
        <div className='input'>
        <Input className='Sign' placeholder='Full Name' onClick={()=>navigate('/signup')}></Input>
        <Input className='Sign' placeholder='Adress Mail' onClick={()=>navigate('/signup')}></Input>
        <Input className='Sign' placeholder='Passeword' onClick={()=>navigate('/signup')}></Input>
        <Input className='Sign' placeholder='Check Passeword' onClick={()=>navigate('/signup')}></Input>
        <Link Link to={'/signup'}><Button type='primary' className='Sign'>Sign up for free</Button></Link>
        
        </div>
        </div>
      
      </div>
      <div className='why'>
      <h1 id='why-pov'>Why POV </h1>
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
<h1 id='center'>Join thousands of happiest customers</h1>
        <div className='pov-forms'>
      <div className='pov-form'>
        
        <img src="../public/img/chat.png"  className='form-img' />
        
        
        <h2>Mark Zuckerberg</h2>
        Your work is very good.
        </div>
      <div className='pov-form'>
       
        <img src="../public/img/chat.png"  className='form-img'/>
       
        <h2>Elon Musk</h2>
        I love Tunisia<br/>Thx to you guys.
        </div>
      <div className='pov-form'>
       
        <img src="../public/img/chat.png"  className='form-img'/>
       
        <h2>Kanye West</h2>
        I love it it's easy to use.
        </div>
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
