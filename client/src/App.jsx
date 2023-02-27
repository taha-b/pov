import { useState } from 'react'
import { GoogleAuth } from './config/firebase'
function App() {
  console.log(import.meta.env.VITE_REACT_FIREBASE_API_KEY)
  return (
    <>
      <button onClick={()=>GoogleAuth()}>
      GOOGLE
      </button>
    </>
  )
}

export default App
