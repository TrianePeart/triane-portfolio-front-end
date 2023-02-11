import { useState, useEffect} from 'react'; 
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


const API = process.env.REACT_APP_API; 

export default function PostDetails(){
    const { id } = useParams(); 
    const [thing, setThing] = useState({})
    const navigate = useNavigate(); 

 

    const handleLiked = () => {
        setThing({...thing, is_liked: !thing.is_liked});
    }

    const handleBookMark = () => {
        setThing({...thing, is_bookmarked: !thing.is_bookmarked});
    }

    const deleteThing = () => {
     
        axios 
        .delete(`${API}/posts/${id}`)
        .then(
            () => {
                navigate(`/posts`);
            },
            (error) => console.error(error)
        )
        .catch((c) => console.warn('catch', c));
    }

    const handleDelete = () => {
        deleteThing();
    }


    useEffect(() => {
        axios
        .get(`${API}/posts/${id}`)
        .then((res) => {
            setThing(res.data)
        })
        .catch((c) => {
            console.warn('catch', c);
        });
    }, [id]);

    return(
        <article className='Show'>
            <h2>{thing.title}</h2>
            <h6>{thing.author}</h6>
            <p>{thing.post_type}</p>
            <p>{thing.content}</p>
            <p>{thing.create_at}</p>
            <p>{thing.update_at}</p>
            &nbsp;   &nbsp;    &nbsp;  &nbsp;   &nbsp;    &nbsp;  
              <div className='NavButtons'>
                <>
                <Link to={`/posts`}>
                    <button>back</button>
                </Link>
                </>
                &nbsp;   &nbsp;    &nbsp;  
                <>
                <Link to={`/posts/${thing.id}/edit`}>
                    <button>Edit</button>
                </Link>
                </>
                &nbsp;   &nbsp;    &nbsp;  
                <>
                <button onClick={handleDelete}>Delete</button>
                </>
            </div>
            <form>
            <label htmlFor='is_liked'>Liked:</label>
                <input
                id='is_liked'
                type='checkbox'
                onChange={handleLiked}
                checked={thing.is_liked}
                />
            <label htmlFor='is_bookmarked'>BookMark:</label>
                <input
                id='is_bookmarked'
                type='checkbox'
                onChange={handleBookMark}
                checked={thing.is_bookmarked}
            />
            </form>
        </article>
    );
};
