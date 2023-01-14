import React from 'react'
import "./home.css"
import { Content } from '../components/Content/Content'
import Sidebar from '../components/Sidebar/Sidebar'
import Chart from '../components/Chart/Chart'
import Topbar from '../components/Topbar/Topbar'
import Dummy from '../components/Dummy/Dummy'

export default function Home() {
  return (
    <div className='home'>
         <div className='sidebar'>
       <Sidebar /> 
       </div> 
       <div className="main-container">
        <Topbar />
        <Content/>
        <div className="container">
         <Dummy/>
         <Chart />
        </div>         
       </div> 
    </div>
  )
}
