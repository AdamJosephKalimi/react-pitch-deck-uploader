import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Navbar = () => {
    const classes = useStyles();

    return (
        <nav className="navbar">
          <img className="logo" src='https://firebasestorage.googleapis.com/v0/b/react-pitch-deck-uploader.appspot.com/o/assets%2FWefunder_logo.png?alt=media&token=5d38bd02-a5ea-4c7d-ae25-27229cc6b969' />
          <div className="links">
            <Button component={Link} to="/" variant="contained" style={{ color: 'white', backgroundColor: '#1675BA'}}>Upload </Button>
            <Button component={Link} to="/presentation" variant="contained" style={{ color: 'white', backgroundColor: '#1675BA'}}>View </Button>
          </div>
        </nav>
      );
}

export default Navbar