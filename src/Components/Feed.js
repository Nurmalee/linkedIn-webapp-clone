import React, { useState, useEffect }  from 'react';
import './Feed.css';
import ImageIcon from '@material-ui/icons/Image';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import EventIcon from '@material-ui/icons/Event';
import AssignmentIcon from '@material-ui/icons/Assignment';
import FeedItem from './FeedItem';

import FeedInputForm from './FeedInputForm';

const Feed = () => {
    const [feed, setFeed] = useState([]);

    useEffect(() => {
        feed.length > 0 ? document.title = `(${feed.length}) Feed | LinkedIn` :  document.title = `LinkedIn`;
    }, [feed])

    // useEffect(() => {
    //     effect
    // }, [input])


    const handleFeedDelete = (id) => {
        const newFeed = feed.filter(feedItem => feedItem.id !== id)
        setFeed(newFeed);
    }

    const postButton = (Icon, title) => {
        return (
            <div className="post__button">
                <Icon className="post__button-Icon"/>
                <h3>{title}</h3>
            </div>
        )
    }

    return (
        <section className='post'>
            <div className="post__topContents">
                <FeedInputForm />
                <div className="post__buttons">
                    {postButton((ImageIcon), "Photo")}
                    {postButton((VideoLibraryIcon), "Video")}
                    {postButton((EventIcon), "Event")}
                    {postButton((AssignmentIcon), "Write Article")}
                </div>
            </div>

            <div className="post__body">
                {feed.map(feedItem => (
                    <FeedItem text={feedItem.input} postButton={postButton} handleFeedDelete={handleFeedDelete} id={feedItem.id} key={feedItem.id}/>
                ))}
            </div>
            
        </section>
    )
}

export default Feed
