import React, { useState } from "react";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { NavLink } from "react-router-dom";
import sidebarImage from '../images/schedule-mate-icon.png'; // Import the image

const Sidebar = ({children}) =>{
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/home",
            name:"Home",
            icon: <HomeOutlinedIcon />
        },
        {
            path:"/entries",
            name:"Entries",
            icon: <AddToPhotosOutlinedIcon />
        },
        {
            path:"/schedule",
            name:"Schedule",
            icon: <EventAvailableOutlinedIcon />
        },
        {
            path:"/reports",
            name:"Reports",
            icon: <DescriptionOutlinedIcon />
        },
        {
            path:"/profile",
            name:"Profile",
            icon: <PersonOutlineOutlinedIcon />
        },
    ];

    return (
        <div className="container">
            <div style={{width: isOpen ? "200px" : "50px"}}className="sidebar">
                <div className="top_section">
                    <img src={sidebarImage} alt="Logo" className="logo" style={{ display: isOpen ? "block" : "none" }} onClick={toggle} />
                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                        <MenuOutlinedIcon onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link" activeClassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>
                {children}
            </main>
        </div>
    );
};
export default Sidebar;
