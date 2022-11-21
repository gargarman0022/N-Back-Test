import { useState,useEffect} from "react";
import LetterCard from "./LetterCard";
const ShowCard = ({letter,no}) => {

    const msg = new SpeechSynthesisUtterance() 
    msg.text = letter
    useEffect(() => {
        window.speechSynthesis.speak(msg)
    },[letter,no])

    return (
        <div>
            {<LetterCard letter={""}/>}
        </div>
    )
}

export default ShowCard
