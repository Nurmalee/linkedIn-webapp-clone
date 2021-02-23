import React from 'react'
import './ProgressBar.css'

const ProgressBar = ({uploadProgress}) => {

    return (
        <div className='progressBar' style={{width: uploadProgress + '%' }}></div>
    )
}

export default ProgressBar
