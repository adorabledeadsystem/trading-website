import { authContext } from "../hoc/WithAuth"
import { useContext } from "react"

const useAuth = () => {
    return useContext(authContext)
}

export default useAuth