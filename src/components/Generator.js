import React, {useState} from 'react'

export default function Generator (e){

    const randomize =() => {
        return e.dataset[Math.floor(Math.random() * e.dataset.length)];
    }

    const [prompts, setPrompts] = useState(() => randomize())

    return (
        <div>
            <p id='prompt'>{prompts}</p>
            <button onClick={() => setPrompts(randomize())}>Generate Prompts</button>
        </div>
    )
}

