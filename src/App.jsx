import { useContext } from "react";
import { Board, KeyBoardContainer, Modal, Title } from "./components";
import { BoardContext } from "./context";
import { Introduction, Stats } from "./views";



export const App = () => {  

  const { 
    firstTime, 
    openIntro,
    finished,
    openStats
  } = useContext(BoardContext)
  
  return (
    <>
      <div 
          className={`flex flex-col justify-center items-center min-h-screen gap-y-7  ${
            (firstTime || openIntro || finished || openStats)  ? 'bg-modal opacity-20' :''
          }`}
      >
          <Title />
          <Board />
          <KeyBoardContainer />
      </div>

      {
        ( firstTime || openIntro ) && (
          <Modal
            styles="w-modal min-w-modal min-h-intro rounded-modal"
          >
            <Introduction />
          </Modal>)
      }
      {
        ( finished || openStats ) && (
          <Modal
            styles="w-modal min-w-modal min-h-modal rounded-modal"
          >
            <Stats />
          </Modal>)
      }
    </>

  )
}
