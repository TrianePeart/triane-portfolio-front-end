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

    const [wordCount, setWordCount] = useState(0);

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

    //COUNTER USE EFFECT. MOVE TO HELPERS WHEN REFACTORING 

    useEffect(() => {
        setWordCount(postThing.content.split(/\s+/).filter((item) => item).length)
    },[postThing]);
    
    const handleTextChange = (event) => {
            setThing({...postThing, [event.target.id]: event.target.value});
    };

    //NOT FOUND USE EFFECT. MOVE TO HELPERS WHEN REFACTOR
    useEffect(() => {
        axios.get(`${API}/posts/${id}`).then(
            (res) => setThing(res.data),
            (error) => navigate(`/not-found`)
        );
    }, [id, navigate]);


    const handleSubmit = (event) => {
        event.preventDefault();  
        updateForm(postThing);
    };

    const handleLiked = () => {
        setThing({...postThing, is_liked: !postThing.is_liked});
    }

    const handleBookMark = () => {
        setThing({...postThing, is_bookmarked: !postThing.is_bookmarked});
    }


    return (
        <div className='Edit'>
            <form onSubmit={handleSubmit}>
                <br/>
                <br/>
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
                require
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
                require
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
                require
                />

                <div className='countDiv'>
                    <p>{wordCount} words</p>
                </div>
                <br/>
                <input className='sub' type='submit'/>
                <br/>
                <br/>
                <Link  to={`/posts/${id}`}>
                <button className='cancel'>Cancel</button>
               </Link>
               <br/>
               <br/>
               <label htmlFor='is_liked'>Liked:</label>
                <input
                id='is_liked'
                type='checkbox'
                onChange={handleLiked}
                checked={postThing.is_liked}
                />
                 &nbsp;  &nbsp;  
            <label htmlFor='is_bookmarked'>BookMark:</label>
                <input
                id='is_bookmarked'
                type='checkbox'
                onChange={handleBookMark}
                checked={postThing.is_bookmarked}/>
            </form>
        </div>
    );
};