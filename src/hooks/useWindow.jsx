import { useEffect } from 'react';
import { useState } from 'react'
import useWindowsMonitor from './useWindowMonitor'

const useWindow = () => {
    const [showing, setShowing] = useState(false)
    const { closeWindow, setCloseWindow } = useWindowsMonitor();

    // useEffect(() => {

    //     if (!showing) {
    //         setCloseWindow(closeWindow => {})
    //     }
    // }, [showing])

    const showWindow = () => {
        setShowing(true)

        console.log("hey", "useWindow")

        setCloseWindow(() => () => hideWindow())
        // document.body.style.overflow = "hidden"
    }
    const hideWindow = () => {
        setShowing(false)
        // document.body.style.overflow = "unset"
    }
    const toggleWindow = () => {
        const newValue = !showing
        setShowing(newValue)
        // document.body.style.overflow = newValue ? "hidden" : "unset"
    }

    return {
        showing,
        showWindow,
        hideWindow,
        toggleWindow
    }
}

export default useWindow