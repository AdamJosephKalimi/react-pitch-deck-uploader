import logo from './logo.svg';
import './App.css';
import React, {useRef, useEffect} from 'react';
import DisplayTool from './components/DisplayTool';
import LandingPage from './components/LandingPage';

function App() {

  // find a way to monitor for an uploaded doc

  return (
    <div>
      <LandingPage />
      {/* <DisplayTool /> */}
    </div>
  );
}

export default App;
