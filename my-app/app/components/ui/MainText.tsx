"use client"
import "./MainText.css"
import {VolumeUpRounded} from '@mui/icons-material';
import { useState, useEffect } from "react";

const MainText = () => {
    /* Logic Implementation required here */
    const [text, setText] = useState('')

    useEffect(() => {
        fetch('https://random-word-api.herokuapp.com/word')
        .then(response => response.json())
        .then(data => setText(data));
        }, []);

    return (
        <div className="textdisplay">
            <p id="maintext">{ text }</p>
            <button>
                <VolumeUpRounded id="sound"/>
            </button>
        </div>
       
    );
}

export default MainText