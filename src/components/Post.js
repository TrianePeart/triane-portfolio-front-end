import { Link } from 'react-router-dom'

export default function Post({post}){
    return(
        <article>
        <Link to={`/posts/${post.id}`}>
         <h2>{post.title}</h2>
        </Link>
         <h6>{post.author}</h6>
         <p>{post.post_type}</p>
         <p>{post.content}</p>
         <p>{post.created_at}</p>
         {/* UPdate this to get rid of the time */}
        </article>
    )         
}