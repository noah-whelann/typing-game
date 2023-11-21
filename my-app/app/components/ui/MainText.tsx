"use client"
import "./MainText.css"
import {VolumeUpRounded} from '@mui/icons-material';
import { useState } from "react";

const MainText = () => {
    /* Logic Implementation required here */
    let [wordsList, setWordsList] = useState('replace this with api call for random word')
    let [word, setWord] = useState('Random word')
    let [text, setText] = useState(word)

    function textFocus() {
        /* Used to detect focus and stuff, can be changed */
        let input = document.getElementById("wordinput");
        if (input != null) input.focus();
    }

    function updateText() {
        /* Gets text input from hidden textinput */
        let input = document.getElementById("wordinput") as HTMLInputElement;
        if (input.value == "") {
            setText(word);
        } else {
            setText("");
            setText(input.value);
        }

        renderText();
    }

    function renderText() {
        let chars = Array.from(text);
        return (
            chars.map((c:string, i:number)=><span key={i}>{c}</span>)
        )
    }

    return (
        <div className="textdisplay">
            <div id="maintext" onClick={ textFocus }>
                {renderText()}
            </div>
            <input id="wordinput" autoFocus 
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