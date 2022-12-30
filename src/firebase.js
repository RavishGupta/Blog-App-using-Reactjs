import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBZVe_puFRsFP_3vqgczqSY5QOYbeBEvzE",
  authDomain: "react-hooks-blog-9818a.firebaseapp.com",
  projectId: "react-hooks-blog-9818a",
  storageBucket: "react-hooks-blog-9818a.appspot.com",
  messagingSenderId: "675857093277",
  appId: "1:675857093277:web:03c6cdd9e6d399c271fa74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = firebase.firestore();