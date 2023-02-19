import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
//This is an auth service

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
auth.useDeviceLanguage();
//Create an instance of the auth. By invoking the function and saving value in variable. 

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle =  (props) => {
    try {
  //the signInWithPopUp() method accepts ANY provider we create. This is all our authentication logic
  console.log(googleProvider)
    signInWithPopup(auth, googleProvider).then((res) => {
        //The param is catching lines 16 & 20 
    const user = res.user;
    console.log(user)
  })
     } catch (err) {
      console.log(err);
    }
};
//Sign in method

export const signOut = async () =>{
    try {
      await auth.signOut()
      alert("you've signed out - congrats.")

    } catch(err) {
      console.log(err)
    }
}
//sign out method