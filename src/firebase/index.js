import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const {
  REACT_APP_APIKEY,
  REACT_APP_SENDERID,
  REACT_APP_APPID,
} = process.env;

const ENVS = {}

const firebaseConfig = {
  apiKey: REACT_APP_APIKEY,
  authDomain: "compras-z.firebaseapp.com",
  projectId: "compras-z",
  storageBucket: "compras-z.appspot.com",
  messagingSenderId: REACT_APP_SENDERID,
  appId: REACT_APP_APPID,
};

let app;

fetch("/.netlify/functions/test")
  .then((res)=>res.json())
  .then((res) => {
    firebaseConfig.apiKey = res.APIKEY;
    firebaseConfig.messagingSenderId = res.SENDERID;
    firebaseConfig.appId = res.APPID;
    app = firebase.initializeApp(firebaseConfig);
  
  })
  .catch(error => ENVS.error = error)


export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);

export function updateDB(collection, items) {
  let db = firebase.firestore().collection(collection);
  items.forEach(item => db.doc(String(item.id)).set({...item}));
}

export function loginWithGoogle() {
  console.log(firebaseConfig)
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(provider)
    .catch(error=>console.log(error))
    .then(res=>res.user)
}

export function logoutFromGoogle() {
  firebase.auth().signOut();
}