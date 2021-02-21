import React, { useState } from 'react';
import './FeedInputForm.css';
import CreateIcon from '@material-ui/icons/Create';
import firebase from 'firebase';
import projectFirestore from '../Config/firebase';

const FeedInputForm = () => {
    const [input, setInput] = useState('');

    
    const handleFeedUpdate = (e) => {
        e.preventDefault();
        if(input){
            // const newFeed = [{input, id: new Date().getTime().toString()} ,...feed]
            projectFirestore.collection('feed').add({
                text: input,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                id: new Date().getTime().toString(),
            })
            // setFeed(newFeed);
            setInput("");
        }
    }

    return (
        <div className="post__input">
            <CreateIcon />
            <form onSubmit={handleFeedUpdate}>
                <div className="post__input-form">
                    <input type="text" placeholder="Start a post" value={input} onChange={(e) => setInput(e.target.value)}/>
                </div>
                {/* <button type="submit" style={{display: "none" }}>POST</button> */}
            </form>
        </div>
    )
}

export default FeedInputForm
