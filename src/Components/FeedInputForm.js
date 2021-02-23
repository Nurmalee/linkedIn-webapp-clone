import React, { useState, useEffect } from 'react';
import './FeedInputForm.css';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import EventIcon from '@material-ui/icons/Event';
import AssignmentIcon from '@material-ui/icons/Assignment';
import firebase from 'firebase';
import { projectFirestore, projectStorage } from '../Config/firebase';
// import ProgressBar from './ProgressBar'

const FeedInputForm = ({postButton}) => {
    const [input, setInput] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [uploadedImageUrl, setUploadedImageUrl] = useState(null)
    const [uploadProgress, setUploadProgress] = useState(null)

    const imageTypes = ['image/png', 'image/jpeg', 'image/jpg']
    
    const handleFeedUpdate = (e) => {
        e.preventDefault();

        const projectStorageRef = projectStorage.ref(imageFile.name)
        projectStorageRef.put(imageFile).on('state_changed', 
        (snapshot) => {
            const percentageUpload = (snapshot.bytesTransferred/snapshot.totalBytes) * 100
            setUploadProgress(percentageUpload)
        }, (error) => {
            console.log(error);
        }, async () => {
            const url = await projectStorageRef.getDownloadURL()
            setUploadedImageUrl(url)

            if(input && imageFile){
                projectFirestore.collection('feed').add({
                    name: 'Lawal Nurudeen',
                    text: input,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                    photoId: uploadedImageUrl,
                })
                // setInput("");
                // setUploadedImageUrl('')
            }
        })
       
    }

    const handlePictureUpload = (e) => {
        let selectedImage = e.target.files[0]
        if(selectedImage && imageTypes.includes(selectedImage.type)){
            setImageFile(selectedImage)
            console.log(imageFile);
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
            {/* <div className="post__button">
                <input type='file' onChange={handlePictureUpload} />
                <ImageIcon className="post__button-Icon"/>
                <h3>Photo</h3>
            </div> */}
            {postButton((ImageIcon), "Photo")}
            {postButton((VideoLibraryIcon), "Video")}
            {postButton((EventIcon), "Event")}
            {postButton((AssignmentIcon), "Write Article")}
        </div>
        {/* {imageFile && <ProgressBar imageFile={imageFile} setImageFile={setImageFile} />} */}
        </>
    )
}

export default FeedInputForm
