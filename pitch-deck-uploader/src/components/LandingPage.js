import React from 'react';
import DropZone from './DropZone';

const LandingPage = (props) => {
    
    return (
        <div> 
            <img className='banner' src='https://firebasestorage.googleapis.com/v0/b/react-pitch-deck-uploader.appspot.com/o/assets%2Fbanner%204.png?alt=media&token=c7fee7da-b6fc-48bc-a440-dce3989de117' alt="A man giving a pitch to a captivated audience."/>
            <DropZone />
        </div>
    );
}

export default LandingPage