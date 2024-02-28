import Icon from "components/general/Icon"
import useWindow from "hooks/useWindow"
import { useState } from "react"
import PairBlock from "./PairBlock"
import PairsWindow from "./Windows/PairsWindow"
import Window from "./Window"

const PlatformHeader = ({ className }) => {

    const { showing, showWindow, hideWindow } = useWindow()

    const [allPairs, setAllPairs] = useState([
        {
            name: "AUD/USD",
            time: 7,
            profit: 37
        }, 
        {
            name: "USD/CHF",
            time: 2,
            profit: 12
        },
        {
            name: "EUR/USD",
            time: 3,
            profit: -87
        }
    ])

    const [selectedPairs, setSelectedPairs] = useState([])

    return (
        <div className={className}>
            <div className="flex p-8">
                <Icon name="logo" width="44" className="mr-28" />
                <div className="flex gap-6">
                    { 
                        selectedPairs
                            .map(({name, time, profit}, index) => <PairBlock key={index} name={name} time={time} profit={profit} allPairs={allPairs} setSelectedPairs={setSelectedPairs} />)
                    }
                    <div className="relative w-32 grid place-items-center">
                        <Icon 
                            name="size-up" 
                            className="text-dark cursor-pointer"
                            onClick={showWindow} />
                        { showing && 
                            <Window hideWindow={hideWindow} className="w-full top-0">
                                <PairsWindow allPairs={allPairs} setSelectedPairs={setSelectedPairs} />
                            </Window>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlatformHeader