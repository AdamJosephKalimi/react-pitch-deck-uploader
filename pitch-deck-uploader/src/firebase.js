import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCkl6w9VDBJHU6nJIELxcIvHdAE7xoPoqE",
  authDomain: "react-pitch-deck-uploader.firebaseapp.com",
  projectId: "react-pitch-deck-uploader",
  storageBucket: "react-pitch-deck-uploader.appspot.com",
  messagingSenderId: "856266835618",
  appId: "1:856266835618:web:c01ab48bf33ece9128b9fb"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
