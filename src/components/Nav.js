import { Link } from 'react-router-dom'

export default function Nav() {
    return(
        <nav>
            <h1>
                <Link to='/posts'>Tingz</Link>
                {/* Posts are called Tingz... like Things */}
            </h1>
                <button>
                    <Link to='/posts/new'>New Ting</Link>
                </button>
        </nav>
    )
}