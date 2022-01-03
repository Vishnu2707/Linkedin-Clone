import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Sidebar.css"

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDBBfHw%3D&w=1000&q=80" alt="" />
                <Avatar />
                <h2>Abhinav Sujeesh</h2>
                <h4>abhinav.sujeesh261@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,453</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on posts</p>
                    <p className="sidebar__statNumber">4,453</p>
                </div>
                <div className="sidebar__bottom">
                    <p>Memories</p>
                    <img src="https://scontent.fccj2-2.fna.fbcdn.net/v/t1.6435-9/47580946_1086900598156096_7980583766122823680_n.jpg?_nc_cat=101&amp;ccb=1-3&amp;_nc_sid=8bfeb9&amp;_nc_ohc=gqg2TwEdBbUAX-1vLMe&amp;_nc_ht=scontent.fccj2-2.fna&amp;oh=ed8d161a9e23abbcb04496f65f44a4a5&amp;oe=60F89EAB" alt="" />
                    <img src="https://scontent.fccj2-1.fna.fbcdn.net/v/t1.18169-9/29683878_1972777386372100_1221048715554639505_n.jpg?_nc_cat=104&amp;ccb=1-3&amp;_nc_sid=8bfeb9&amp;_nc_ohc=2gMapqXNsvEAX9b7TC9&amp;_nc_ht=scontent.fccj2-1.fna&amp;oh=7e9728bed8643cea758894f5d7aa03aa&amp;oe=60FA67B0" alt="" />
                </div>
            </div>
            
        </div>
    )
}

export default Sidebar
