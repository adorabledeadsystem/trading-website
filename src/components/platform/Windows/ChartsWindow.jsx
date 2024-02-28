import Option from "./Option"
import Icon from "components/general/Icon"
import { usePlotType } from '../../../hooks/usePlotType';


const ChartsWindow = ({ setOption }) => {

    const {setLinear, setZone, setCandle} = usePlotType()

    return (
        <div className="flex flex-col mt-2">
            <Option name="zone" onClick={() => 
            {
                setZone()
                setOption("zone")

            }}><Icon name="zone" height="25" width="25" className="text-light" />Зонный</Option>
            <Option name="linear" onClick={() =>
            {
                setLinear()
                setOption("linear")
            }}><Icon name="linear" height="25" width="25" className="text-light" />Линейный</Option>
            <Option name="candlestick" onClick={() => 
            {
                setCandle()
                setOption("candlestick")
            }}><Icon name="candlestick" height="25" width="25" className="text-light" />Свечной</Option>
        </div>
    )
}

export default ChartsWindow