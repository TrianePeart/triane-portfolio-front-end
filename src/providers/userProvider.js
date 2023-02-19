import React, { useEffect, useState, createContext } from "react";
//noice here we are refrenceing the service we set up earlier
import { auth } from "../services/firebase";

export const UserContext = createContext(null)
//invoking R-C-F and exporting it so other files can use it.

export const UserProvider = (props) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
  //listen for changes
      auth.onAuthStateChanged(async (user) => {
        // This is an observable. It sends a stream of data to firebase indefeasibly 
          console.log(user)
        if (user) {
          // get return values from Firebase
          const { email, displayName, photoURL, uid } = user;
        // save them in state
          setUser({ email, displayName, photoURL, uid });
        } else {
          setUser(null);
        }
      });
    }, []);
    //This is a depend array if a change is made it will update
    return (
     // render context provider with user state in value
      <UserContext.Provider value={user}>
        <div>{props.children}</div>
      </UserContext.Provider>
    );
};