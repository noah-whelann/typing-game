"use client"
import "./MainText.css"
import {VolumeUpRounded} from '@mui/icons-material';
import { useState, useEffect } from "react";

const MainText = () => {
    /* Logic Implementation required here */
    let [wordsList, setWordsList] = useState(['demonstration', 'list', 'of', 'words']);
    let [word, setWord] = useState('loading...');
    let [text, setText] = useState('');

    function textFocus() {
        /* Used to detect focus and stuff, can be changed */
        let input = document.getElementById("wordinput");
        if (input != null) input.focus();
    }

    function updateText() {
        /* Gets text input from hidden textinput */
        let input = document.getElementById("wordinput") as HTMLInputElement;
        setText("");
        setText(input.value);
    }

    function nextWord() {
        /* Function call assumes text field is empty */

        if (wordsList.length <= 0) {
            setWord("Typing challenge complete!");
        } else {
            setWord(wordsList[0]);
            setWordsList(wordsList.slice(1));
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
            nextWord();
            chars = Array.from(word);
            typed = [];
        }

        console.log(chars, typed);

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
    
    useEffect(() => {
        fetch('https://random-word-api.herokuapp.com/word?number=10')
            .then(response => response.json())
            .then(data => {
                setWordsList(data);
                console.log(data);
            })
            .then(nextWord)
            .then(() => {
                console.log("words loaded");
                console.log(wordsList);
            });
    }, []);

    return (
        <div className="textdisplay">
            <div id="maintext" onClick={ textFocus }>
                { Text() }
            </div>
            <p>{text}</p>
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
        </div>
       
    );
}

export default MainText