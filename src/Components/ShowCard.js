import { useState,useEffect} from "react";
import LetterCard from "./LetterCard";
const ShowCard = ({letter,no}) => {

    const [visible,changeVisibilty] = useState(1)

    useEffect(() => {
        changeVisibilty(1);
        setTimeout(()=>{
            changeVisibilty(0);
        },500);
    },[letter,no])

    return (
        <div>
            {visible==1 && <LetterCard letter={letter}/>}
        </div>
    )
}

export default ShowCard
