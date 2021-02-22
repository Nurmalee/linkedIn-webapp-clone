import React, { useEffect } from 'react'
import './ProgressBar.css'
import useStorage from '../hooks/useStorage'

const ProgressBar = ({imageFile, setImageFile}) => {
    const { uploadedImageUrl, uploadProgress } = useStorage(imageFile)
    console.log(uploadedImageUrl, uploadProgress);

    useEffect(() => {
        if(uploadedImageUrl){
            setImageFile(null)
        }
    }, [imageFile, setImageFile])

    return (
        <div className='progressBar' style={{width: uploadProgress + '%' }}></div>
    )
}

export default ProgressBar
