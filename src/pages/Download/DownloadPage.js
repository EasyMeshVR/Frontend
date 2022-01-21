import React, { useState, useRef } from 'react';
import Button from '../../components/Button/Button';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import FileService from '../../services/FileService';
import downloadPageStyles from './DownloadPage.module.css';

const Download = () => {
	const [isDownloading, setIsDownloading] = useState(false);
	const [progress, setProgress] = useState(0);
	const [modelCode, setModelCode] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [downloadUrl, setDownloadUrl] = useState(null);
	const [fileName, setFileName] = useState("");

	const downloadLinkRef = useRef(null);

	const onChangeModelCode = (event) => {
		if (!event.target) return;

		setModelCode(event.target.value);
	};

	const downloadFile = async (event) => {
		setFileName("");
		setDownloadUrl(null);
		setProgress(0);
		setErrorMessage("");
		setIsDownloading(true);

		let res;
		try {
			res = await FileService.downloadFile(modelCode, setProgress);
		} catch (error) {
			if (error.response && error.response.status) {
				switch (error.response.status) {
					case 400:
						setErrorMessage("The model code is either a 6-digit or a three-word code separated by hyphens.");
						break;
					case 403:
					case 404:
						setErrorMessage("File not found.")
						break;
					default:
						setErrorMessage("Network error encountered while downloading file.");
						break;
				}
			}
			setIsDownloading(false);
			return;
		}
		
		const url = window.URL.createObjectURL(new Blob([res.data]));

		setDownloadUrl(url);
		setFileName(modelCode + ".stl");

		if (downloadLinkRef === null) return;

		downloadLinkRef.current.click();
		setIsDownloading(false);
		setModelCode("");
	};

	return (
		<div className={downloadPageStyles.DownloadPage}>
			<h1 className={downloadPageStyles.BoldText}>Download STL Model File</h1>
			<div className={downloadPageStyles.DownloadDiv}>
				<p className={downloadPageStyles.DownloadPageText}>Enter your model code to download.</p>
				<div className={downloadPageStyles.InputDiv}>
					<input 
						type="text"
						className={downloadPageStyles.ModelCodeInput}
						onChange={onChangeModelCode}
						placeholder="Enter model code"
					/>
					<Button 
						disabled={isDownloading || modelCode === ""}
						onClick={downloadFile}
						text="Download"
					/>
				</div>
				{isDownloading ?
					<ProgressBar
						progress={progress}
						bgcolor="orange"
					/>
					: <></>
				}
				{errorMessage !== "" ?
					<span className={`${downloadPageStyles.DownloadPageText} ${downloadPageStyles.ErrorMessageText}`}>
						{errorMessage}
					</span>
					: <></>
				}
				{(downloadUrl !== null && fileName !== "") ? 
					<a 
						ref={downloadLinkRef} 
						className={downloadPageStyles.DownloadRefLink} 
						download={fileName} 
						href={downloadUrl}
					> 
					</a>
					: <></>
				}
			</div>
		</div>
	)
};

export default Download;
