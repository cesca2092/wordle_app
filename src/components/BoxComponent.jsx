import { useContext } from "react";
import { BoardContext } from "../context";
import { Delete } from "../icons";

export const BoxComponent = ({content, styles, bigKey = '' }) => {
    
    const { 
        onSelectLetter, 
        onDelete,
        onEnter,
        correctKeys,
        almostKeys,
        incorrectKeys,
    } = useContext(BoardContext);


    const handleClickKey = () => {
        if( content === 'ENTER') {
            onEnter();
        } else if(content === 'DEL'){
            onDelete();
        } else {
            onSelectLetter(content);
        }
    }
    
    return (
            <button
                    className={`flex items-center justify-center ${styles} ${bigKey}`}
                    id={ 
                        correctKeys.includes(content) ? 'correct' :
                        almostKeys.includes(content) ? 'almost' :
                        incorrectKeys.includes(content) ? 'incorrect' :
                        ''
                     }
                    onClick={handleClickKey}
            >
                {content === 'DEL' ? <Delete /> : content}
            </button>
  )}

