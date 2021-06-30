import React from 'react'
import './Header.css'
import HeaderOption from './HeaderOption';
import {
    Search as SearchIcon,
    Home as HomeIcon,
    SupervisorAccount as SupervisorAccountIcon,
    BusinessCenter as BusinessCenterIcon,
    Chat as ChatIcon,
    Notifications as NotificationsIcon,
} from '@material-ui/icons'

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />

                <div className="header__search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />

                <HeaderOption avatar="https://i.ibb.co/KN1FKr3/SaifAli.jpg" title="Me" />
            </div>
        </div>
    )
}

export default Header
