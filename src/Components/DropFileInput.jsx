import React from "react";
import PropTypes from "prop-types";
import { ImageConfig } from "../Utils/ImageConfig";
import UploadImg from "../Images/cloud-upload-regular-240.png";
import { useRef } from "react";
import { useState } from "react";

const DropFileInput = (props) => {
    const wrapperRef = useRef(null);

    const [fileList, setFilelist] = useState([]);

    const onDragEnter = () => wrapperRef.current.classList.add("dragover");
    const onDragLeave = () => wrapperRef.current.classList.remove("dragover");
    const onDrop = () => wrapperRef.current.classList.remove("dragover");

    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        if (newFile) {
            const updateList = [...fileList, newFile];
            setFilelist(updateList);
            props.onFileChange(updateList);
        }
    };

    const fileRemove = (file) => {
        const updateList = [...fileList];
        updateList.splice(fileList.indexOf(file), 1);
        setFilelist(updateList);
        props.onFileChange(updateList);
    };

    return (
        <>
            <div
                className="drop-file-input"
                ref={wrapperRef}
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
                <div className="drop-file-imput__label">
                    <img src={UploadImg} alt="" />
                    <p>Haz drag and drop aqui</p>
                </div>
                <input type="file" value={""} onChange={onFileDrop} />
            </div>
            {fileList.length > 0 ? (
                <div className="drop-file-preview">
                    <p className="drop-file-preview__title">Listo para subir</p>
                    {fileList.map((item, index) => (
                        <div key={index} className="drop-file-preview__item">
                            <img
                                src={
                                    ImageConfig[item.type.split("/")[1]] || ImageConfig["default"]
                                }
                                alt=""
                            />
                            <div className="drop-file-preview__item__info">
                                <p>{item.name}</p>
                                <p>{item.size}B</p>
                            </div>
                            <span
                                className="drop-file-preview__item__del"
                                onClick={() => fileRemove(item)}
                            >
                                X
                            </span>
                        </div>
                    ))}
                    <button className="upload-files">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Subir Archivos
                    </button>
                </div>
            ) : (
                <p>No hay Archivos por subir</p>
            )}
        </>
    );
};

DropFileInput.proptype = {
    onFileChange: PropTypes.func,
};

export default DropFileInput;
