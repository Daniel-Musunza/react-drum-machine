import { useEffect , useState} from 'react';
import './App.css';

function App() {
  const [activeKey, setActiveKey] =useState('');
  useEffect (() => {
    document.addEventListener('keydown', (event) => {
      playSound(event.key.toUpperCase());
    })
  }, [])
const drumPads = [
  {
    name: "Heater 1",
    keyCode: 81,
    text: "Q",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    name: "Heater 2",
    keyCode: 87,
    text: "W",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    name: "Heater 3",
    keyCode: 69,
    text: "E",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    name: "Heater 4",
    keyCode: 65,
    text: "A",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    name: "Clap",
    keyCode: 83,
    text: "S",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    name: "Open-HH",
    keyCode: 68,
    text: "D",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    name: "Kick-n'-Hat",
    keyCode: 90,
    text: "Z",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    name: "Kick",
    keyCode: 88,
    text: "X",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    name: "Closed-HH",
    keyCode: 67,
    text: "C",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

function playSound(selector){
  const audio = document.getElementById(selector);
 
  audio.play();
  setActiveKey(selector);
}
  return (
    <div className="App">
      
      <header className="App-header" id="drum-machine">
        <h2>DRUM MACHINE</h2>
        <span>play to enjoy</span>
       <div id="display">{activeKey}</div>
        <div className='drum-pads'>
          {drumPads.map((drumPad) => (
            <div onClick={() => {playSound(drumPad.text)}} className='drum-pad' id={drumPad.src}>
              {drumPad.text}
              <audio className='clip' id={drumPad.text} src={drumPad.src}></audio>
            </div>
          ))}
       </div>
      </header>
    </div>
  );
}

export default App;
