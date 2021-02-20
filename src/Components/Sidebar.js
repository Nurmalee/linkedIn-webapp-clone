import React, { useState, useEffect } from 'react'
import './Sidebar.css';
import Avatar from '@material-ui/core/Avatar';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';

const Sidebar = () => {

    const sidebarItem = (item1, item2) => {
        return (
            <div className="views">
                <p>{item1}</p>
                <p>{item2}</p>
            </div>
        )
    }

    return (
        <section className='sidebar'>
            <div className="sidebar__profile">
                <div className="sidebar__profile-banner"></div>
                <Avatar src='' className="sidebar__profile-pics" />
                <h3>Nurudeen Lawal</h3>
                <p>Software Engineer (Full-stack Developer, Graphic Designer, Creative/Pencil Artist)</p>
            </div>

            <div className="sidebar__views">
                {sidebarItem("Who viewed your profile", 5000)}
                {sidebarItem("Views of your post", 5000)}
                {sidebarItem(<LabelImportantIcon />, "My items")}
            </div>

            <div className="sidebar__recent">
                <h3>Recent</h3>
                {sidebarItem("#", "reactjs")}
                {sidebarItem("#", "vuejs")}
                {sidebarItem("#", "webDesignUi")}
                {sidebarItem("#", "reactWeDdeveloper")}
                {sidebarItem("#", "javaScript")}
                {sidebarItem("#", "reactContextAPI")}
                {sidebarItem("#", "reactHooks")}
                {sidebarItem("#", "useState")}
                <h3>See all</h3>
                <h3>Discover more</h3>
            </div>
            
        </section>
    )
}

export default Sidebar
