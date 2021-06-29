import React, {useMemo, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import firebase, { storage } from '../firebase';


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
    const [file, setFile] = useState([])

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
      console.log("acceptedFiles", file)
    //   send filepath to AP
    // const storageRef = firebase.storage().ref();

    // // [START storage_monitor_upload]
    // var uploadTask = storageRef.child(`pitches/${acceptedFiles.name}`).put(file);
  
    // // Register three observers:
    // // 1. 'state_changed' observer, called any time the state changes
    // // 2. Error observer, called on failure
    // // 3. Completion observer, called on successful completion
    // uploadTask.on('state_changed', 
    //   (snapshot) => {
    //     // Observe state change events such as progress, pause, and resume
    //     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    //     var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //     console.log('Upload is ' + progress + '% done');
    //     switch (snapshot.state) {
    //       case firebase.storage.TaskState.PAUSED: // or 'paused'
    //         console.log('Upload is paused');
    //         break;
    //       case firebase.storage.TaskState.RUNNING: // or 'running'
    //         console.log('Upload is running');
    //         break;
    //     }
    //   }, 
    //   (error) => {
    //     // Handle unsuccessful uploads
    //   }, 
    //   () => {
    //     // Handle successful uploads on complete
    //     // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    //     uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
    //       console.log('File available at', downloadURL);
    //     });
    //   }
    // );
     
  }



  return (
    <div className="container">
      <div {...getRootProps({style})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
      <button onClick={submitFile}>Submit</button>
    </div>
  );
}

export default DropZone;