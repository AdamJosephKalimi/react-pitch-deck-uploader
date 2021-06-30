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
            <img className='banner' src='https://firebasestorage.googleapis.com/v0/b/react-pitch-deck-uploader.appspot.com/o/assets%2Fbanner%204.png?alt=media&token=c7fee7da-b6fc-48bc-a440-dce3989de117'/>
            <DropZone />
        </div>
    );
}

export default LandingPage