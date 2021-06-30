import React, { useState, useEffect, useContext } from 'react';
import DropZone from './DropZone';
import firebase, { storage } from '../firebase';
import { PitchURLContext } from '../contexts/PitchURLContext';
import { Link } from 'react-router-dom';

const LandingPage = (props) => {
    const { pitchURL } = useContext(PitchURLContext)
    const checkURL = () => console.log("HERE", pitchURL);
    
    return (
        <div>
            <div>
                <img className="banner" src='https://firebasestorage.googleapis.com/v0/b/react-pitch-deck-uploader.appspot.com/o/assets%2Fbanner%202.png?alt=media&token=3ab7b611-d766-489c-a30e-506664be861e'/>
            </div>
            <DropZone />
            <button onClick={checkURL}>Check current URL</button>
            <Link to='/presentation'>Presentation</Link>
        </div>
    );
}

export default LandingPage