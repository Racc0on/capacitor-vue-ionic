/* eslint-disable */
// Firebase
import Firebase from 'firebase';

export const firebaseConfig = {
  apiKey: "AIzaSyDCka9pu7sn9tt_2OkBykbxpKTSvYJdgFg",
  authDomain: "occhio-microsite.firebaseapp.com",
  databaseURL: "https://occhio-microsite.firebaseio.com",
  projectId: "occhio-microsite",
  storageBucket: "occhio-microsite.appspot.com",
  messagingSenderId: "192237886635",
  appId: "1:192237886635:web:076d5832cf456ed1dbabee"
};

const firebaseApp = Firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
export const firebaseAuth = firebaseApp.auth();
export const storageRef = firebaseApp.storage().ref();
export const imagesRef = storageRef.child('images');
