import React from 'react';
import "modal.css"
export const Modal = ({active, setActive, children}) => {
    return (
        <div className={"modalW"}>
            <div className={active ?  "modal active" : "modal"} onClick={()=>setActive(false)}>
                <div className={`flex items-end bg-[rgba(0,_0,_0,_0.25)] sm:place-items-center fixed w-screen h-screen top-0 left-0 z-0`}></div>
                <div className={active ?  "modal__content active" : "modal__content"} onClick={e=>e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </div>


    );
};

export default Modal;