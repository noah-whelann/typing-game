"use client"
import "./MainText.css"
import {VolumeUpRounded} from '@mui/icons-material';
import { useState, useEffect } from "react";
import Image from "next/image";
import darkbottombar from "@/app/assets/dark-bottom-bar.png"
import lightbottombar from "@/app/assets/light-bottom-bar.png"
import "./Data.css"

const Data = () => {
        
    /* Logic Implementation needed */
    let [wordsTyped, setWordsTyped] = useState<number>(10)
    let [timer, setTimer] = useState<string>('0');
    let [wpm, setWPM] = useState<number>(10);

    return (
        <div className="bottomstats">
            <div className="data">
                <div className="words-typed">
                    <p id="words-typed-number">
                    { wordsTyped }
                    </p>
                    <p id="words-typed-text">
                    words typed
                    </p>
                </div>
                <div className="timer">
                    <p id="timer-number">
                    { timer }
                    </p>
                    <p id="timer-text">
                    time elapsed
                    </p>
                </div>
                <div className="wpm">
                    <p id="wpm-number">
                    { wpm }
                    </p>
                    <p id="wpm-text">
                    words per min
                    </p>
                </div>
            </div>
            <div id='just-a-bar'>
                <Image src={lightbottombar} alt="bar"/>
            </div>
        </div>
    )
}

const MainText = () => {
    const [wordsList, setWordsList] = useState(['...']);
    let [wordIndex, setIndex] = useState(0);
    let [word, setWord] = useState('...');
    let [text, setText] = useState('');

    function textFocus() {
        /* Focuses user on wordinput */
        let input = document.getElementById("wordinput");
        if (input != null) input.focus();
    }

    function updateText() {
        /* Gets currently typed text from invisible wordinput */
        let input = document.getElementById("wordinput") as HTMLInputElement;
        //setText("");
        setText(input.value);
    }

    function Text() {
        let chars = Array.from(word);
        let typed = Array.from(text);
        let render = [];

        if (chars.every((c, i) => c === typed[i])) {
            let input = document.getElementById("wordinput") as HTMLInputElement;
            input.value = "";
            updateText();
            setIndex(wordIndex + 1);
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
            
            if (i >= chars.length) {
                render.push({id: i, char: typed.at(i), status: 2});
            } else if (i >= typed.length) {
                render.push({id: i, char: chars.at(i), status: 0});
            } else if (typed.at(i) != chars.at(i)) {
                render.push({id: i, char: chars.at(i), status: 2});
            } else {
                render.push({id: i, char: chars.at(i), status: 1});
            }
        }

        return (
            render.map((c) => <span key={c.id} id={c.status == 0 ? 'untypedtext' : (c.status == 1 ? 'correcttext' : 'incorrecttext')}>{c.char}</span>)
        )
    }
    
    /* Fetches list of random words (default 10). */
    useEffect(() => {
        fetch('https://random-word-api.herokuapp.com/word?number=10')
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

    /* Updates word once another word is indexed to */
    useEffect(() => {
        if (wordIndex >= wordsList.length) {
            setWord("Typing challenge complete!");
        } else {
            setWord(wordsList[wordIndex]);
        }
    }, [wordIndex]);

    return (
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
            {Data()}
        </div>
    );
}

export default MainText