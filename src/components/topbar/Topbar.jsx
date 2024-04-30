import React from 'react'
import './topbar.css'
import { Language, NotificationsNone, Settings } from '@material-ui/icons'
export default function Tobbar() {
    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topLeft'>
                    <span className='logo'>Nitish</span>
                </div>
                <div className='topRight'>
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className='topIconBag'>2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className='topIconBag'>2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />   
                    </div>
                    <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className='topAvatar'/>

                </div>
            </div>
        </div>
    )
}
