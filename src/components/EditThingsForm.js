import {useState, useEffect} from 'react'
import {useParams, Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
const API = process.env.REACT_APP_API

export default function EditForm(){
    let { id } = useParams(); 
    let navigate = useNavigate();

    const [postThing, setThing] = useState({
        title: '', 
        author: '', 
        content: '', 
        post_type: '',
        update_at: '', 
        created_at: '', 
        is_liked: false, 
        is_bookmarked: false,
    }); 

    const updateForm = (updateForm) => {
        axios
        .put(`${API}/posts/${id}`, updateForm)
        .then(
            () => {
                navigate(`/posts/${id}`);
            }, 
            (error) => console.error(error)
        )
        .catch((c) => console.warn('catch', c))
    }; 

    const handleTextChange = (event) => {
        setThing({...postThing, [event.target.id]: event.target.value}); 
    };


    
      
    const handleCount = ("input", () => {
    let wordCount = document.getElementById('word-count');
    let contentInput = document.getElementById('content')
        //trim() method removes whitespace from both ends of a string
           let txt =contentInput.value.trim();
        //txt.split(/\s+/) code will split the full classname of an element into an array containing every class
           wordCount.textContent = txt.split(/\s+/).filter((item) => item).length;
    });
 
    // MOVE TO HELPER FUNCTIONS

    useEffect(() => {
        axios.get(`${API}/posts/${id}`).then(
            (res) => setThing(res.data),
            (error) => navigate(`/not-found`)
        );
    }, [id, navigate]);

    const handleSubmit = (event) => {
        event.preventDefault();  
        updateForm(postThing, id);
    }; 

    return (
        <div className='Edit'>
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
                {/* Category Of Post */}
                <label htmlFor='category'>Category:</label>
                <input
                id='category'
                value={postThing.post_type}
                type='text'
                onChange={handleTextChange}
                placeholder="Random, Article, Poetry..."
                require
                />
                {/* Content Of Post */}
                <label htmlFor='content'>Write Post</label>
                <textarea
                 rows='20' 
                 cols={'50'}
                id='content'
                value={postThing.content}
                type='text'
                onChange={handleTextChange}
                require
                />
                {/* <>{wordCount()}</> */}
                <div>
                    <h3 id="word-count">{handleCount()}</h3>
                    <p>words</p>
                </div>
                <br/>
                <input type='submit'/>
                &nbsp;
                <Link to={`/posts/${id}`}>
                <button>Cancel</button>
               </Link>
            </form>
        </div>
    );
};