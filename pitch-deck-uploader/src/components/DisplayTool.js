import React, { useState, useEffect, useRef } from 'react';
import WebViewer from '@pdftron/webviewer';

const DisplayTool = (props) => {
  const viewer = useRef(null);
//   const file = 

  useEffect(() => {

    WebViewer(
      { 
        path: '../lib', 
        pdftronServer: 'https://demo.pdftron.com/',
        initialDoc: 'https://firebasestorage.googleapis.com/v0/b/react-pitch-deck-uploader.appspot.com/o/pitches%2Fadam-doc_guthries-proposal_v2.pptx?alt=media&token=f501b309-716f-449c-83ad-f86479b41f61',
        disabledElements: [
          'viewControlsButton',
          'viewControlsOverlay'
        ]
     }, 
     viewer.current,
    ).then(instance => {
        const { docViewer } = instance;
        var Feature = instance.Feature;
        instance.disableFeatures([Feature.header]);
        instance.disableFeatures([Feature.Copy]);
        instance.loadDocument('https://firebasestorage.googleapis.com/v0/b/react-pitch-deck-uploader.appspot.com/o/pitches%2Fadam-doc_guthries-proposal_v2.pptx?alt=media&token=f501b309-716f-449c-83ad-f86479b41f61');
     })
  }, []);

  return (

    <div className="app">
      <div className="webviewer" ref={viewer} style={{height: "100vh"}}></div>
    </div>
  );
}

export default DisplayTool;
