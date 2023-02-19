import { Link } from 'react-router-dom'
import { UserContext } from '../providers/userProvider'
import { useContext} from 'react';

export default function Nav (){
  const user = useContext(UserContext);


    return(
      
      <nav className='Nav'>
            <Link to="/about"><button>About</button></Link>
            
            <Link to='/posts'><button>Posted Tingz</button></Link>
                
            <Link to='/posts/new'><button>New Ting</button></Link>

            <Link to='/posts/prompts'><button>Prompts</button></Link>

            <img className='pfp' src={user ? user.photoURL: null}></img>
        <div className='testing'><li>{user? `Welcome, ${user.displayName}`: null}</li></div>
            
        </nav>
    )
}







// export default function Nav (){



 

//     return(
//         <nav className='Nav'>
//           

//             <Link to='/posts'><button>Posted Tingz</button></Link>
                
//             <Link to='/posts/new'><button>New Ting</button></Link>

//             <Link to='/posts/prompts'><button>Prompts</button></Link>

//             <img src={user ? user.photoURL: null}></img>
  
//         </nav>
//     )
// }