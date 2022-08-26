import { BoxComponent, BoardLetter } from "./"


export const RowComponent = ({elements, styles, stylesChild, rowPos, isBoxButton = false}) => {

  return (
    <div className={styles}>
        {
          isBoxButton 
          ?
          elements.map( (el,i) => (
              <BoxComponent 
                key={el + i} 
                content={el}
                styles={stylesChild}
                bigKey={
                  el === 'ENTER' ? 'w-16' : 
                  el === 'DEL' ? 'w-14' :
                  'w-9'
                }
              />
          ))
          :
          elements.map( (el,i) => (
              <BoardLetter 
                key={el + i} 
                letterPos={i}
                rowPos={rowPos}
                styles={stylesChild}
              />
          ))
        }
    </div>
  )
}
