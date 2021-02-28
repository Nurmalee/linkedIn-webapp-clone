import React, { useState, useEffect }  from 'react';
import './Feed.css';
import FeedItem from './FeedItem';
import FeedInputForm from './FeedInputForm';
import { projectFirestore } from '../Config/firebase';

const Feed = ({currentUser}) => {
    const [feed, setFeed] = useState([]);

    useEffect(() => {
        feed.length > 0 ? document.title = `(${feed.length}) Feed | LinkedIn` :  document.title = `LinkedIn`;
    }, [feed])

    useEffect(() => {
        const projectDatabaseRef = projectFirestore.collection('feed')
        projectDatabaseRef.orderBy('createdAt', 'desc').onSnapshot(snapshot => {
            setFeed(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()})))
        })
    }, [])

    const postButton = (Icon, title, color) => {
        return (
            <div className="post__button">
                <Icon className="post__button-Icon" style={{color: `${color}`}}/>
                <h3>{title}</h3>
            </div>
        )
    }

    return (
        <section className='post'>
            <div className="post__topContents">
                <FeedInputForm postButton={postButton} />
            </div>

            <div className="post__body">
                {feed.map(feedItem => {
                    const {name, text, createdAt, photoId} = feedItem.data
                        return (
                            <FeedItem name={name} text={text} postButton={postButton} photoId={photoId} createdAt={createdAt} key={feedItem.id} feedItemId={feedItem.id} />
                        )
                    }
                )}
            </div>
            
        </section>
    )
}

export default Feed
