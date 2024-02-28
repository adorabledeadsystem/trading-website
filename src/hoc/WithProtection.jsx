import { Navigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const WithProtection = ({ children }) => {
    const { auth } = useAuth()

    if (!auth.isAuth) return <Navigate to="/" replace={true} />
    else return children
}

export default WithProtection