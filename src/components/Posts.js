import {useState, useEffect} from 'react'; 
import Post from './Post'
import axios from 'axios'


const API = process.env.REACT_APP_API

function Posts(){
    const [posts, setPost] = useState([])

    useEffect(() => {
        axios
        .get(`${API}/posts`)
        .then((res) => {
            console.log(res)
            setPost(res.data)
        })
            
        .catch((error) => console.log(error))
    }, []);

    const sortPosts = posts.sort((a, b) => a.id - b.id); 
    // sorting it by date so I can find stuff
    return(
        <div className='card'>
            <ul className='postsUL'>
                {sortPosts.map((post) =>{
                    return (
                        <li className='card' key={post.id}>
                            <Post post={post}/>
                             {post.is_liked ? <span>💝</span> : null} 
                             {/* place these in a div when doing css */}
                            &nbsp;   &nbsp;    &nbsp;  &nbsp;   &nbsp;    &nbsp;   &nbsp;   &nbsp;    &nbsp;  &nbsp;   &nbsp;    &nbsp;  
                            {post.is_bookmarked ? <span>📑</span> : null}
                        </li>
                    );
                })}
            </ul>
        </div>
 
    );
};

export default Posts;