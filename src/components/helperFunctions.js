import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'


const API = process.env.REACT_APP_API
//Move delete and functions used more than once to here
export default function DeleteThing() {
        const navigate = useNavigate(); 
        const {id} = useParams()
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

    //Search Bar

    //Tutorial

    //Chat bot


