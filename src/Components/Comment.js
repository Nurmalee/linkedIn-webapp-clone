import React, { forwardRef } from 'react'
import './Comment.css';
import Avatar from '@material-ui/core/Avatar';

const Comment = forwardRef(({text, createdAt, name, userPhoto, userEmail}, ref) => {

    return (
        <div ref={ref} className="comment">
            <Avatar src={userPhoto}> {userEmail[0]} </Avatar>
            <div className="comment__content">
                <p className='comment__name'>{name} <i>({new Date(createdAt?.toDate()).toUTCString()})</i> </p>
                <p className='comment__text'>{text}</p>
            </div>
          
        </div>
    )
})

export default Comment
