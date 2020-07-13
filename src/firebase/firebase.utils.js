import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD9JC-MEgHoGn_wOpeIJM5Hmu7Iyn7LiEM",
  authDomain: "crwn-db-c1afc.firebaseapp.com",
  databaseURL: "https://crwn-db-c1afc.firebaseio.com",
  projectId: "crwn-db-c1afc",
  storageBucket: "crwn-db-c1afc.appspot.com",
  messagingSenderId: "1006882389297",
  appId: "1:1006882389297:web:27aa0c45447819ba540410",
  measurementId: "G-6R7X095JB8"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;