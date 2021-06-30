import React, { useState, useEffect, useRef, useContext } from 'react';
import { PitchURLContext } from '../contexts/PitchURLContext';
import WebViewer from '@pdftron/webviewer';

const DisplayTool = (props) => {
  const viewer = useRef(null);
  const { pitchURL } = useContext(PitchURLContext)
  useEffect(() => {
    console.log("url from within displayTool", pitchURL)
    WebViewer(
      { 
        path: '../lib', 
        pdftronServer: 'https://demo.pdftron.com/',
        initialDoc: pitchURL,
        disabledElements: [
          'viewControlsButton',
          'viewControlsOverlay'
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
      <div className="webviewer" ref={viewer} style={{height: "100vh"}}></div>
    </div>
  );
}

export default DisplayTool;
