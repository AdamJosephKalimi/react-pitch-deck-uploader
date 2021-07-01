import React, { useEffect, useRef, useContext } from 'react';
import { PitchURLContext } from '../contexts/PitchURLContext';
import WebViewer from '@pdftron/webviewer';

const DisplayTool = (props) => {
  const viewer = useRef(null);
  const { pitchURL } = useContext(PitchURLContext)
  useEffect(() => {
    WebViewer(
      { 
        path: '../lib', 
        pdftronServer: 'https://demo.pdftron.com/',
        initialDoc: pitchURL,
        disabledElements: [
          'header'
        ]
     }, 
     viewer.current,
    ).then(instance => {
        const { docViewer } = instance;
        console.log("INSTANCE", instance)
        var Feature = instance.Feature;
        instance.disableFeatures([Feature.header]);
        instance.disableFeatures([Feature.Copy]);
        instance.loadDocument(pitchURL);
     }).catch(err => console.log("ERROR: ", err))
  }, []);

  return (

    <div className="app">
      <div className="webviewer" ref={viewer} style={{height: "90vh"}}></div>
    </div>
  );
}

export default DisplayTool;
