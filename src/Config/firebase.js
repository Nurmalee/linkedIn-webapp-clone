import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCpvtzUF0P1OL8-3SuGfBoErRznExj1Pmg",
    authDomain: "linkedin-webapp-clone.firebaseapp.com",
    projectId: "linkedin-webapp-clone",
    storageBucket: "linkedin-webapp-clone.appspot.com",
    messagingSenderId: "272633902854",
    appId: "1:272633902854:web:fe223482b78adb5c5b1087"
};

firebase.initializeApp(firebaseConfig);
const projectFirestore = firebase.firestore();
const auth = firebase.auth();

export { projectFirestore, auth }