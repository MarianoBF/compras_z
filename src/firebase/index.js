import firebase from "firebase/app";
import "firebase/firestore";

const {
  REACT_APP_APIKEY,
  REACT_APP_SENDERID,
  REACT_APP_APPID,
} = process.env;

const ENVS = {}

fetch("/.netlify/functions/test", {
  method: "GET",
  })
  .then((res)=>res.json())
  .then((res) => {
    ENVS.APIKEY = res.APIKEY;
    ENVS.SENDERID = res.SENDERID;
    ENVS.APPID = res.APPID;  
  })
  .catch(error => ENVS.error = error)

const firebaseConfig = {
  apiKey: REACT_APP_APIKEY || ENVS.APIKEY,
  authDomain: "compras-z.firebaseapp.com",
  projectId: "compras-z",
  storageBucket: "compras-z.appspot.com",
  messagingSenderId: REACT_APP_SENDERID || ENVS.SENDERID,
  appId: REACT_APP_APPID || ENVS.APPID,
};


const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);

export function updateDB(collection, items) {
  let db = firebase.firestore().collection(collection);
  items.forEach(item => db.doc(String(item.id)).set({...item}));
}
