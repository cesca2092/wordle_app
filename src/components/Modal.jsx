

export const Modal = ({styles = '', children}) => {
  return (
    <div className={`fixed flex inset-0 justify-center items-center dark:bg-dark-bg`}>
        <div className={`flex items-center flex-col justify-around border border-black rounded-modal bg-modal px-12 py-2 ${styles
        } dark:bg-modal-bg`}>
            {children}
        </div>
    </div>
  )
}
