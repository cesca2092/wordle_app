import { useEffect } from "react";
import { useState } from "react";
import { getWord, word } from "../helpers";
import { useTimer } from "../hooks/useTimer";
import { BoardContext } from "./";

const defaultTiming = 60000 * 5;

export const BoardProvider = ({children}) => {

    const [firstTime, setFirstTime] = useState(true);
    const [openIntro, setOpenIntro] = useState(false);
    const [openStats, setOpenStats] = useState(false);
    const [gameWon, setGameWon] = useState(false);
    const [finished, setFinished] = useState(false);
    const [board, setBoard] = useState(word());
    const [secretWord, setSecretWord] = useState('');
    const [wordsShowed, setWordsShowed] = useState([]);
    const [correctKeys, setCorrectKeys] = useState([]);
    const [almostKeys, setAlmostKeys] = useState([]);
    const [incorrectKeys, setIncorrectKeys] = useState([]);
    const [gameAttempts, setGameAttempts] = useState({attempts:0, won:0});
    const [currentAttempt, setCurrentAttempt] = useState({attempt:0,letterPos:0});
    const { attempt, letterPos } = currentAttempt;

    const { 
        minutes,
        seconds,
        remaining,
        initCountDown, 
        clearCountDown,
    } = useTimer();
    
    const setNewSecretWord = () => {
        let newWord = '';
        do {
            newWord = getWord();
        } while (wordsShowed.includes(newWord));

        setSecretWord(newWord);
    }

    const restartFinishedLost = () => {
        clearCountDown();
        setGameAttempts(prev => ({
            ...prev,
            attempts: prev.attempts + 1
        }));
        setOpenIntro(false);
        setFinished(true);
        setGameWon(false);
    }

    const restartFinishedWon = () => {
        clearCountDown();
        setGameAttempts(prev => ({
            ...prev,
            attempts: prev.attempts + 1,
            won: prev.won + 1
        }));
        setFinished(true);
        setGameWon(true);
    }
    

    const checkWord = () => {
        if(secretWord === board[attempt].join('')){
            restartFinishedWon();
        }else if(attempt === 4){
            restartFinishedLost();
        }
    }

    const onSelectLetter = (letter) => {
        if( letterPos > 4) return;
        const newBoard = [...board]
        newBoard[attempt][letterPos] = letter;
        setBoard(newBoard);
        setCurrentAttempt({...currentAttempt, letterPos: letterPos + 1})
    }

    const onDelete = () => {
        if(letterPos === 0) return;
        const newBoard = [...board]
        newBoard[attempt][letterPos - 1] = "";
        setBoard(newBoard);
        setCurrentAttempt({...currentAttempt, letterPos: letterPos - 1})
    }

    const onEnter = () => {
        if(letterPos < 5) return;
        checkWord();
        setCurrentAttempt({attempt: attempt + 1, letterPos: 0});
    }

    const onResetGame = () => {
        setBoard(word())
        setOpenStats(false);
        setFinished(false);
        setGameWon(false);
        setOpenIntro(false);
        setWordsShowed([]);
        setCorrectKeys([]);
        setAlmostKeys([]);
        setIncorrectKeys([]);
        setCurrentAttempt({attempt:0,letterPos:0});
        const init = new Date().getTime() + defaultTiming;
        initCountDown(init); 
        setNewSecretWord();
    }

    useEffect(() => {
        const newWord = getWord()
        setSecretWord(newWord);
        setWordsShowed([...wordsShowed, newWord]);
    }, []);

    useEffect(() => {
        if(!firstTime){
            const init = new Date().getTime() + defaultTiming;
            initCountDown(init);
        }
    }, [firstTime]);

    useEffect(() => {
        if(remaining === 0 && !firstTime ){
            restartFinishedLost();
        }
    },[remaining])
    

    return (
        <BoardContext.Provider
            value={{
                board,
                currentAttempt,
                secretWord,
                correctKeys,
                almostKeys,
                incorrectKeys,
                firstTime,
                openIntro,
                minutes,
                seconds,
                remainingTime: remaining,
                openStats,
                gameWon,
                gameAttempts,
                finished,
                initCountDown, 
                clearCountDown,
                setBoard,
                setCurrentAttempt,
                setCorrectKeys,
                setAlmostKeys,
                setIncorrectKeys,
                setSecretWord,
                onDelete,
                onEnter,
                onSelectLetter,
                setFirstTime,
                setOpenIntro,
                setOpenStats,
                setGameWon,
                setGameAttempts,
                setFinished,
                onResetGame
            }}
        >
            {children}
        </BoardContext.Provider>
    )
}