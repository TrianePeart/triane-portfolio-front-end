import { Link } from 'react-router-dom'

export default function Nav (){
    return(
        <nav className='Nav'>
          
            <Link to='/posts'><button role='button'>Post Tingz</button></Link>
                
            <Link to='/posts/new'><button role='button'>New Ting</button></Link>
            
        </nav>
    )
}