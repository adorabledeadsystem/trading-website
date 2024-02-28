import { createRef, useState } from 'react'
import Option from './Option'

const TradeWindow = ({ setSum }) => {

    const [sums, setSums] = useState([1, 5, 10, 25, 50])

    const input = createRef()

    return (
        <>
            <div className="text-sm mb-2">Торговля</div>
            { sums.map((sum, index) => <Option key={index} onClick={() => setSum(sum)}><div>{sum} $</div></Option>) }
            <div className="pb-2">
                <input ref={input} type="text" className="border border-solid border-light text-sm mb-2 mt-2" />
                <div onClick={() => setSum(input.current.value)} className="cursor-pointer text-xs">OK</div>
            </div>

        </>
    )
}

export default TradeWindow