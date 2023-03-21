import axios from 'axios'
import {CloseCircleOutlined} from "@ant-design/icons"
import { Table,Input } from 'antd'
import { useState,useEffect } from 'react'
import Dashboard from './dashboard.jsx'
import Authorisation from './authorisation.jsx'

const users = () => {
    const[getUser,setGetUsers]=useState([])
    const [user, setUser] = useState(null)

    const getUsers=()=>{
        axios
        .get('http://localhost:3000/api/user')
        .then((result)=>
        setGetUsers(result.data))
           
        .catch((error)=>console.log(error))
    }

    const filterUser=(name)=>{
        if(name===""){
            getUsers()
        }
        else{
            if(getUser.length){
                setGetUsers(getUser.filter((element)=>{
                  if(element.name){
                    return element.name.toLowerCase().includes(name.toLowerCase())
                  }
                }))
            }
            }
           
        }
    

    
    useEffect(()=>{getUsers();const storedUser = JSON.parse(localStorage.getItem('user'))
    setUser(storedUser)},[])

    const columns = [
       
        {
          title :"Name",
          dataIndex:"name",
        },
        {
          title :"Adresse Mail",
          dataIndex:"email",
        },
        {
            title :"Action",
            dataIndex:"action",
            render:(_, record) => (
                <div >
                    <CloseCircleOutlined style={{color:"red"}}/>
              </div>  
          )}
        ]

  return (
    <div>
    { user ? (
      <>
        <div>
          <Input className='filtre'
            onClear={() => getUsers()}
            onPressEnter={(event) => filterUser(event.target.value)}
            placeholder='Search User'
          />
        </div>
        <div className='table'>
          <Table dataSource={getUser} columns={columns} />
        </div>
        <div>
          <Dashboard/>
        </div>
      </>
    ) : (
      <Authorisation />
    )}
  </div>
  )
}

export default users
