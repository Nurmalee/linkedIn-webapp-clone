import { useState, useEffect } from 'react';
import { projectStorage } from '../Config/firebase';


const useStorage = (file) => {
    const [uploadedImageUrl, setUploadedImageUrl] = useState(null)
    const [uploadProgress, setUploadProgress] = useState(null)

    useEffect(() => {
        const projectStorageRef = projectStorage.ref(file.name)
            projectStorageRef.put(file).on('state_changed', (snapshot) => {
                const percentageUpload = (snapshot.bytesTransferred/snapshot.totalBytes) * 100
                setUploadProgress(percentageUpload)
            }, async () => {
                const url = await projectStorageRef.getDownloadURL()
                setUploadedImageUrl(url)
            }
        )
       
    }, [file])

    return {uploadedImageUrl, uploadProgress}
}

export default useStorage