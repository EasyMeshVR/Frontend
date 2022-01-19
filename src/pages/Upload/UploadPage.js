import React, { useState, useRef } from 'react';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import FileService from '../../services/FileService';
import Button from '../../components/Button/Button';
import uploadPageStyles from './UploadPage.module.css';

const UploadPage = () => {
	const acceptedFileType = ".stl";
	const chooseFileRef = useRef(null);
	const [file, setFile] = useState(null);
	const [progress, setProgress] = useState(0);
	const [modelCode, setModelCode] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [isUploading, setIsUploading] = useState(false);
	const [codeType, setCodeType] = useState("word");

	const overrideEventDefaults = (event) => {
		event.preventDefault();
		event.stopPropagation();
	};

	const handleFileDrop = async (event) => {
		overrideEventDefaults(event);
		if (isUploading || !event.dataTransfer) return;

		handleFiles(event.dataTransfer.files);
	};

	const handleFiles = (fileList) => {
		if (fileList === undefined) return;

		setErrorMessage("");
		setModelCode("");
		setProgress(0);

		if (fileList.length !== 1) {
			setFile(null);
			setErrorMessage("You can only upload one file at a time.");
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

		handleFiles(event.target.files);
	};

	const onChangeCodeType = (event) => {
		if (!event.target || !event.target.value) return;
		setCodeType(event.target.value);
	};

	const uploadFile = async (event) => {
		if (file === null) return;

		setIsUploading(true);
		let code = "";
		try {
			code = await FileService.uploadFile(file, codeType, setProgress);
		} catch (error) {
			setErrorMessage("Network error encountered while uploading file.");
		}
		setIsUploading(false);
		setModelCode(code);
	};

	return (
		<div 
			className={uploadPageStyles.UploadPage}
			onDrop={overrideEventDefaults}
			onDragEnter={overrideEventDefaults}
			onDragLeave={overrideEventDefaults}
			onDragOver={overrideEventDefaults}
		>
			<h1 className={uploadPageStyles.BoldText}>Upload STL model file</h1>
			<div 
				className={uploadPageStyles.UploadDropZone}
				onDrop={handleFileDrop} 
				onDragEnter={overrideEventDefaults}
				onDragLeave={overrideEventDefaults}
				onDragOver={overrideEventDefaults}
			>
				<p className={uploadPageStyles.DropZoneText}>
					Drag an STL model file to drop zone or browse.
				</p>
				<div className={uploadPageStyles.ChooseFileDiv}>
					<Button 
						disabled={isUploading}
						onClick={handleChooseFileButton}
						text="Choose File"
					/>
					<span className={`${uploadPageStyles.DropZoneText} ${uploadPageStyles.FileNameText}`}>
						{(file !== null) ? file.name : "No file selected"}
					</span>
					<Button 
						disabled={isUploading || file === null}
						onClick={uploadFile}
						text="Upload"
					/>
				</div>
				<div className={uploadPageStyles.ModelCodeSelectDiv}>
					<label for="codeType" className={uploadPageStyles.ModelCodeSelectLabel}>
						Choose a model code type to generate:
					</label>
					<select disabled={isUploading} name="codeType" id="codeType" onChange={onChangeCodeType}>
						<option value="word">Word Code</option>
						<option value="digit">Digit Code</option>
					</select>
				</div>
				<input 
					className={`${uploadPageStyles.DropZoneText} ${uploadPageStyles.ChooseFileInput}`} 
					type="file"
					disabled={isUploading}
					ref={chooseFileRef}
					onChange={onChangeChosenFile}
					accept={acceptedFileType}
				/>
				{isUploading ?
					<ProgressBar 
						progress={progress}
						bgcolor="orange"
					/> : <></>
				}
				{errorMessage !== "" ?
					<span className={`${uploadPageStyles.DropZoneText} ${uploadPageStyles.ErrorMessageText}`}>
						{errorMessage}
					</span>
					: <></>
				}
				{(file !== null && modelCode !== "") ? 
					<div>
						<p className={uploadPageStyles.DropZoneText}>
							Finished uploading {file.name}, your model code is:
						</p>
						<p className={`${uploadPageStyles.DropZoneText} ${uploadPageStyles.BoldText}`}>
							{modelCode}
						</p>
					</div> : <></>
				}
			</div>	
		</div>
	)
};

export default UploadPage;
