import firebase from "firebase";
// Initialize Firebase
const config = {
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_DATABASE_URL,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSENGING_SENDER_ID

  apiKey: "AIzaSyAHqDzUImQZcH9D_jcaRDUHImKuxiUmmSQ",
  authDomain: "potluck-planner-7ba7e.firebaseapp.com",
  databaseURL: "https://potluck-planner-7ba7e.firebaseio.com",
  projectId: "potluck-planner-7ba7e",
  storageBucket: "potluck-planner-7ba7e.appspot.com",
  messagingSenderId: "271893309603"
};

export const googleProvider = new firebase.auth.GoogleAuthProvider();

const authentication = firebase.initializeApp(config);

export default authentication;
