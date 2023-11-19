import React from "react";
import "./GameBar.css"
import { Settings} from '@mui/icons-material';
import { NavigateNextRounded } from '@mui/icons-material';
import { NavigateBeforeRounded } from '@mui/icons-material';

const GameBar = () => {
  return (
    <div className="gamebar">
      <div id="navbar">
        <button id="timeselection">10s</button>
        <button id="timeselection">15s</button>
        <button id="timeselection">30s</button>
        <button id="timeselection">60s</button>
        <p id="separator">|</p>
        <button id="difficulty">easy</button>
        <button id="difficulty">medium</button>
        <button id="difficulty">hard</button>
        <p id="separator">|</p>
        <button className='colortheme' id="darkmode">dark</button>
        <button id="gamebar-icons">
        <Settings id='gamebaricons'/>
        </button>
        <button id="gamebar-icons">
        <NavigateBeforeRounded id='gamebaricons'/>
        </button>
        <button id="gamebar-icons">
        <NavigateNextRounded id='gamebaricons'/>
        </button>
        
      </div>
    </div>
  );
};

export default GameBar;
