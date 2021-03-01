import React, { useState, useEffect }  from 'react';
import './Feed.css';
import FeedItem from './FeedItem';
import FeedInputForm from './FeedInputForm';
import { projectFirestore } from '../Config/firebase';
import { useAuth } from '../contextAPI/userAuthContext'
import FlipMove from 'react-flip-move'

const Feed = () => {
    const [feed, setFeed] = useState([]);
    const { currentUser } = useAuth();

    useEffect(() => {
        feed.length > 0 ? document.title = `(${feed.length}) Feed | LinkedIn` :  document.title = `LinkedIn`;
    }, [feed])

    useEffect(() => {
        !currentUser ? document.title = `LinkedIn` : document.title = `(${feed.length}) Feed | LinkedIn`
    }, [currentUser])

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
            <FlipMove>
                {feed.map(feedItem => {
                    const {name, text, createdAt, photoId, userPhoto, userEmail} = feedItem.data
                        return (
                            <FeedItem name={name} text={text} postButton={postButton} photoId={photoId} userPhoto={userPhoto} userEmail={userEmail} createdAt={createdAt} key={feedItem.id} feedItemId={feedItem.id} />
                        )
                    }
                )}
            </FlipMove>
            </div>
          
            
        </section>
    )
}

export default Feed
