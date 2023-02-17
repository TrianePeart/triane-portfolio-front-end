import React, {useState} from 'react'

export default function Generator (e){

    const randomize =() => {
        return e.dataset[Math.floor(Math.random() * e.dataset.length)];
    }

    const [prompts, setPrompts] = useState(() => randomize())

    return (
        <div className='gen'>
            <p id='prompt'>{prompts}</p>
            <button className='sub' onClick={() => setPrompts(randomize())}>Generate Prompts</button>
        </div>
    )
}

