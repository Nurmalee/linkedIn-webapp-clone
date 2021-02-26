import React, { useState, useEffect } from 'react'
import './Comments.css';
import Avatar from '@material-ui/core/Avatar';
// import nurmalee_pics from './app-logo/nurmalee__linkedIn.jpg';
import Comment from './Comment';
import { projectFirestore } from '../Config/firebase';
import firebase from 'firebase';

const Comments = ({feedItemId}) => {
    const [commentInput, setCommentInput] = useState('');
    const [comments,setComments] = useState([]);


    useEffect(() => {
        if(feedItemId){
            projectFirestore.collection('feed')
            .doc(feedItemId).collection('comments')
            .orderBy('createdAt', 'desc')
            .onSnapshot(snapshot => {
                setComments(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            })
        }
        // return () => {
        //     cleanup
        // }
    }, [feedItemId])

    const handleComments = (e) => {
        e.preventDefault();
        if(commentInput){
            projectFirestore.collection('feed')
            .doc(feedItemId).collection('comments')
            .add({
                text: commentInput,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            })
            // const newComments = [{commentInput, id: new Date().getTime().toString() } ,...comments];
          
            setCommentInput('');
        }
    }

    return (
        <div className="comments">
            <div className="comments__header">
                <Avatar src='' />
                <form onSubmit={handleComments}>
                    <input type="text" placeholder="say something nice" value={commentInput} onChange={(e) => {setCommentInput(e.target.value)}} className="comments-input"/>
                </form>
            </div>
           
            <div className="comments__body">
                {comments.map((comment) => {
                    const {text, createdAt} = comment.data
                        return (
                            <Comment text={text} createdAt={createdAt} key={comment.id} />
                        )
                    }
                )}
            </div>
        </div>
    )
}

export default Comments
