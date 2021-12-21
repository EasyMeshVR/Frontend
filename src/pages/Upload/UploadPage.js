import React, { useState, useRef } from 'react';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import FileService from '../../services/FileService';
import './UploadPage.css';

const UploadPage = () => {
	const acceptedFileType = "model/stl";
	const chooseFileRef = useRef(null);
	const [file, setFile] = useState(null);
	const [progress, setProgress] = useState(0);
	const [modelCode, setModelCode] = useState("");
	const [isUploading, setIsUploading] = useState(false);

	const overrideEventDefaults = (event) => {
		event.preventDefault();
		event.stopPropagation();
	};

	const handleFileDrop = async (event) => {
		overrideEventDefaults(event);
		if (!event.dataTransfer) return;

		await handleFiles(event.dataTransfer.files);
	};

	const handleFiles = async (fileList) => {
		if (!fileList) return;
		if (fileList.length !== 1) {
			console.log("Can only upload one file at a time.");
			return;
		}
		if (fileList[0].type !== acceptedFileType) {
			console.log("Can only upload model/stl files");
			return;
		}

		setFile(fileList[0]);
	};

	const handleChooseFileButton = (event) => {
		if (chooseFileRef === null)	return;
		chooseFileRef.current.click();
	}; 

	const onChangeChosenFile = async (event) => {
		overrideEventDefaults(event);
		if (!event.target || !event.target.files) return;

		await handleFiles(event.target.files);
	};

	const uploadFile = async (event) => {
		if (file === null) return;

		setIsUploading(true);
		const code = await FileService.uploadFile(file, setProgress);
		setIsUploading(false);
		setModelCode(code);
	};

	return (
		<div 
			className="UploadPage"
			onDrop={overrideEventDefaults}
			onDragEnter={overrideEventDefaults}
			onDragLeave={overrideEventDefaults}
			onDragOver={overrideEventDefaults}
		>
			<h1 className="BoldOrangeText">Upload STL model file</h1>
			<div 
				className="UploadDropZone" 
				onDrop={handleFileDrop} 
				onDragEnter={overrideEventDefaults}
				onDragLeave={overrideEventDefaults}
				onDragOver={overrideEventDefaults}
			>
				<p className="DropZoneText">Drag an STL model file to drop zone or browse.</p>
				<div className="ChooseFileDiv">
					<button disabled={isUploading} onClick={handleChooseFileButton}>Choose File</button>
					<span className="DropZoneText FileNameText">
						{(file !== null) ? file.name : "No file selected"}
					</span>
					<button disabled={isUploading} onClick={uploadFile}>Upload</button>
				</div>
				<input 
					className="DropZoneText ChooseFileInput" 
					type="file"
					disabled={isUploading}
					ref={chooseFileRef}
					onChange={onChangeChosenFile}
					accept={acceptedFileType}
				/>
				<ProgressBar 
					progress={progress}
					bgcolor="orange"
				/>
					{(file !== null && modelCode !== "") ? 
						<div>
							<p className="DropZoneText">Finished uploading {file.name}, your model code is:</p>
							<p className="DropZoneText BoldOrangeText">{modelCode}</p>
						</div>
					: <></>}
			</div>	
		</div>
	)
};

export default UploadPage;
