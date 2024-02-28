const Modal = ({ children, hideModal, className }) => {
    
    const handleModalClick = event => {
        if (event.target.dataset.layout) {
            hideModal();
        }
    }

    return (
        <div
            className={`grid items-end sm:place-items-center fixed w-screen h-screen top-0 left-0 z-50`}
            onClick={handleModalClick}
            data-layout>
            <div className={`bg-secondary-1 rounded-t-3xl w-full sm:w-4/5 sm:rounded-none shadow-[25px_25px_75px_rgba(0,_0,_0,_0.25)] p-4 overflow-y-auto h-4/5 sm:h-auto sm:max-h-screen scroll no-scrollbar max-w-4xl`}>
                <div className="text-right"><span className="cursor-pointer" onClick={hideModal}>X</span></div>
                <div className={className}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal