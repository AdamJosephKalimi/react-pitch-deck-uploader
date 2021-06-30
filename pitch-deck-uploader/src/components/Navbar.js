import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
          <img className="logo" src='https://firebasestorage.googleapis.com/v0/b/react-pitch-deck-uploader.appspot.com/o/assets%2FWefunder_logo.png?alt=media&token=5d38bd02-a5ea-4c7d-ae25-27229cc6b969' />
          <div className="links">
            <Link to="/" style={{ color: 'white', backgroundColor: '#1675BA', borderRadius: '8px'}}>Upload</ Link>
            <Link to="/presentation" style={{ color: 'white', backgroundColor: '#1675BA', borderRadius: '8px'}}>View</ Link>
          </div>
        </nav>
      );
}

export default Navbar