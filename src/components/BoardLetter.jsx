import { useEffect } from "react";
import { useContext } from "react";
import { BoardContext } from "../context";

export const BoardLetter = ({styles, letterPos, rowPos}) => {

    const { 
        board, 
        secretWord, 
        currentAttempt,
        setCorrectKeys,
        setAlmostKeys,
        setIncorrectKeys,
    } = useContext(BoardContext);

    const letter = board[rowPos][letterPos];

    const correct = secretWord[letterPos] === letter;
    const almost = !correct && letter !== "" && secretWord.includes(letter);

    const letterState = currentAttempt.attempt > rowPos 
    ? (correct ? 'correct' : almost ? 'almost' : 'incorrect')
    : '';

    useEffect(() => {
        if( letter === "") return;
        if( currentAttempt.attempt <= rowPos) return

        if( correct ){
            setCorrectKeys( prev => [...prev, letter]);
        } else if( almost ){
            setAlmostKeys( prev => [...prev, letter]);
        } else {
            setIncorrectKeys( prev => [...prev, letter]);
        }

    }, [currentAttempt.attempt])
    

  return (
    <div
        className={`flex items-center justify-center text-black font-bold ${styles}`}
        id={letterState}
    >
        <span>
            {letter}
        </span>
    </div>
)
}
