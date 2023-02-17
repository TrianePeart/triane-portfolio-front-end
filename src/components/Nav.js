import { Link } from 'react-router-dom'

export default function Nav (){
    return(
        <nav className='Nav'>
          
            <Link to='/posts'><button>Posted Tingz</button></Link>
                
            <Link to='/posts/new'><button>New Ting</button></Link>

            <Link to='/'><button>Home</button></Link>

            <Link to='/post/prompts'><button>Prompts</button></Link>
            {/* Fix this */}
            
        </nav>
    )
}