import React from 'react'
import { Link } from 'react-router-dom'
import './Sider.css'
import { IoMdHome } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";


const listItems = ["List 1", "List 2", "List 3"]

const Sider = () => {
  return (
    <div className='siderc1'>
      <Link className='link' to='/'><IoMdHome/>   Home</Link>
      <Link className='link' to='/dashboard'><RxDashboard/>Dashboard</Link>
      <Link className='linkservices' to='/airports'>Services</Link>
      <Link className='link' to='/airports'>Airports</Link>
      <Link className='link' to='/videos'>Videos</Link>
      <Link className='linkservices' to='/list/0'>Others</Link>
      {listItems.map((item, index) => (
        <Link className='link' key={index} to={`/list/${index}`} state={item}>{item}</Link>
      ))}
    </div>
  )
}

export default Sider
