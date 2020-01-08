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

export const createUserProjileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; // logout일 경우 userAuth는 null이다

  // const userRef = firestore.doc('users/1329381029');
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  console.log(snapShot);
  // console.log(firestore.doc('users/1329381029'));

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error('error creating user', error.message);
    }

  }

  return userRef;
}

firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
