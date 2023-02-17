import React from 'react';
import Generator from './Generator';
import {words} from '../assets/words';

export default function Prompts (){
    
    return (
    <div className='work'>
    <p>Write 250 words about:</p>
    <Generator dataset={words}/>
    {/* hold information */}
    </div>
    )
  
}
