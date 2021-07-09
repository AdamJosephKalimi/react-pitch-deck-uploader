import React, { createContext, useState } from 'react';

export const PitchURLContext = createContext();

const PitchURLContextProvider = (props) => {
    const [pitchURL, setPitchURL] = useState('https://firebasestorage.googleapis.com/v0/b/react-pitch-deck-uploader.appspot.com/o/pitches%2FDemo%20pitch.png?alt=media&token=5539ad45-f4f2-432d-b793-a0a0ac6eecfc');

    return (
        <PitchURLContext.Provider value={{pitchURL, setPitchURL}}>
            {props.children}
        </PitchURLContext.Provider>
    );
}

export default PitchURLContextProvider;
