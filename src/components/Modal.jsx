

export const Modal = ({styles = '', children}) => {
  return (
    <div className={`fixed flex inset-0 justify-center items-center`}>
        <div className={`flex items-center flex-col justify-around border border-black rounded-modal bg-modal px-12 py-2 ${styles}`}>
            {children}
        </div>
    </div>
  )
}
