import Login from "../components/Login";
import { useState } from "react";
export default function Welcome(){
  
    return (
        
        <main>
            <div>
            <div className="welcome anim-type" >
            <h1>Welcome To Write Tingz</h1>
            </div>
            <h3 className="slogan">Where Thoughts Come To Life</h3>
            <div className="welcomelogo"/>
            </div> 
         <Login/>
        </main>
     
    )
}