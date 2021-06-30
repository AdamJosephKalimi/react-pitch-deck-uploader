import React, { createContext, useState } from 'react';

export const PitchURLContext = createContext();

const PitchURLContextProvider = (props) => {
    const [pitchURL, setPitchURL] = useState('https://firebasestorage.googleapis.com/v0/b/react-pitch-deck-uploader.appspot.com/o/pitches%2F9-min.pdf?alt=media&token=b1ff29d4-424d-4f89-ae9c-e780996e203c');

    const updatePitchURL = (url) => {
        setPitchURL(url);
    }

    return (
        <PitchURLContext.Provider value={{pitchURL, updatePitchURL}}>
            {props.children}
        </PitchURLContext.Provider>
    );
}

export default PitchURLContextProvider;