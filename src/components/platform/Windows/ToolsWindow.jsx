import { useState } from "react"

import Icon from "components/general/Icon"
import Option from "./Option"
import {useToolType} from "../../../hooks/useToolType";


const OptionsWindow = ({ setOption }) => {

    const [tab, setTab] = useState(0)
    const {  setLineSegment,
        setRay,
        setFrame,
        setEllipse,
        setHorizontalLine,
        setVerticalLine,
        setIntersection,
        setFibLines,
        setEndrus,
        setCanal,
        setCurves}
        = useToolType()

    return (
        <>
            <div className="flex mt-2">
                <span className="text-sm bg-green-light hover:bg-green transition-all cursor-pointer p-3" onClick={() => setTab(0)}>Новые</span>
                <span className="text-sm bg-green-light hover:bg-green transition-all cursor-pointer p-3" onClick={() => setTab(1)}>Добавленные</span>
            </div>

            { tab == 0 &&
            
                <div className="flex flex-col">
                    <Option name="lineSegment" onClick={() => {
                        setLineSegment()
                        setOption("line")}
                    }><Icon name="zone" height="25" width="25" className="text-light" />Отрезок</Option>
                    <Option name="ray" onClick={() => {
                        setRay()
                        setOption("ray")}
                    }><Icon name="ray" height="25" width="25" className="text-light" />Луч</Option>
                    <Option name="frame" onClick={() => {
                        setFrame()
                        setOption("frame")}
                    }><Icon name="frame" height="25" width="25" className="text-light" />Рамка</Option>
                    <Option name="ellipse" onClick={() => {
                        setEllipse()
                        setOption("ellipse")}
                    }><Icon name="ellipse" height="25" width="25" className="text-light" />Эллипс</Option>
                    <Option name="horizontalLine" onClick={() => {
                        setHorizontalLine()
                        setOption("horizontal-line")}
                    }><Icon name="horizontalLine" height="25" width="25" className="text-light" />Горизонтальная линия</Option>
                    <Option name="verticalLine" onClick={() => {
                        setVerticalLine()
                        setOption("vertical-line")}
                    }><Icon name="verticalLine" height="25" width="25" className="text-light" />Вертикальная линия</Option>
                    <Option name="intersection" onClick={() => {
                        setIntersection()
                        setOption("intersection")}
                    }><Icon name="intersection" height="25" width="25" className="text-light" />Пересечение</Option>
                    <Option name="fibLines" onClick={() => {
                        setFibLines()
                        setOption("fibLines")}
                    }><Icon name="fibLines" height="25" width="25" className="text-light" />Линии Фибоначчи</Option>
                    <Option name="endrus" onClick={() => {
                        setEndrus()
                        setOption("andrews-pitchfork")}
                    }><Icon name="endrus" height="25" width="25" className="text-light" />Вилы Эндрюса</Option>
                    <Option name="canal" onClick={() => {
                        setCanal()
                        setOption("trend-channel")}
                    }><Icon name="canal" height="25" width="25" className="text-light" />Канал</Option>
                    <Option name="curves" onClick={() => {
                        setCurves()
                        setOption("curves")}
                    }><Icon name="curves" height="25" width="25" className="text-light" />Кривые</Option>
                </div>

            }

            { tab == 1 && 
            
                <div>

                </div>

            }
        </>
    )
}

export default OptionsWindow