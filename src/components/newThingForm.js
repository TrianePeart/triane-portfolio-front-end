import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'react-axios'
const API = process.env.REACT_APP_API

/* 
FILE MEMOS: Submit not functioning. 
Input and Textarea are not pleasing to the eye. Correct later
get rid of breaks </br> in code and make cute with CSS
*/
   

export default function NewThingForm(){
    let navigate = useNavigate();

    const [postThing, setThing] = useState({
        title: '', 
        author: '', 
        content: '', 
        post_type: '',
        update_at: '', 
        created_at: '', 
    }); 

    const createNew = (makeThing) => {
        axios
        .post(`${API}/posts`, makeThing)
        .then(
            () => {
                navigate(`/posts`);
            }, 
            (error) => console.error(error)
        )
        .catch((c) => console.warn('catch', c));
    };

    //This seems to be correct

    const handleSubmit = (event) => {
        event.preventDefault();
        createNew(postThing);
    };

    const handleTextChange = (event) => {
        setThing({ ...postThing, [event.target.id]: event.target.value});
    };

    return(
        <div className='NewThingz'>
            <form onSubmit={handleSubmit}>
                {/* Title Of Post*/} 
                <label htmlFor='title'>Title:</label>
                <input
                id='title'
                value={postThing.title}
                type='text'
                onChange={handleTextChange}
                placeholder='Title Of Thing'
                required
                />
                <br/>
                <br/>
                {/* Name Of Author */}
                 <label htmlFor='author'>Author Name:</label>
                <input
                id='author'
                value={postThing.author}
                type='text'
                onChange={handleTextChange}
                placeholder="Written By"
                require
                />
                <br/>
                <br/>
                {/* Category Of Post */}
                <label htmlFor='post_type'>Category:</label>
                <input
                id='post_type'
                value={postThing.post_type}
                type='text'
                onChange={handleTextChange}
                placeholder="Random, Article, Poetry..."
                require
                />
                <br/>
                <br/>
                {/* Content Of Post */}
                <label htmlFor='content'>Write Post</label>
                <textarea
                id='content'
                value={postThing.content}
                type='text'
                onChange={handleTextChange}
                require
                />
                 <br/>
                 <br/>
                <input type='submit'/>
            </form>
             <Link to={`/posts`}>
                 <button>Cancel</button>
             </Link>
        </div>
    );
};