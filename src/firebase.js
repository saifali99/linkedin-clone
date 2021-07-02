import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDxuqIKFj-SgwtcRI-IZVdbqX_MlAMaanc",
    authDomain: "linkedin-clone-b638e.firebaseapp.com",
    projectId: "linkedin-clone-b638e",
    storageBucket: "linkedin-clone-b638e.appspot.com",
    messagingSenderId: "753664736051",
    appId: "1:753664736051:web:3f53d3a0882c91c6e4dc46"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };