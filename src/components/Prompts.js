import React from 'react';
import Generator from './Generator';
import {words} from '../assets/words';
import song3 from '../assets/kids_Holizna.mp3'
import ReactAudioPlayer from 'react-audio-player';
export default function Prompts (){
    
    return (
    <div className='prompt'>
    <p>Write 250 words about:</p>
        <Generator dataset={words}/>
     <div className="audio-player2" hidden>
    <ReactAudioPlayer
            src={song3}
            autoPlay
            controls
            volume={0.1}
            loop
            preload="auto"
            />
     </div>
    </div>
    )
  
}
