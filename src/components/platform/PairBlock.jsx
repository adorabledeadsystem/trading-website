import classNames from "classnames"

import Icon from "components/general/Icon"
import useModal from "hooks/useModal"
import useWindow from "hooks/useWindow"
import Window from "./Window"
import Option from "./Windows/Option"
import PairsWindow from "./Windows/PairsWindow"

const PairBlock = ({ name, time, profit, allPairs, setSelectedPairs }) => {

    const { showing, showWindow, hideWindow } = useWindow();

    return (
        <div className="w-32 border-r border-r-grey border-solid border-y-0 border-l-0 relative">
            <div 
                className="font-medium text-base text-grey uppercase cursor-pointer"
                onClick={showWindow}
            >
                {name} 
                <Icon name="pairBlockArrow" width="10" height="10" />
            </div>
            <div className="font-medium text-base text-grey">{time}+ мин.</div>
            <div className={`font-medium text-base ${classNames({ 
                "text-green": profit >= 0,
                "text-danger": profit < 0
             })}`}>
                {profit > 0 && "+"}{profit}%
            </div>
            { 
                showing && 
                <Window hideWindow={hideWindow} className="w-full h-12 top-0">
                    <PairsWindow allPairs={allPairs} setSelectedPairs={setSelectedPairs} />
                </Window> 
            }
        </div>
    )
}

export default PairBlock