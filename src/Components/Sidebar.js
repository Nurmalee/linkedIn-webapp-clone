import React, { useState, useEffect } from 'react'
import './Sidebar.css';
import Avatar from '@material-ui/core/Avatar';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { useAuth } from '../contextAPI/userAuthContext' 
// import nurmalee_pics from '../app-logo/nurmalee__linkedIn.jpg';

const Sidebar = () => {
    const { currentUser, signOut } = useAuth()
    const [profileViews, setProfileViews] = useState(null);
    const [viewPost, setViewPost] = useState(null);

    useEffect(() => {
        const viewsNumber = Math.floor(Math.random() * 999);
        const postsNumber = Math.floor(Math.random() * 9999);
        setProfileViews(viewsNumber)
        setViewPost(postsNumber)
    }, [])

    const sidebarItem = (item1, item2) => {
        return (
            <div className="views">
                <p>{item1}</p>
                <p>{item2}</p>
            </div>
        )
    }

    const handleProfileSignOut = async () => {
        try {
            await  signOut()
        } catch (error) {
            // setErrorMessage(error.message);
            console.log(error.message);
        }
    }

    return (
        <section className='sidebar'>
            <div className='sidebar__profile'>
                <div className='sidebar__profile-banner'></div>
                <Avatar src={currentUser && currentUser.photoURL} className='sidebar__profile-pics' />
                <h3>{currentUser && currentUser.displayName}</h3>
                <p>Software Engineer (Full-stack Developer, Graphic Designer, Creative/Pencil Artist)</p>

                <button type='button' onClick={handleProfileSignOut} >SIGN OUT</button>
            </div>

            <div className="sidebar__views">
                {sidebarItem('Who viewed your profile', (profileViews))}
                {sidebarItem('Views of your post', (viewPost))}
                {sidebarItem(<LabelImportantIcon />, 'My items')}
            </div>

            <div className="sidebar__recent">
                <h3>Recent</h3>
                {sidebarItem('#', 'reactjs')}
                {sidebarItem('#', 'vuejs')}
                {sidebarItem('#', 'webDesignUi')}
                {sidebarItem('#', 'reactWeDdeveloper')}
                {sidebarItem('#', 'javaScript')}
                {sidebarItem('#', 'reactContextAPI')}
                {sidebarItem('#', 'reactHooks')}
                {sidebarItem('#', 'useState')}
                <h3>See all</h3>
                <h3>Discover more</h3>
            </div>
            
        </section>
    )
}

export default Sidebar
