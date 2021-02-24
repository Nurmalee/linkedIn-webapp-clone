import React, { useState, useEffect } from 'react';
import './FeedInputForm.css';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import EventIcon from '@material-ui/icons/Event';
import AssignmentIcon from '@material-ui/icons/Assignment';
import firebase from 'firebase';
import { projectFirestore, projectStorage } from '../Config/firebase';
import ProgressBar from './ProgressBar'

const FeedInputForm = ({postButton}) => {
    const [input, setInput] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0)

    const imageTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/JPG', 'image/JPEG', 'image/PNG']
    
    const handleFeedUpdate = (e) => {
        e.preventDefault()

        if(input ?? imageFile){
            const projectStorageRef = projectStorage.ref(imageFile?.name)
            projectStorageRef.put(imageFile).on('state_changed', 
            (snapshot) => {
                const percentageUpload = (snapshot.bytesTransferred/snapshot.totalBytes) * 100
                setUploadProgress(percentageUpload)
            }, (error) => {
                console.log(error)
            }, async () => {
                const url = await projectStorageRef.getDownloadURL()
    
                projectFirestore.collection('feed').add({
                    name: 'Lawal Nurudeen',
                    text: input,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                    photoId: url,
                })
                setInput('');
                setUploadProgress(0);
                setImageFile(null)
            })
        }
    }

    const handlePictureUpload = (e) => {
        let selectedImage = e.target.files[0]
        if(selectedImage && imageTypes.includes(selectedImage.type)){
            setImageFile(selectedImage)
        } else {
            setImageFile(null)
        }
    }


    return (
        <>
        <div className="post__input">
            <CreateIcon />
            <form onSubmit={handleFeedUpdate}>
                <div className="post__input-form">
                    <input type="text" placeholder="Start a post" value={input} onChange={(e) => setInput(e.target.value)}/>
                    <input type='file' onChange={handlePictureUpload} />
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
        <ProgressBar uploadProgress={uploadProgress} />
        {imageFile && <p>{imageFile.name}</p> }
        </>
    )
}

export default FeedInputForm
