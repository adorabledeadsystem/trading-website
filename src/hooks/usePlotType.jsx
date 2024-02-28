import React, {useContext, useReducer} from 'react'

const PlotTypeContext = React.createContext()

export const usePlotType = () => {
    return useContext(PlotTypeContext)
}

const linear = 'linear'
const zone = 'zone'
const candlestick = 'candlestick'

const reducer = (state, action) => {
  switch (action.type) {
    case linear: return {...state, plotType: linear}
    case zone: return {...state, plotType: zone}
    case candlestick: return {...state, plotType: candlestick}
    default: return state
  }
}
  

const IconProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {
        plotType: zone,
    })
  
    const setLinear = () => dispatch({ type: linear })
    const setZone = () => dispatch({ type: zone })
    const setCandle = () => dispatch({ type: candlestick })
  
    return (
      <PlotTypeContext.Provider value={{
        plotType: state.plotType,
        setLinear, setZone, setCandle
      }}>
          { children }
      </PlotTypeContext.Provider>
    )
  }

export default IconProvider