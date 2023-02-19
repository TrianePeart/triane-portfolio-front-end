import NewForm from '../components/newThingForm'; 
import song2 from '../assets/HoliznaCC0 _Waves.mp3.mp3'
import ReactAudioPlayer from 'react-audio-player';
export default function NewPost(){
    return(
        <div className="new">
            <div className="audio-player">
            <ReactAudioPlayer
            src={song2}
            autoPlay
            controls
            volume={0.5}
            loop
            preload="auto"
            />
           </div>
            <NewForm/>
        </div>
    )
}