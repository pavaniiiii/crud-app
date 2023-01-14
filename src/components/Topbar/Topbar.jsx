import React from 'react'
import "./topbar.css"
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Topbar() {
  return (
    <div className='topbar'>
       <div className="topbar-left">
        <DownloadOutlinedIcon className='topbar-icon' />
       </div>
       <div className="topbar-right">
       <AccountCircleIcon className='topbar-icon' />
       </div>
    </div>
  )
}
