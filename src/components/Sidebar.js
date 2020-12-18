import React from 'react'
import Avatar from "@material-ui/core/Avatar"
import {Link} from "react-router-dom"
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PermContactCalendarOutlinedIcon from '@material-ui/icons/PermContactCalendarOutlined';
import PhotoOutlinedIcon from '@material-ui/icons/PhotoOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="content">
                <div className="sidebar-header">
<Avatar/>
<h2>User Name</h2>
<p>Jamune,Tanahun</p>
                </div>
                <div className="sidebar-body">

                    <ul className="navbar">
                        <li className="navlist">
                            <Link to="/">
                                <HomeOutlinedIcon/>
                                <p>Home</p>
                            </Link>
                        </li>
                           <li className="navlist">
                            <Link to="/setting">
                                <SettingsOutlinedIcon/>
                                <p>Settings</p>
                            </Link>
                        </li>
                           <li className="navlist">
                            <Link to="/gallery">
                               <PhotoOutlinedIcon/>
                                <p>Gallery</p>
                            </Link>
                        </li>
                           <li className="navlist">
                            <Link to="/about">
                               <InfoOutlinedIcon/>
                                <p>About Us</p>
                            </Link>
                        </li>
                           <li className="navlist">
                            <Link to="/contact">
                                <PermContactCalendarOutlinedIcon/>
                                <p>Contact Us</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
