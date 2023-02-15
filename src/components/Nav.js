import { Link } from 'react-router-dom'
import Search from '../components/SearchBar'

export default function Nav (){
    return(
        <nav className='Nav'>
          
            <Link to='/posts'><button role='button'>Posted Tingz</button></Link>
                
            <Link to='/posts/new'><button role='button'>New Ting</button></Link>

            <Link to='/'><button role='button'>Home</button></Link>

            <Search/>
            {/* Fix this */}
            
        </nav>
    )
}