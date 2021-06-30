import React, {useMemo, useState, useContext} from 'react';
import { PitchURLContext } from '../contexts/PitchURLContext';
import {useDropzone} from 'react-dropzone';
import firebase, {storage} from '../firebase';


const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  margin: '0 10% 0 10%',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
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
    const [url, setUrl] = useState("");
    
    const { pitchURL, updatePitchURL } = useContext(PitchURLContext);
    console.log('pitch url from within Dropzone', pitchURL)


  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    acceptedFiles
  } = useDropzone({
      // may need to adjust this functionality so that file is cleared out before saving a new file to state
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
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
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
              updatePitchURL(url)
          });
      }
    );
     
  }

  return (
    <div className="container">
      <div {...getRootProps({style})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop or click to select files</p>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
      {progress == 0 || progress == 100 ? <div></div> : <progress value={progress} max="100" />}
      <button onClick={submitFile}>Submit</button>
    </div>
  );
}

export default DropZone;