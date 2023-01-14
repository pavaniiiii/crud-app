import React from 'react'
import "./content.css"
import SellIcon from '@mui/icons-material/Sell';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CallIcon from '@mui/icons-material/Call';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


export const Content = () => {
  return (
    <div className='content'>
       <h4> DashBoard</h4> 
        <div className="featured">
          <div className="featuredinfo">
            <div className="featured-menu">
            <SellIcon className='featured-icon' /> 
            <span className='featured-span'>Orders</span>
               </div>         
             <div className="featured-cost">
              <span className='featured-cost-info'>450</span>
               <input type="range"  min="0" value="60"
               max="100"  className='featured-input1' />
             </div>
             <div className="featured-decs">
              <span className='featured-desc-span'>60% increase in last 28 days</span>
             </div>
          </div>
          <div className="featuredinfo">
          <div className="featured-menu">
            <CalendarMonthOutlinedIcon className='featured-icon' /> 
            <span className='featured-span'>New Booking</span>
            </div> 
             <div className="featured-cost">
              <span className='featured-cost-info'>155</span>
               <input type="range"  min="0" value="40"
               max="100"  className='featured-input2' />
             </div>
             <div className="featured-decs">
              <span className='featured-desc-span'>40% increase in last 28 days</span>
             </div>
          </div>
          <div className="featuredinfo">
          <div className="featured-menu">
            <CallIcon className='featured-icon' /> 
            <span className='featured-span'>Enquiry</span>
            </div> 
             <div className="featured-cost">
              <span className='featured-cost-info'>52</span>
               <input type="range"  min="0" 
               max="100" value="80" className='featured-input3' />
             </div>
             <div className="featured-decs">
              <span className='featured-desc-span'>80% increase in last 28 days</span>
             </div>
          </div>
          <div className="featuredinfo">
          <div className="featured-menu">
            <CurrencyRupeeIcon className='featured-icon' /> 
            <span className='featured-span'>Total Earnings</span>
            </div> 
             <div className="featured-cost">
              <span className='featured-cost-info'>13,921 INR</span>
               <input type="range"  min="0" 
               max="100" value="65" className='featured-input4' />
             </div>
             <div className="featured-decs">
              <span className='featured-desc-span'>65% increase in last 28 days</span>
             </div>
          </div>
        </div>
    </div>
  )
}

