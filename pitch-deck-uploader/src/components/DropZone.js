import React, { useMemo, useState, useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import Button from '@material-ui/core/Button';
import { storage } from '../firebase';
import { Link, withRouter } from 'react-router-dom';
import { PitchURLContext } from '../contexts/PitchURLContext';

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  margin: '0 10% 0 10%',
  borderWidth: 5,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#1675ba',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

const DropZone = (props) => {
    const [progress, setProgress] = useState(0);
    const [file, setFile] = useState([]);
    const { pitchURL, setPitchURL } = useContext(PitchURLContext);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    acceptedFiles
  } = useDropzone({
      onDrop: files => setFile(files[0])
    });

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ]);

  const files = acceptedFiles.map(file => (
    <h3 style={{color: '#1675ba'}} key={file.path}>
      Your File: {file.path}, Size: {Math.floor(file.size/1000000)} MB
    </h3>
  ));
  
  const submitFile = () => {
    const uploadTask = storage.ref(`pitches/${file.name}`).put(file);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("pitches")
          .child(file.name)
          .getDownloadURL()
          .then(url => {
            setPitchURL(url)
              props.history.push('/presentation');
          });
      }
    );
  }

  return (
    <div>
      <div {...getRootProps({style})}>
        <input {...getInputProps()} />
        <h3>Drop your pitch here or click to select it</h3>
      </div>
      <div className="dropzone-container">
        <aside>
          <h3>{files}</h3>
        </aside>
        {progress === 0 || progress === 100 ? <div></div> : <progress value={progress} max="100" />}

      {files.length == 0 ? 
        <Button 
          component={Link} 
          variant="contained" 
          onClick={submitFile} 
          disabled>
          Submit
        </Button>
        :
        <Button 
          component={Link} 
          variant="contained" 
          onClick={submitFile} 
          style={{ color: 'white', backgroundColor: '#1675BA'}}>
          Submit
        </Button>
      }
      </div>
    </div>
  );
}

export default withRouter(DropZone);
