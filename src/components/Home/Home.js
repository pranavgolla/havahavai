import React from 'react'
import Header from '../Header/Header'
import Sider from '../Sider/Sider'
import './Home.css'

const Home = () => {
  return (
    <div>
      <Header/>
      <div className='homec1'>
        <Sider/>
        <h1>Home</h1>
      </div>
    </div>
  )
}

export default Home
