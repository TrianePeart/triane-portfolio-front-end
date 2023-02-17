import { useState, useEffect} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
const API = process.env.REACT_APP_API



export default function NewThingForm(){
    let navigate = useNavigate();

    const [postThing, setThing] = useState({
        title: '', 
        author: '', 
        content: '', 
        post_type: '',
        updated_at: '', 
        created_at: '', 
    }); 

    const [wordCount, setWordCount] = useState(0);

    const createNew = () => {
        console.log(API)
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

    useEffect(() => {
        setWordCount(postThing.content.split(/\s+/).filter((item) => item).length)
    },[postThing]);

    return(
        <div className='NewThingz'>
            <form onSubmit={handleSubmit}>

                {/* Title Of Post*/} 
                <label htmlFor='title'>Title:</label>
                &nbsp;
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
                 &nbsp;
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
                &nbsp;
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
                <br/>
                <br/>
                <textarea
                rows='20' 
                cols={'50'}
                id='content'
                value={postThing.content}
                type='text'
                onChange={handleTextChange}
                required
                />
                  <div className='countDiv'>
                    <p>{wordCount} words</p>
                  </div>
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