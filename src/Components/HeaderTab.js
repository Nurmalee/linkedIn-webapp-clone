import React from 'react'
import './HeaderTab.css'
// import Avatar from '@material-ui/core/Avatar';

const HeaderTab = ({title, Icon, Avatar}) => {
    return (
        <div className='headerTab'>
            {Icon && <Icon className='headerTab__icon' />}
            {Avatar && <Avatar src='https://avatars.githubusercontent.com/u/70635657?s=460&u=eea4bb2b6dff02e5993458cecc93018eca3bd17d&v=4' className='headerTab__icon'/>}
            <p>{title}</p>
        </div>
    )
}

export default HeaderTab
