import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
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

    const createNew = () => {
        axios
        .post(`${API}/posts`, postThing)
        .then(() => navigate(`/posts`))
        .catch((c) => console.warn('catch', c));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createNew(postThing);
    };

    const handleTextChange = (event) => {
        setThing({...postThing, [event.target.id]: event.target.value});
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
                required
                />

                <br/>
                <br/>

                {/* Category Of Post */}
                <label htmlFor='category'>Category:</label>
                <input
                id='post_type'
                value={postThing.post_type}
                type='text'
                onChange={handleTextChange}
                placeholder="Random, Article, Poetry..."
                required
                />

                <br/>
                <br/>

                {/* Content Of Post */}
                <label htmlFor='content'>Write Post</label>
                <textarea
                rows='20' 
                cols={'50'}
                id='content'
                value={postThing.content}
                type='text'
                onChange={handleTextChange}
                required
                />

                <br/>
                <br/>

            <input type='submit'/>
             <Link to={`/posts`}>
                 <button>Cancel</button>
             </Link>
            </form>
        </div>
    );
};