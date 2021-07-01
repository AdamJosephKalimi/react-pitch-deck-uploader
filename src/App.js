import React from 'react';
import Navbar from './components/Navbar'
import DisplayTool from './components/DisplayTool';
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PitchURLContextProvider from './contexts/PitchURLContext';

function App() {
  return (
    <Router>
      <div>
        <PitchURLContextProvider>
        <Navbar />
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/presentation">
              <DisplayTool />
            </Route>
          </Switch>
        </PitchURLContextProvider>
      </div>
    </Router>
  );
}

export default App;
