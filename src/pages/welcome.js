import Login from "../components/Login";

import song3 from '../assets/kids_Holizna.mp3'
import ReactAudioPlayer from 'react-audio-player';
export default function Welcome(){
  
    return (
        <main>
            <div className='WelcomePlayer' hidden>
            <ReactAudioPlayer
            src={song3}
            autoPlay
            controls
            volume={0.1}
            loop
            preload="auto"
            />
            </div>
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