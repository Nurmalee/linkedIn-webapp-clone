import React, { useState } from 'react';
import './FeedInputForm.css';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import EventIcon from '@material-ui/icons/Event';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Avatar from '@material-ui/core/Avatar';
// import BackupIcon from '@material-ui/icons/Backup';
import firebase from 'firebase';
import { projectFirestore, projectStorage } from '../Config/firebase';
import ProgressBar from './ProgressBar'
import { useAuth } from '../contextAPI/userAuthContext' 

const FeedInputForm = ({postButton}) => {
    const { currentUser } = useAuth()
    const [input, setInput] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0)
    const [imageUrl, setImageUrl] = useState('')

    const imageTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/JPG', 'image/JPEG', 'image/PNG']
    
    const handleFeedUpdate = (e) => {
        e.preventDefault()

        if(input || imageFile){
            // const projectStorageRef = projectStorage.ref('images').child(imageFile?.name) //OR in ES6 format? projectStorage.ref(`images/${imageFile.name}`)
            // projectStorageRef.put(imageFile).on('state_changed', 
            // (snapshot) => {
            //     const percentageUpload = (snapshot.bytesTransferred/snapshot.totalBytes) * 100
            //     setUploadProgress(percentageUpload)
            // }, (error) => {
            //     console.log(error)
            // }, async () => {
            //     const url = await projectStorageRef.getDownloadURL()
    
                projectFirestore.collection('feed').add({
                    name: currentUser.displayName,
                    text: input,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                    photoId: imageUrl,
                })
                setInput('');
                setUploadProgress(0);
                setImageFile(null)
                setImageUrl('')
        }
    }

    const handlePictureStorage = () => {
        if(imageFile){
            const projectStorageRef = projectStorage.ref('images').child(imageFile?.name) //OR in ES6 format? projectStorage.ref(`images/${imageFile.name}`)
            projectStorageRef.put(imageFile).on('state_changed', 
            (snapshot) => {
                const percentageUpload = (snapshot.bytesTransferred/snapshot.totalBytes) * 100
                setUploadProgress(percentageUpload)
            }, (error) => {
                console.log(error)
            }, async () => {
                const url = await projectStorageRef.getDownloadURL()
                setImageUrl(url)
            })
        } else {
            return;
        }
    }

    const handlePictureSelection = (e) => {
        let selectedImage = e.target.files[0]
        if(selectedImage && imageTypes.includes(selectedImage.type)){
            setImageFile(selectedImage)
        } else if (!selectedImage){
            setImageFile(null)
        } else {
            setImageFile(null)
        }
    }


    return (
        <>
        <div className='postInput__container'>
        <div className="post__input">
            <Avatar src='https://avatars.githubusercontent.com/u/70635657?s=460&u=eea4bb2b6dff02e5993458cecc93018eca3bd17d&v=4' style={{marginRight: '7px', height: '50px', width: '50px'}} />
            <div className="post__formContainer">
                <CreateIcon />
                <form onSubmit={handleFeedUpdate}>
                    <div className="post__input-form">
                    <input type="text" placeholder="Start a post" value={input} onChange={(e) => setInput(e.target.value)}/>
                    {/* <label htmlFor='file'>
                        <input type='file' id='file' onChange={handlePictureUpload} />
                       <BackupIcon />
                    </label> */}
                    </div>
               
                    {/* <button type="submit" style={{display: "none" }}>POST</button> */}
                </form>
            </div>
        </div>

        <div className="post__buttons">

            <label htmlFor='file'>
                <input type='file' id='file' onChange={handlePictureSelection} />
                <div className="post__button">
                    <ImageIcon className="post__button-Icon" style={{color: 'lightblue'}} />
                    <h3>Photo</h3>
                </div>
            </label>

            <div className="post__button" onClick={handlePictureStorage}>
                    <ImageIcon className="post__button-Icon" style={{color: 'darkblue'}} />
                    <h3>Upload Image</h3>
            </div>
           
            {/* {postButton((ImageIcon), "Photo")} */}
            {/* {postButton((VideoLibraryIcon), "Video", 'lightgreen')} */}
            {postButton((EventIcon), "Event", 'orange')}
            {postButton((AssignmentIcon), "Write Article", 'brown')}
        </div>
        </div>
        <ProgressBar uploadProgress={uploadProgress} />
        {imageFile && <p style={{fontSize: '9px', textAlign: 'center'}}>{imageFile.name}</p> }
        </>
    )
}

export default FeedInputForm
