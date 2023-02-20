import song4 from '../assets/HoliznaCC0_2HourDelay.mp3'
import ReactAudioPlayer from 'react-audio-player';
export default function About () {
    return(
        <div className="Triane">
        <div className="audio-about" hidden>
        <ReactAudioPlayer
            src={song4}
            autoPlay
            controls
            volume={0.1}
            loop
            preload="auto"
            />
        </div>
        <div className="About">
        <div className="cardA">
            <h1>Write Tingz</h1>
            <p>Welcome to my baby passion project. When making this app, I wanted something that reflected myself and when I'm not coding, I'm writing. I'm also calling everything placed in my path a thingy or tingz because english is hard. Tingz are everywhere and so birthed Write Tingz. My baby passion project I intend to build on for years to come.</p>

            <p>Within this project you will find post I completely love. An edit section I plan to make user based so no one can edit your work. A create section and if you're not feeling very creative prompts. There's lo-fi music added because my friend Juan inspired me and as I write this I have the flu and it's making me happy. I hope it makes you a little happy too.</p>

            <h1>About The Developer</h1>
            <p>... after all that said. I do not like speaking about myself out of context. but I do enjoy speaking. If you're down for a chat connect with me on git hub, LinkedIn or challenge me on codewars. In context I'm very competitive and only like to do it when I have a set goal </p>

         
       <a href="https://github.com/TrianePeart"><img alt="GitHub followers" src="https://img.shields.io/badge/Github-Follow%20me-blue?/github/followers/TrianePeart?style=for-the-badge"/></a>
       <br/>
        <a href="https://www.codewars.com/users/TheDemi-GirlHasNoName"><img alt='CodeWars Link' src="https://img.shields.io/badge/CodeWars-Challenge%20me-blue?style=for-the-badge&logo=appveyor"/></a>

        &nbsp;

        <a href="https://www.linkedin.com/in/trianepeart"><img alt="Linked In" src="https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=appveyor"/></a>
        </div>
        </div>
        </div>
    )
}