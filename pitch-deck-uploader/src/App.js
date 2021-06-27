import logo from './logo.svg';
import './App.css';
import React, {useRef, useEffect} from 'react';
import WebViewer from '@pdftron/webviewer';

function App() {
  const viewer = useRef(null);
  const file = 

  useEffect(() => {

    WebViewer(
      { 
        path: '../lib', 
        pdftronServer: 'https://demo.pdftron.com/',
        initialDoc: '../files/01 - application letter.pdf',
        // disabledElements: [
        //   'viewControlsButton',
        //   'viewControlsOverlay'
        // ]
     }, 
     viewer.current,
    ).then(instance => {
        const { docViewer } = instance;
        var Feature = instance.Feature;
        instance.disableFeatures([Feature.header]);
        instance.disableFeatures([Feature.Copy]);
        instance.loadDocument('../files/01 - application letter.pdf');
     })
  }, []);

  return (

    <div className="app">
      <div className="webviewer" ref={viewer} style={{height: "100vh"}}></div>
    </div>
  );
}

export default App;
