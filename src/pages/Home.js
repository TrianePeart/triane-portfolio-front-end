import Login from '../components/Login'
import Posts from '../components/Posts'
import song from '../assets/HoliznaCC0_Poor_But_Happy.mp3'
import ReactAudioPlayer from 'react-audio-player';

export default function Home () {

  const  handlePlay = () => {
        console.log('Audio started playing');
      };

    return(
        <div className="background">
            <div className="audio-playerH">
            <ReactAudioPlayer
            src={song}
            autoPlay
            controls
            volume={0.5}
            loop
            preload="auto"
            onPlay={handlePlay()}
            />
        </div>
            <h1>Tingz Posted</h1>
            <div className='log'><Login/></div>
            <Posts/>
        </div> 
    )
}
