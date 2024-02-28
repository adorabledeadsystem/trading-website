import { useState, createContext, useEffect } from "react";

const windowContext = createContext({})

const WithWindowsMonitor = ({ children }) => {
    const [closeWindow, setCloseWindow] = useState()

    // useEffect(() => {
    //     setAuth(prev => ({ ...prev }))
    // }, [])

    return <windowContext.Provider value={{ closeWindow, setCloseWindow }}>{children}</windowContext.Provider>
}

export { windowContext } 

export default WithWindowsMonitor