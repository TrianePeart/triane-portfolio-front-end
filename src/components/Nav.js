import { Link } from 'react-router-dom'

export default function Nav (){
    return(
        <nav className='Nav'>

            <Link to='/'><button>Home</button></Link>
          
            <Link to='/posts'><button>Posted Tingz</button></Link>
                
            <Link to='/posts/new'><button>New Ting</button></Link>

            <Link to='/posts/prompts'><button>Prompts</button></Link>
            
        </nav>
    )
}