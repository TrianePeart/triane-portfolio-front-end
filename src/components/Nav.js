import { Link } from 'react-router-dom'
import App from '../css folders/App.css'
export default function Nav() {
    return(
        <nav className='Nav'>
            <button>
                <Link to='/posts'>Post Tingz</Link>
                {/* Posts are called Tingz... like Things */}
            </button>
            &nbsp; 
            <button>
                <Link to='/posts/new'>New Ting</Link>
            </button>
        </nav>
    )
}