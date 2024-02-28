import React, {useContext, useReducer} from 'react'

const ToolTypeContext = React.createContext();

export const useToolType = () => {
    return useContext(ToolTypeContext)
}
const defaultTool = 'default'
const lineSegment ="line"
const ray ="ray"
const frame ="frame"
const ellipse ="ellipse"
const horizontalLine ="horizontal-line"
const verticalLine ="infinite-line"
const intersection ="intersection"
const fibLines ="fibLines"
const endrus ="andrews-pitchfork"
const canal ="trend-channel"
const curves ="curves"

const reducer = (state, action) => {
    switch (action.type) {
        case lineSegment:return {...state, toolType: lineSegment}
        case ray:return {...state, toolType: ray}
        case frame:return {...state, toolType: frame}
        case ellipse:return {...state, toolType: ellipse}
        case horizontalLine:return {...state, toolType: horizontalLine}
        case verticalLine:return {...state, toolType: verticalLine}
        case intersection:return {...state, toolType: intersection}
        case fibLines:return {...state, toolType: fibLines}
        case endrus:return {...state, toolType: endrus}
        case canal:return {...state, toolType: canal}
        case curves:return {...state, toolType: curves}
        default: return defaultTool
    }
}


const ToolProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {
        toolType: lineSegment,
    })

    const setLineSegment = () => dispatch({ type: lineSegment })
    const setRay = () => dispatch({ type: ray })
    const setFrame = () => dispatch({ type: frame })
    const setEllipse = () => dispatch({ type: ellipse })
    const setHorizontalLine = () => dispatch({ type: horizontalLine })
    const setVerticalLine = () => dispatch({ type:verticalLine })
    const setIntersection = () => dispatch({ type: intersection })
    const setFibLines = () => dispatch({ type: fibLines })
    const setEndrus = () => dispatch({ type: endrus })
    const setCanal = () => dispatch({ type: canal })
    const setCurves = () => dispatch({ type: curves })


    return (
        <ToolTypeContext.Provider value={{
            toolType: state.toolType,
            setLineSegment,
            setRay,
            setFrame,
            setEllipse,
            setHorizontalLine,
            setVerticalLine,
            setIntersection,
            setFibLines,
            setEndrus,
            setCanal,
            setCurves,
        }}>
            { children }
        </ToolTypeContext.Provider>
    )
}

export default ToolProvider