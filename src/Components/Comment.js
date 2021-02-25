import React from 'react'
import './Comment.css';
import Avatar from '@material-ui/core/Avatar';
// import nurmalee_pics from './app-logo/nurmalee__linkedIn.jpg';

const Comment = ({text, createdAt}) => {

    return (
        <div className="comment">
            <Avatar src='' />
            <div className="comment__content">
                <p className='comment__timestamp'>{new Date(createdAt?.toDate()).toUTCString()}</p>
                <p className='comment__text'>{text}</p>
            </div>
          
        </div>
    )
}

export default Comment
