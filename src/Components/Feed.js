import React, { useState, useEffect }  from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import EventIcon from '@material-ui/icons/Event';
import AssignmentIcon from '@material-ui/icons/Assignment';
import FeedItem from './FeedItem';

const Feed = () => {

    const [input, setInput] = useState('');
    const [feed, setFeed] = useState([]);

    useEffect(() => {
        feed.length > 0 ? document.title = `(${feed.length}) Feed | LinkedIn` :  document.title = `LinkedIn`;
    }, [feed])

    const handleFeedUpdate = (e) => {
        e.preventDefault();
        if(input){
            const newFeed = [{input, id: new Date().getTime().toString()} ,...feed]
            setFeed(newFeed);
            setInput("");
        }
    }

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
                <div className="post__input">
                    <CreateIcon />
                    <form onSubmit={handleFeedUpdate}>
                        <div className="post__input-form">
                            <input type="text" placeholder="Start a post" value={input} onChange={(e) => setInput(e.target.value)}/>
                        </div>
                        {/* <button type="submit" style={{display: "none" }}>POST</button> */}
                    </form>
                </div>
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
