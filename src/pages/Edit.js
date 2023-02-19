import EditForm from "../components/EditThingsForm"
import song from '../assets/HoliznaCC0_Poor_But_Happy.mp3'
import ReactAudioPlayer from 'react-audio-player';
export default function Edit(){
    return(
        <div className="edit">
            <EditForm/>
        <div className="audio-player" hidden>
            <ReactAudioPlayer
            src={song}
            autoPlay
            controls
            volume={0.1}
            loop
            preload="auto"
            />
        </div>
        </div>
    )
}