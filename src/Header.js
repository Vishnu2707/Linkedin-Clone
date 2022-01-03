import React from 'react';
import "./Header.css"
import HeaderOption from "./HeaderOption"
import HomeIcon from "@material-ui/icons/Home";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";


function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <h1 className="logo__name">Esprit_de_liberte</h1>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption avatar="https://scontent.fccj2-2.fna.fbcdn.net/v/t31.18172-8/26756280_855909624588529_2636958931742668215_o.jpg?_nc_cat=111&amp;ccb=1-3&amp;_nc_sid=09cbfe&amp;_nc_ohc=Ie00pIaKEjEAX_OPPfS&amp;_nc_oc=AQmkQ9aK6FZtwjnYD7RyrDWzIoMoYZ5rXLCjdsPTeToL4ALcZThvj62eoHlGK4Npy6tvu1p6bDBOEHNII_2G9lgD&amp;_nc_ht=scontent.fccj2-2.fna&amp;oh=e6cb9e31d88935976d41de40e25855ed&amp;oe=60F8C5AD" title="Me" />
            </div>
        </div>
    )
}

export default Header
