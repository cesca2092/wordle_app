import { useContext } from "react";
import { BoardContext } from "../context";


export const Stats = () => {

  const { 
    finished,
    gameWon,
    minutes,
    seconds,
    secretWord,
    gameAttempts,
    setOpenStats,
    onResetGame,
  } = useContext(BoardContext);

  const { attempts, won } = gameAttempts;
 
  const handleClick = () => {
    if(finished){
      onResetGame();
    } else {
      setOpenStats(prev => !prev)
    }
  }


  return (
    <>
      <p className="text-xlg font-bold">Estadísticas</p>

      <div className="flex w-full justify-around">
        <div className="flex flex-col justify-center items-center">
          <p className="text-xlg font-bold">{attempts}</p>
          <p>Jugadas</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="text-xlg font-bold">{won}</p>
          <p>Victorias</p>
        </div>
      </div>

      {
        (!gameWon && finished) 
        ? <>
            <p>La palabra era: <strong>{secretWord}</strong></p>
            <p>SIGUIENTE PALABRA</p>
          </>
        : (gameWon && finished)
        ? <p>SIGUIENTE PALABRA</p>
        : <></>
      }

      <span className="font-bold text-lg">{`${minutes}:${seconds}`}</span>

      <button
        id='game_button'  
        onClick={handleClick}
      >
        ACEPTAR  
      </button>
    </>
  )
}
