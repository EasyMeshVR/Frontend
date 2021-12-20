import React from 'react';
import './UploadPage.css';

const UploadPage = () => {
	const handleFileDrop = (event) => {
		event.preventDefault();
		console.log(event);
	};

	const handleFileDrag = (event) => {
		console.log(event);
	};

	return (
		<div className="UploadPage">
			<h1>Upload STL model file</h1>
			<div className="UploadDropZone" onDrop={(event) => handleFileDrop(event)} onDrag={handleFileDrag}>
				<p className="DropZoneText">Drag an STL model file to drop zone or browse.</p>
				<input 
					className="DropZoneText" 
					type="file"
					accept="model/stl"
				/>
			</div>	
		</div>
	)
};

export default UploadPage;
