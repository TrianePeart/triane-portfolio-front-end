import Login from '../components/Login'
import Posts from '../components/Posts'
export default function Home () {
    return(
        <div className="background">
            <h1>Tingz Posted</h1>
            <Login/>
            <Posts/>
        </div> 
    )
}
