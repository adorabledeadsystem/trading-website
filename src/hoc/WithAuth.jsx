import { useState, createContext, useEffect } from "react";

const authContext = createContext({})

const WithAuth = ({ children }) => {
    const [auth, setAuth] = useState({ isAuth: true })

    useEffect(() => {
        setAuth(prev => ({ ...prev }))
    }, [])

    return <authContext.Provider value={{ auth, setAuth }}>{children}</authContext.Provider>
}

export { authContext } 

export default WithAuth