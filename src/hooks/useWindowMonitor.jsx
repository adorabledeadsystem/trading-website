import { windowContext } from "../hoc/WithWindowMonitor"
import { useContext } from "react"

const useWindowsMonitor = () => {
    return useContext(windowContext)
}

export default useWindowsMonitor