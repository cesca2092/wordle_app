import { useContext } from "react";
import { BoardContext } from "../context";

const example_one = ["G", "A", "T", "O", "S"];
const example_two = ["V", "O", "C", "A", "L"];
const example_three = ["C", "A", "N", "T", "O"];

export const Introduction = () => {

    const { firstTime, openIntro, setFirstTime, setOpenIntro } = useContext(BoardContext);

    const handleClick = () => {
        if(firstTime)setFirstTime(false);
        if(openIntro)setOpenIntro(false);
    }

  return (
    <>
        <p className="text-lg font-bold mb-4">Cómo jugar</p>

        <div>
            <p>Adivina la palabra oculta en cinco minutos.</p> 
            <p className="my-2">Cada intento debe ser una palabra válida de 5 letras.</p>
            <p className="mb-2">
                Después de cada intento el color de las letras cambia 
                para mostrar qué tan cerca estás de acertar la palabra.
            </p>
        </div>

        <div>
            <p className="font-bold mb-4">Ejemplos</p>
            <div>
                <div className="flex w-full justify-around">
                    {
                        example_one.map((el,i) => (
                            <div 
                                className={`flex justify-center items-center w-intro-letter h-intro-letter rounded border ${
                                    el === 'G' ? 'border-transparent bg-lime-600' :'border-black bg-white dark:bg-modal-bg'
                                } text-3xl font-bold`} 
                                key={el+i}
                            >{el}</div>
                        ))
                    }
                </div>
                <p className="mt-2 mb-5">La letra <strong>G</strong> esta en la palabra y en la posicion correcta.</p>
            </div>

            <div>
                <div className="flex w-full justify-around">
                    {
                        example_two.map((el,i) => (
                            <div 
                                className={`flex justify-center items-center w-intro-letter h-intro-letter rounded border ${
                                    el === 'C' ? 'border-transparent bg-yellow-500' :'border-black bg-white dark:bg-modal-bg'
                                } text-3xl font-bold`} 
                                key={el+i}
                            >{el}</div>
                        ))
                    }
                </div>
                <p className="mt-2 mb-5">La letra <strong>C</strong> esta en la palabra y en la posicion incorrecta.</p>
            </div>

            <div>
                <div className="flex w-full justify-around">
                    {
                        example_three.map((el,i) => (
                            <div 
                                className={`flex justify-center items-center w-intro-letter h-intro-letter rounded border ${
                                    el === 'O' ? 'border-transparent bg-gray-600' :'border-black bg-white dark:bg-modal-bg'
                                } text-3xl font-bold`}
                                key={el+i}
                            >{el}</div>
                        ))
                    }
                </div>
                <p className="mt-2 mb-5">La letra <strong>O</strong> no esta en la palabra.</p>
            </div>
        </div>
        <p className="my-px">Puede haber letras repetidas. Las pistas son independientes para cada letra.</p>

        <p className="my-px">¡Una palabra nueva cada 5 minutos!</p>

        <button
            id='game_button'           
            onClick={handleClick}
        >
            JUGAR!
        </button>
    </>
  )
}
