import React from 'react'
import './HeaderTab.css'

const HeaderTab = ({title, Icon}) => {
    return (
        <div className='headerTab'>
            <Icon className='headerTab__icon' />
            <p>{title}</p>
        </div>
    )
}

export default HeaderTab
