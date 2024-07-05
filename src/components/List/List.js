import React from 'react'
import Sider from '../Sider/Sider'
import Header from '../Header/Header'
import { useLocation } from 'react-router-dom'

const List = () => {
  const location=useLocation()
  const data=location.state
  console.log(data)
  if (data===null){
    return(
      <div>
      <Header/>
      <div className='homec1'>
        <Sider/>
        <h1>Lists</h1>
      </div>
    </div>
    )
  }
  return (
    <div>
      <Header/>
      <div className='homec1'>
        <Sider/>
        <h1>{data}</h1>
      </div>
    </div>
  )
}

export default List
