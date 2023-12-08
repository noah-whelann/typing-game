"use client"
import "./MainText.css"
import {VolumeUpRounded} from '@mui/icons-material';
import { useState, useEffect } from "react";
import Image from "next/image";
import darkbottombar from "@/app/assets/dark-bottom-bar.png"
import lightbottombar from "@/app/assets/light-bottom-bar.png"
import "./Data.css"
import { useTheme } from 'next-themes';
import LineChart from '../LineChart';
import { useCookies } from 'next-client-cookies';


const dummyData = [
  { date: '2022-01-01', wpm: 50, accuracy: 80 },
  { date: '2022-01-02', wpm: 60, accuracy: 90 },
  { date: '2022-01-03', wpm: 45, accuracy: 75 },
  { date: '2022-01-04', wpm: 70, accuracy: 85 },
  { date: '2022-01-05', wpm: 40, accuracy: 95 },
];

const Stats = () => {
  const chartData = {
    labels: dummyData.map((d) => d.date),
    datasets: [
      {
        label: 'WPM over time',
        data: dummyData.map((d) => d.wpm),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <LineChart chartData={chartData} />
    </div>
  );
};

const MainText = () => {
    const [wordsList, setWordsList] = useState(['...']);
    let [wordIndex, setIndex] = useState(0);
    let [word, setWord] = useState('...');
    let [text, setText] = useState('');
    let [typing, setTyping] = useState(false);
    let [start, setStart] = useState(0);
    let [timer, setTimer] = useState(0);
    let [correctChars, setCorrectChars] = useState(0);
    let [typedChars, setTypedChars] = useState(0);
    const {theme, setTheme} = useTheme();
    const cookies = useCookies();

    function textFocus() {
        /* Focuses user on wordinput */
        let input = document.getElementById("wordinput");
        if (input != null) input.focus();
    }

    function updateText() {
        /* Gets currently typed text from invisible wordinput */
        let input = document.getElementById("wordinput") as HTMLInputElement;
        setText(input.value);
        if (wordIndex == 0 && !typing) {
            setTyping(true);
        }
        updateTimer();
    }

    function updateTimer() {
        if (typing == true) {
            setTimer(Math.floor(Date.now()/1000) - start);
        } else {
            setTimer(timer);
        }
    }

    function Text() {
        let chars = Array.from(word);
        let typed = Array.from(text);
        let render = [];

        if (chars.every((c, i) => c === typed[i])) {
            let input = document.getElementById("wordinput") as HTMLInputElement;
            input.value = "";
            updateText();
            if (typing) setIndex(wordIndex + 1);
            chars = Array.from(word);
            typed = [];
        }

        for (let i = 0; i < Math.max(chars.length, typed.length); i++) {

            /* 
            pushes tuples to render char array of form {id, char, status}
            status = 0: untyped
            status = 1: typed, correct
            status = 2: typed, incorrect
            */
            
            //for typed characters after word
            if (i >= chars.length) {
                if (typed.at(i) == ' ') {
                    render.push({id: i, char: '_', status: 2});
                } else {
                    render.push({id: i, char: typed.at(i), status: 2});
                }
            } 
            //for non-typed characters
            else if (i >= typed.length) {
                if (chars.at(i) == ' ') {
                    render.push({id: i, char: ' ', status: 0});
                } else {
                    render.push({id: i, char: chars.at(i), status: 0});
                }
            } 
            //for incorrectly typed characters
            else if (typed.at(i) != chars.at(i)) {
                if (chars.at(i) == ' ') {
                    render.push({id: i, char: '_', status: 2});
                } else {
                    render.push({id: i, char: chars.at(i), status: 2});
                }
            } 
            //for correctly typed characters
            else {
                render.push({id: i, char: chars.at(i), status: 1});
            }
        }

        return (
            render.map((c) => <span key={c.id} id={c.status == 0 ? 'untypedtext' : (c.status == 1 ? 'correcttext' : 'incorrecttext')}>{c.char}</span>)
        )
    }
    
    //let intervalID = setInterval(updateTimer, 1000);

    /* Fetches list of random words (default 10 words, between 5-10 chars). */
    useEffect(() => {
        fetch('https://random-word.ryanrk.com/api/en/word/random/' + cookies.get('wordCount') + '?' + cookies.get('diff'))
            .then(response => response.json())
            .then(data => {
                setWordsList(data);
            });
    }, []);

    /* Updates other variables once random words list is fetched/updated */
    useEffect(() => {
        setWord(wordsList[0]);
        setIndex(0);
    }, [wordsList]);

    /* Starts and updates timers based on typing status */
    useEffect(() => {
        if (typing) {
            setStart(Math.floor(Date.now()/1000));
        }
    }, [typing]);

    /* Updates word once another word is indexed to */
    useEffect(() => {
        if (wordIndex >= wordsList.length) {
            setWord("Typing challenge complete!");
            setTyping(false);
        } else {
            setWord(wordsList[wordIndex]);
        }
    }, [wordIndex]);

    if (!typing && wordIndex > 0) {
        return (
            <div className="textdisplay">
            <div id="maintext">
                <span id="correcttext">Typing challenge complete!</span>
            </div>
            <div>
                <Stats></Stats>
            </div>
            <div className="bottomstats">
                <div className="data">
                    <div className="words-typed">
                        <p id="words-typed-number">
                        { wordIndex }
                        </p>
                        <p id="words-typed-text">
                        words typed
                        </p>
                    </div>
                    <div className="timer">
                        <p id="timer-number">
                        { timer }s
                        </p>
                        <p id="timer-text">
                        time elapsed
                        </p>
                    </div>
                    <div className="wpm">
                        <p id="wpm-number">
                        { wordIndex == 0 ? '--' : Math.floor(wordIndex / (timer/60)) }
                        </p>
                        <p id="wpm-text">
                        words per min
                        </p>
                    </div>
                </div>
                <div id='just-a-bar'>
                    <Image src={theme=='light' ? darkbottombar : lightbottombar} alt="bar"/>
                </div>
            </div>
        </div>
        );
    }

    else return (
        <div className="textdisplay">
            <div id="maintext" onClick={ textFocus }>
                { Text() }
            </div>
            <input id="wordinput" 
                autoFocus 
                autoComplete="off" 
                onInput={ updateText } 
                autoCapitalize="off" 
                autoCorrect="off" 
                data-gramm="false" 
                data-gramm_editor="false" 
                data-enable-grammarly="false" 
                list="autocompleteOff"
                spellCheck="false"/>
            <button>
                <VolumeUpRounded id="sound"/>
            </button>
            <div className="bottomstats">
                <div className="data">
                    <div className="words-typed">
                        <p id="words-typed-number">
                        { wordIndex }
                        </p>
                        <p id="words-typed-text">
                        words typed
                        </p>
                    </div>
                    <div className="timer">
                        <p id="timer-number">
                        { timer }s
                        </p>
                        <p id="timer-text">
                        time elapsed
                        </p>
                    </div>
                    <div className="wpm">
                        <p id="wpm-number">
                        { wordIndex == 0 ? '--' : Math.floor(wordIndex / (timer/60)) }
                        </p>
                        <p id="wpm-text">
                        words per min
                        </p>
                    </div>
                </div>
                <div id='just-a-bar'>
                    <Image src={theme=='light' ? darkbottombar : lightbottombar} alt="bar"/>
                </div>
            </div>
        </div>
    );
}

export default MainText