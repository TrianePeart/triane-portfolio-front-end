import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../providers/userProvider";
import { useNavigate } from "react-router-dom";
import {
  signInWithGoogle,
  signOut
} from "../services/firebase";

export default function Login(){
    const user = useContext(UserContext);
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
     if (user) {
       setIsLoggedIn(true);
       navigate("/posts");
     }else{
      navigate('/')
     }
   }, [user]);

   const handleSignIn = () =>{
    signInWithGoogle()
    setIsLoggedIn(true)
   }

   const handleSignOut = () => {
    signOut()
    setIsLoggedIn(false)
   }
     return (
     <div className="App">
       <section>
         <div className="log">
          {isLoggedIn ? (
            <button  onClick={handleSignOut}>Sign Out</button>
          ) : (
            <button onClick={handleSignIn}> Sign In With Google</button>
          )
          }
       </div>
       </section>
     </div>
   );
}
