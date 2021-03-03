import React, { useState, forwardRef } from 'react'
import './FeedItem.css';
// import nurmalee_pics from './app-logo/nurmalee__linkedIn.jpg';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Avatar from '@material-ui/core/Avatar';
import Comments from './Comments.js' 

const FeedItem = forwardRef(({name, text, postButton, createdAt, photoId, feedItemId, userPhoto, userEmail}, ref) => {
    const [likes, setLikes] = useState(null);
    const [showLikes, setShowLikes] = useState(false);
    const [showCommentBox, setShowCommentBox] = useState(false);
    const [firstToComment, setFirstToComment] = useState(true);
    // const [comment, setComment] = useState(null);

    const handleLikesUpdate = () => {
        setLikes(likes + 1);
        setShowLikes(true);
    }

    const handleComments = () => {
        setFirstToComment(false);
        setShowCommentBox(!showCommentBox);
        // setComment(comment + 1);
    }

    return (
        <section ref={ref} className='feedItem'>
            <div className="feedItem__header">
                <Avatar src={userPhoto} className="feedItem__header-pics"> {userEmail[0]} </Avatar>
                <div className="feedItem__header-title">
                    <p>{name}</p>
                    <p>{userEmail}</p>
                    <p>{new Date(createdAt?.toDate()).toUTCString()} </p>
                </div>
            </div>

            {text && <p className="feedItem__textInput">{text}</p>}
            
            {photoId && 
                <div className="feedItem__image">
                    <img src={photoId} alt="uploadedImage"/>
                </div>
            }

            {showLikes && <h3 className="feedItem__likesComments"> <FavoriteIcon className="feedItem__likeIcon"/> {likes} </h3>}

            <div className="feedItem__Icons">
                <div className="feedItem__delete" onClick={handleLikesUpdate} >
                    <ThumbUpOutlinedIcon />
                    <h3>Like</h3>
                </div>
                <div className="feedItem__delete" onClick={handleComments} >
                    <CommentOutlinedIcon />
                    <h3>Comment</h3>
                </div>
                {postButton((ShareOutlinedIcon), "Share")}
                {postButton((SendOutlinedIcon), "Send")}
            </div>

            {showCommentBox && <Comments feedItemId={feedItemId} /> }
            
            {firstToComment && <p className="feedItem__firstToComment"> Be the first to comment on this </p>} 
            
        </section>
    )
})

export default FeedItem
