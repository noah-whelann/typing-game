"use client"
import { useState } from "react";
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

export default Data