
import { useContext } from "react";
import { BoardContext } from "../context";
import { RowComponent } from "./";


export const Board = () => {

  const {
    board
  } = useContext(BoardContext) 

  return (
    <div className="flex gap-y-3 flex-col">
        {
            board.map( (word,i) => (
                <RowComponent
                    key={i} 
                    elements={word}
                    rowPos={i}
                    styles={"flex gap-x-3 flex-row"}
                    stylesChild={`w-board-letter h-board-letter bg-board text-lg rounded-board-letter`}
                />
            ))
        }
    </div>
  )
}
