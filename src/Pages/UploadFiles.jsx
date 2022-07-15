import React from 'react'
import DropFileInput from '../Components/DropFileInput'
import '../Styles/UploadFiles.scss'

const UploadFiles = () => {
    const onFileChange = (files) => {
    }

    return (
        <div className='upload'>
            <div className="box">
                <h2 className="header">Subir Archivos</h2>
                <DropFileInput onFileChange={(files) => onFileChange(files) } />
            </div>
        </div>
    )
}

export default UploadFiles