'use client';
import React, { useState } from "react";
import "./GameBar.css"
import { Settings} from '@mui/icons-material';
import { NavigateNextRounded } from '@mui/icons-material';
import { NavigateBeforeRounded } from '@mui/icons-material';
import { useTheme } from 'next-themes';

const GameBar = () => {
  const { theme, setTheme } = useTheme();
  const [ color, setColor ] = useState("dark");
  const [activeTimeClass, setActiveTimeClass] = useState('hrtime ml-[7.5%]');
  const [activeDiffClass, setActiveDiffClass] = useState('hrdiff ml-[7.5%] w-[16%]');
  const handleTimeClick = (id: React.SetStateAction<string>) => {
    if (id == 'timeone') {setActiveTimeClass('hrtime ml-[7.5%]');}
    if (id == 'timetwo') {setActiveTimeClass('hrtime ml-[32.5%]');}
    if (id == 'timethree') {setActiveTimeClass('hrtime ml-[57.5%]');}
    if (id == 'timefour') {setActiveTimeClass('hrtime ml-[82.5%]');}
  };
  

  const handleDiffClick = (id: React.SetStateAction<string>) => {
    if (id == 'easy') {setActiveDiffClass('hrdiff ml-[7.5%] w-[16%]');}
    if (id == 'medium') {setActiveDiffClass('hrdiff ml-[38%] w-[25%]');}
    if (id == 'hard') {setActiveDiffClass('hrdiff ml-[77%] w-[16%]');}
  }

  const handleColorClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    setColor(color === 'dark' ? 'light' : 'dark');
  }

  return (
    <div className="gamebar">
      <div id="navbar">
        <div className="time">
          <button className="timeselection" onClick={() => handleTimeClick('timeone')} id="timeone">10s</button>
          <button className="timeselection" onClick={() => handleTimeClick('timetwo')} id="timetwo">15s</button>
          <button className="timeselection" onClick={() => handleTimeClick('timethree')} id="timethree">30s</button>
          <button className="timeselection" onClick={() => handleTimeClick('timefour')} id="timefour">60s</button>
          <hr className={ activeTimeClass }/>
        </div>
        <p id="separator">|</p>
        <div className="diff-container">
          <button className="difficulty" onClick={() => handleDiffClick('easy')} id="easy">easy</button>
          <button className="difficulty" onClick={() => handleDiffClick('medium')} id="medium">medium</button>
          <button className="difficulty" onClick={() => handleDiffClick('hard')} id="hard">hard</button>
          <hr className={ activeDiffClass }/>
        </div>
        <p id="separator">|</p>
        <button className='colortheme' onClick={handleColorClick}>
          <p className='hover-underline-animation'>{color}</p>
          </button>
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