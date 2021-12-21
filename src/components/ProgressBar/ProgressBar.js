import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({
    bgcolor,
    progress,
    height
}) => {
    return (
        <div className="ParentDiv">
           <div 
            className="ChildDiv"
            style={{
                "width": `${progress}%`,
                "backgroundColor": bgcolor
            }}
           >
               <span className="ProgressText">
                   {progress}%
               </span>
           </div> 
        </div>
    )
};

export default ProgressBar;
