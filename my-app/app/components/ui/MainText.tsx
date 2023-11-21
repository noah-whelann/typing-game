"use client"
import "./MainText.css"
import {VolumeUpRounded} from '@mui/icons-material';
import { useState } from "react";

const MainText = () => {
    /* Logic Implementation required here */
    let [text, setText] = useState('replace this with api call for random word')

    function textFocus() {
        /* Used to detect focus and stuff, can be changed */
        let input = document.getElementById("wordinput");
        if (input != null) input.focus();
    }

    function updateText() {
        let input = document.getElementById("wordinput") as HTMLInputElement;
        setText(input.value);
    }

    return (
        <div className="textdisplay">
            <p id="maintext" onClick={ textFocus }>{ text }</p>
            <input id="wordinput" autoFocus autoComplete="false" onInput={ updateText }/>
            <button>
                <VolumeUpRounded id="sound"/>
            </button>
        </div>
       
    );
}

export default MainText