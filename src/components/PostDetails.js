import { useState, useEffect} from 'react'; 
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import song2 from '../assets/HoliznaCC0 _Waves.mp3.mp3'
import ReactAudioPlayer from 'react-audio-player';

const API = process.env.REACT_APP_API; 

export default function PostDetails(){
    const { id } = useParams(); 
    const [thing, setThing] = useState({})
    const navigate = useNavigate(); 

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
        <article >
            <div className="audio-player">
            <ReactAudioPlayer
            src={song2}
            autoPlay
            controls
            volume={0.5}
            loop
            preload="auto"
            />
           </div>
            <div className='Show'>
            <h2>{thing.title}</h2>
            <h6>{thing.author}</h6>
            <p>{thing.post_type}</p>
            <p>{thing.content}</p>
            <p>{thing.create_at}</p>
            <p>{thing.update_at}</p>
            </div>
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
        </article>
    );
};
