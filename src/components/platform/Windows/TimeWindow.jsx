import { getFormatTime } from "helpers";
import { useEffect, useState } from "react";
import Option from "./Option";

const TimeWindow = ({ date, setTime }) => {

    const [times, setTimes] = useState([])

    useEffect(() => {
        const arr = []

        for (let i = 1; i < 6; i++) {
            const copy = new Date(date.getTime())
            copy.setMinutes(copy.getMinutes() + i);
            arr.push(copy)
        }

        setTimes(arr)
    }, [])

    return (
        <>
            <div className="text-sm mb-2 mt-2">Время экспирации</div>
            { times.map((time, index) => <Option key={index} onClick={() => setTime(time)}><div>{getFormatTime(time)}</div></Option>) }
        </>
    )
}

export default TimeWindow