import Option from "./Option"
import Icon from "components/general/Icon"

const PairsWindow = ({ allPairs, setSelectedPairs }) => {

    const handleOnClick = index => {
        setSelectedPairs(pairs => [ ...pairs, allPairs[index] ])
    }

    return (
        <>
            {
                allPairs
                    .map(({name, time, profit}, index) => (
                        <Option
                            key={index}
                            onClick={() => handleOnClick(index)}
                        >
                            <div className="w-full">
                                <div 
                                    className="font-medium text-sm text-light uppercase"
                                >
                                    {name} 
                                    <Icon name="pairBlockArrow" width="10" height="10" />
                                </div>
                                <div className="font-medium text-xs text-light">{time}+ мин.</div>
                                <div className="font-medium text-xs text-light">
                                    {profit > 0 && "+"}{profit}%
                                </div>
                            </div>
                        </Option>
                    ))
            }
        </>
    )
}

export default PairsWindow