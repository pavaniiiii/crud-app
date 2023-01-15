import React from 'react'
import "./sidebar.css"
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import HomeIcon from '@mui/icons-material/Home';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import BedroomParentOutlinedIcon from '@mui/icons-material/BedroomParentOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import LockClockOutlinedIcon from '@mui/icons-material/LockClockOutlined';
import Groups3OutlinedIcon from '@mui/icons-material/Groups3Outlined';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import GraphicEqOutlinedIcon from '@mui/icons-material/GraphicEqOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';


export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar-wrapper">
          <div className="sidebar-header">
           <hr style={{color:"red", height:"10px", marginTop:"50px" }}/>
          </div>
          <div className="sidebar-list">
            <ul className='sidebar-list-menu'>
               <li className='sidebar-list-item'>
                 <HomeIcon className='sidebar-icon' />
                 <span className='sidebar-list-span'>Dashboard</span>
               </li>
               <li className='sidebar-list-item'>
                 <CalendarMonthOutlinedIcon className='sidebar-icon' />
                 <span className='sidebar-list-span'>Calender</span>
               </li>

               <li className='sidebar-list-item'>
                 <ManageSearchOutlinedIcon className='sidebar-icon'/>
                 <span className='sidebar-list-span'>Channel Manager</span>
               </li>
               <li className='sidebar-list-item'>
                 <LocalGroceryStoreOutlinedIcon className='sidebar-icon'/>
                 <span className='sidebar-list-span'>Market Place</span>
               </li>
               <li className='sidebar-list-item'>
                 <CurrencyRupeeOutlinedIcon className='sidebar-icon'/>
                 <span className='sidebar-list-span'>Rates&Availability</span>
               </li>
               <li className='sidebar-list-item'>
                 <BedroomParentOutlinedIcon className='sidebar-icon'/>
                 <span className='sidebar-list-span'>Room Setting</span>
               </li>
               <li className='sidebar-list-item'>
                 <Diversity3OutlinedIcon className='sidebar-icon'/>
                 <span className='sidebar-list-span'>Amenities</span>
               </li>
               <li className='sidebar-list-item'>
                 <BalanceOutlinedIcon className='sidebar-icon'/>
                 <span className='sidebar-list-span'>POS</span>
               </li>
               <li className='sidebar-list-item'>
                 <LockClockOutlinedIcon className='sidebar-icon' />
                 <span className='sidebar-list-span'>Acess Mangement</span>
               </li>
               <li className='sidebar-list-item'>
                 <Groups3OutlinedIcon className='sidebar-icon' />
                 <span className='sidebar-list-span'>Association</span>
               </li>
               <li className='sidebar-list-item'>
                 <PercentOutlinedIcon className='sidebar-icon'/>
                 <span className='sidebar-list-span'>Bulk-Offers</span>
               </li>
               <li className='sidebar-list-item'>
                 <GraphicEqOutlinedIcon className='sidebar-icon'/>
                 <span className='sidebar-list-span'>Reports</span>
               </li>
               <li className='sidebar-list-item'>
                 <SettingsSuggestOutlinedIcon className='sidebar-icon'/>
                 <span className='sidebar-list-span'>Settings</span>
               </li>
            </ul>
          </div>
        </div>
    </div>
  )
}
