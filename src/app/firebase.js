import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  // Your Firebase config here
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;