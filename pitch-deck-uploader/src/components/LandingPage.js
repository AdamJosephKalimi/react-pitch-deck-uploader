import React, { useState, useEffect } from 'react';
import DropZone from './DropZone';
import firebase, { storage } from '../firebase';

const LandingPage = () => {
    const [pitches, setPitches] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = firebase.firestore().collection('pitches');

    // const getPitches = () => {
    //     setLoading(true)
    //     ref.onSnapshot((querySnapshot) => {
    //         const items = [];
    //         querySnapshot.forEach((doc) => {
    //             items.push(doc.data());
    //         })
    //         setPitches(items);
    //         setLoading(false);
    //     })
    // }
    const getPitchesOnce = () => {
        setLoading(true);
        ref.get().then(item => {
            const items = item.docs.map(doc => doc.data());
            setPitches(items);
            setLoading(false);
        })
    }

    useEffect(() => {
        // getPitches();
        getPitchesOnce()
    }, []);
  
    // console.log("REF", ref)
    console.log("PITCHES", pitches);

    return (
        <div>
            <div>This is the landing page</div>
            <DropZone />
        </div>
    );
}

export default LandingPage