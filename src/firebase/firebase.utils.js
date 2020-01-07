import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDJV1fNZwbEbhdTyNT6LUfvBPESJfVHBPk",
  authDomain: "fir-4ac4c.firebaseapp.com",
  databaseURL: "https://fir-4ac4c.firebaseio.com",
  projectId: "fir-4ac4c",
  storageBucket: "fir-4ac4c.appspot.com",
  messagingSenderId: "386369460624",
  appId: "1:386369460624:web:5d6743d022e1649d40fb15",
  measurementId: "G-P23F88GX95"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'  });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;