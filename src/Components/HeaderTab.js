import React from 'react'
import './HeaderTab.css'
import { useAuth } from '../contextAPI/userAuthContext' 
// import Avatar from '@material-ui/core/Avatar';

const HeaderTab = ({title, Icon, Avatar}) => {
    const { currentUser } = useAuth()
    return (
        <div className='headerTab'>
            {Icon && <Icon className='headerTab__icon' />}
            {Avatar && <Avatar src={currentUser && currentUser.photoURL} className='headerTab__icon'/>}
            <p>{title}</p>
        </div>
    )
}

export default HeaderTab
