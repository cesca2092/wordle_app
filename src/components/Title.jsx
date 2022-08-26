import { useContext } from "react"
import { BoardContext } from "../context"
import { Toggle } from "./"
import { Question, Stats } from "../icons"

export const Title = () => {

  const {
    setOpenIntro,
    setOpenStats,
  } = useContext(BoardContext);

  const handleIntro = () => {
    setOpenIntro( prev => !prev );
  }

  const handleStats = () => {
    setOpenStats( prev => !prev );
  }
  return (
    <div 
      className='flex flex-row items-center w-main-title justify-between rounded-main-title bg-main-title h-main-title'
    >
      <Question 
        onClick={handleIntro}
        className='px-4 flex-1'
      />

      <div className="flex flex-1">
        <span className='font-bold text-xlg'>WORDLE</span>
      </div>
      <div className='flex flex-row px-4 flex-1 justify-end'>

          <Stats onClick={handleStats} />
          <Toggle />
      </div>
    </div>
  )
}
