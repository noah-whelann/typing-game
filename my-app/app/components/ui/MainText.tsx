"use client"
import "./MainText.css"
import {VolumeUpRounded} from '@mui/icons-material';
import { useState } from "react";

const MainText = () => {
    /* Logic Implementation required here */
    let [wordsList, setWordsList] = useState('replace this with api call for random word')
    let [word, setWord] = useState('Random word')
    let [text, setText] = useState('')

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

    function renderText() {
        let chars = Array.from(word);
        let typed = Array.from(text);
        let render = [];

        for (let i = 0; i < Math.max(chars.length, typed.length); i++) {
            
            /* 
            pushes tuples to render array of form {id, char, status}
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
        
        console.log(chars);
        console.log(typed);
        console.log(render);

        return (
            render.map((c) => <span key={c.id} id={c.status == 0 ? 'untypedtext' : (c.status == 1 ? 'correcttext' : 'incorrecttext')}>{c.char}</span>)
        )
    }

    renderText();

    return (
        <div className="textdisplay">
            <div id="maintext" onClick={ textFocus }>
                { renderText() }
            </div>
            <input id="wordinput" 
                autoFocus 
                autoComplete="false" 
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