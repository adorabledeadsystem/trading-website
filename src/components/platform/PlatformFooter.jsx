import Icon from "components/general/Icon"
import Window from "./Window"
import ChartsWindow from "./Windows/ChartsWindow"

import useWindow from "hooks/useWindow"
import ToolsWindow from "./Windows/ToolsWindow"

import { useState } from "react"

const PlatformFooter = ({ className }) => {

    const [tool, setTool] = useState("lineSegment")
    const [chart, setChart] = useState("zone")

    const chartWindow = useWindow()
    // const timeWindow = useWindow()
    const toolsWindow = useWindow()

    return (
        <div className={className}>
            <div className="relative pl-4">
                <div className="absolute flex gap-4 items-center">
                    <Icon onClick={chartWindow.showWindow} width="25" name={chart} className="cursor-pointer text-green" />
                    <span  className="text-green font-medium text-sm cursor-pointer">5 c</span>
                    <Icon onClick={toolsWindow.showWindow} width="25" name={tool} className="cursor-pointer text-green" />
                    { chartWindow.showing && <Window hideWindow={chartWindow.hideWindow} className="bottom-full"><ChartsWindow setOption={setChart}></ChartsWindow></Window> }
                    {/* { timeWindow.showing && <Window className="h-6 -top-full">timeWindow</Window> } */}
                    { toolsWindow.showing && <Window hideWindow={toolsWindow.hideWindow} className="bottom-full"><ToolsWindow setOption={setTool} /></Window> }
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 flex gap-4">
                    <Icon width="25" name="size-down" className="cursor-pointer" />
                    <Icon width="25" name="normal-size" className="cursor-pointer" />
                    <Icon width="25" name="size-up" className="cursor-pointer text-green" />
                </div>
            </div>
        </div>
    )
}

export default PlatformFooter