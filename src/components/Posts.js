import {useState, useEffect} from 'react'; 
import { useParams, Link, useNavigate} from 'react-router-dom'

import axios from 'react-axios'
//Is this the same as regular axios? Look it up. 

const API = process.env.REACT_APP_API

function Posts(){
    const { id } = useParams();
    const [post, setPost] = useState({})
    const navigate = useNavigate()

    const deletePost = () => {
        axios
        .delete(``)
    }

    useEffect(() => {
        axios
        .get(`${API}/posts/${id}`)
        .then((res) => {
            setSnack(res.data)
            //Maybe likes and bookmarks can be here?
        })
        .catch((error) => {
            console.log(error)
        })
    }, [id]);

    return(
        <div className='Post'>
            <h1 className='title'>{post.title}</h1>
            <p className='author'>{post.author}</p>
            {/* This might have to be an h3? */}
            <p className='content'>{post.content}</p>
            <p className='dateUpdated'>{post.updated_at}</p>
            <p className='datePosted'>{post.created_at}</p>
            <div className='ShowButtons'>
                {/* Do I want this to be a different color from whole app???? */}
                <>
                <Link to={`/posts`}>
                    <button>return</button>
                </Link>
                </>
                <>
                <Link to={`/posts/${post.id}/edit`}>
                    <button>Edit</button>
                </Link>
                </>
            </div>
        </div>
    )
};

export default Posts;