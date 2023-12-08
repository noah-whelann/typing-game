'use client';
import React, { useState } from "react";
import "./GameBar.css"
import { Settings} from '@mui/icons-material';
import { NavigateNextRounded } from '@mui/icons-material';
import { NavigateBeforeRounded } from '@mui/icons-material';
import { useTheme } from 'next-themes';
import { useCookies } from 'next-client-cookies';

const GameBar = () => {
  const cookies = useCookies();
  const { theme, setTheme } = useTheme();
  const [ color, setColor ] = useState(cookies.get('theme') == null ? 'dark' : cookies.get('theme'));
  const [activeTimeClass, setActiveTimeClass] = useState(cookies.get('activeTimeClass') == null ? 'hrtime ml-[7.5%]' : cookies.get('activeTimeClass'));
  const [activeDiffClass, setActiveDiffClass] = useState(cookies.get('activeDiffClass') == null ? 'hrdiff ml-[7.5%] w-[16%]' : cookies.get('activeDiffClass'));

  const handleTimeClick = (id: React.SetStateAction<string>) => {
    if (id == 'timeone') {
      setActiveTimeClass('hrtime ml-[7.5%]');
      cookies.set('activeTimeClass', 'hrtime ml-[7.5%]');
      cookies.set('wordCount', '10');
      window.location.reload();
    }
    if (id == 'timetwo') {
      setActiveTimeClass('hrtime ml-[32.5%]');
      cookies.set('activeTimeClass', 'hrtime ml-[32.5%]');
      cookies.set('wordCount', '20');
      window.location.reload();
    }
    if (id == 'timethree') {
      setActiveTimeClass('hrtime ml-[57.5%]');
      cookies.set('activeTimeClass', 'hrtime ml-[57.5%]');
      cookies.set('wordCount', '30');
      window.location.reload();
    }
    if (id == 'timefour') {
      setActiveTimeClass('hrtime ml-[82.5%]');
      cookies.set('activeTimeClass', 'hrtime ml-[82.5%]');
      cookies.set('wordCount', '50');
      window.location.reload();
    }
  };

  const handleDiffClick = (id: React.SetStateAction<string>) => {
    if (id == 'easy') {
      setActiveDiffClass('hrdiff ml-[7.5%] w-[16%]');
      cookies.set('activeDiffClass', 'hrdiff ml-[7.5%] w-[16%]');
      cookies.set('diff', 'minlength=4&maxlength=7');
      window.location.reload();
    }
    if (id == 'medium') {
      setActiveDiffClass('hrdiff ml-[38%] w-[25%]');
      cookies.set('activeDiffClass', 'hrdiff ml-[38%] w-[25%]');
      cookies.set('diff', 'minlength=7&maxlength=14');
      window.location.reload();
    }
    if (id == 'hard') {
      setActiveDiffClass('hrdiff ml-[77%] w-[16%]');
      cookies.set('activeDiffClass', 'hrdiff ml-[77%] w-[16%]');      
      cookies.set('diff', 'minlength=14');
      window.location.reload();
    }
  }

  const handleColorClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    setColor(color === 'dark' ? 'light' : 'dark');
  }

  return (
    <div className="gamebar">
      <div id="navbar">
        <div className="time">
          <button className="timeselection" onClick={() => handleTimeClick('timeone')} id="timeone">10</button>
          <button className="timeselection" onClick={() => handleTimeClick('timetwo')} id="timetwo">20</button>
          <button className="timeselection" onClick={() => handleTimeClick('timethree')} id="timethree">30</button>
          <button className="timeselection" onClick={() => handleTimeClick('timefour')} id="timefour">50</button>
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
          <p>{color}</p>
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