import { getKeyBoard } from "../helpers"
import { RowComponent } from "./RowComponent";

const keyboard = getKeyBoard();

export const KeyBoard = () => {   
  return (
    <div className="flex gap-y-1 flex-col mt-6 mb-6 mr-9 ml-9">
        {
            keyboard.map( (keys,i) => (
                <RowComponent 
                    key={i} 
                    styles={`flex gap-x-1 flex-row ${
                        i === 1 ? 'ml-6' :
                        i === 2 ? 'mr-6' : ''
                    }`}
                    elements={keys} 
                    stylesChild={`h-key bg-keys rounded-key text-black font-semibold`}
                    isBoxButton
                />
            ))
        }
    </div>
  )
}
