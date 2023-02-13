import { Link } from 'react-router-dom'

export default function Nav (){
    return(
        <div className='Nav'>
            <Link to='/posts'><button>Post Tingz</button></Link>
            &nbsp;
            <Link to='/posts/new'><button>New Ting</button></Link>
        </div>
    )
}