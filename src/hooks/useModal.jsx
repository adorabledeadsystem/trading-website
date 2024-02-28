import { useState } from 'react'

const useModal = () => {
    const [showing, setShowing] = useState(false)

    const showModal = () => {
        setShowing(true)
        // document.body.style.overflow = "hidden"
    }
    const hideModal = () => {
        setShowing(false)
        // document.body.style.overflow = "unset"
    }
    const toggleModal = () => {
        const newValue = !showing
        setShowing(newValue)
        // document.body.style.overflow = newValue ? "hidden" : "unset"
    }

    return {
        showing,
        showModal,
        hideModal,
        toggleModal
    }
}

export default useModal