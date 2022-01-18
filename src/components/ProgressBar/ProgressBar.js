import React from 'react';
import progressBarStyles from './ProgressBar.module.css';

const ProgressBar = ({
    bgcolor,
    progress,
    height
}) => {
    return (
        <div className={progressBarStyles.ParentDiv}>
           <div 
            className={progressBarStyles.ChildDiv}
            style={{
                "width": `${progress}%`,
                "backgroundColor": bgcolor
            }}
           >
               <span className={progressBarStyles.ProgressText}>
                   {progress}%
               </span>
           </div> 
        </div>
    )
};

export default ProgressBar;
