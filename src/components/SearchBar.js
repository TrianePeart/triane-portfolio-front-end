import { useState, useEffect } from 'react'; 
import axios from 'axios'
const API = process.env.REACT_APP_API

//DOnt push up it doesn't work 


export default function Search (){
    const [searchPost, setPost] = useState('');
   
//     const [searchPost, setPost] = useState({
//         title: '', 
//         author: '', 
//         post_type: '',
//     }); 

    const [data, setData] = useState([]); 
    const [filterData, setFilter] = useState([]);

    useEffect(() => {
        axios
        .get(`${API}/posts`)
        .then((res) => setData(res.data))
        .catch((error) => console.log(error))
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();  
        setFilter(
            data.filter(item =>
            item.searchPost.toLowerCase().includes(searchPost.toLowerCase())
        )
      );
    };

//     const handleTextChange = (event) => {
//         setPost({...searchPost, [event.target.id]: event.target.value});
// };

    return (
        <form onSubmit={handleSubmit}>
            <input 
            className='searchBox'
            type='text'
            value={searchPost}
            onChange={(e) => setPost(e.target.value)}
            />
            <ul>
                {filterData.map(item => (
                    <li key={item.id}>{item.title}</li>
                    ))}
            </ul>
        <button type="submit">Search</button>
        </form>
    )
}