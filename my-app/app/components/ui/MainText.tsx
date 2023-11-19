"use client"
import "./MainText.css"
import {VolumeUpRounded} from '@mui/icons-material';
import { useState } from "react";

const MainText = () => {
    /* Logic Implementation required here */
    let [text, setText] = useState('replace this with api call for random word')
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