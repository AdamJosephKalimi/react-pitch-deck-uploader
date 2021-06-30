import React, { useState, useEffect, useContext } from 'react';
import DropZone from './DropZone';
import firebase, { storage } from '../firebase';
import { PitchURLContext } from '../contexts/PitchURLContext';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const LandingPage = (props) => {
    const { pitchURL } = useContext(PitchURLContext)
    const checkURL = () => console.log("HERE", pitchURL);
    
    return (
        <div> 
            <img className='banner' src='https://firebasestorage.googleapis.com/v0/b/react-pitch-deck-uploader.appspot.com/o/assets%2Fbanner%203.png?alt=media&token=1cfe8e97-8474-4597-a9e3-b65840f3ad65'/>
            <DropZone />
        </div>
    );
}

export default LandingPage