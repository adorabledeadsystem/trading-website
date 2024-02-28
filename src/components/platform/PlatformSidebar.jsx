import { useState } from "react"

import Icon from "components/general/Icon"

import classNames from "classnames"
import useModal from "hooks/useModal"
import Modal from "components/general/Modal"
import SupportForm from "components/forms/SupportForm"
import Window from "./Window"
import useWindow from "hooks/useWindow"
import TimeWindow from "./Windows/TimeWindow"

import avatar from 'assert/avatar.jpg'
import SettingsWindow from "./Windows/SettingsWindow"
import { getFormatTime } from "helpers"
import TradeWindow from "./Windows/TradeWindow"
import MainModal from './Modals/MainModal';
import PayModal from './Modals/PayModal';
import PlatformModalMini from './Modals/ModalTypes/PlatformModalMini';
import PlatformModal from './Modals/ModalTypes/PlatformModal';
import SupportModal from './Modals/SupportModal';


const Bubble = ({ className, color, children, ...props }) => {

    const classes = classNames(className, {
        'bg-green-light': color === 'green',
        'bg-primary': color == 'primary'
    })

    return <div {...props} className={`${classes} rounded-xl font-medium text-light cursor-pointer hover:brightness-90`}>{children}</div>
}

const PlatformSidebar = ({ className }) => {
    const [time, setTime] = useState(new Date())
    const [sum, setSum] = useState(5)
    
    const timeWindow = useWindow()
    const profitWindow = useWindow()
    const settingsWindow = useWindow()

    const support = useModal()
    const payment = useModal()
    const main = useModal()

    const addMinute = () => {
        const copyTime = new Date(time.getTime())
        copyTime.setMinutes(copyTime.getMinutes() + 1)

        setTime(copyTime)
    }

    const subMinute = () => {
        const copyTime = new Date(time.getTime())
        copyTime.setMinutes(copyTime.getMinutes() - 1)

        setTime(copyTime)
    }

    return (
        <div className={className}>
            <div className="text-center pr-4 pt-8 media-h-840:pt-2">
                <div onClick={main.showModal} className="text-left flex items-center gap-4 mb-8 media-h-840:mb-7 media-h-760:mb-2 cursor-pointer">
                    <img src={avatar} alt="avatar" className="rounded-full h-7 w-7" />
                    <span className="text-xs font-medium text-green">bobdylan@gmail.com</span>
                </div>

                {/* <Link to="/account/personal">
                    <Bubble color="green" className="text-2xl py-2 mb-4">Bob Dylan</Bubble>
                </Link> */}
                <div className="text-2xl text-green-light font-medium mb-4 media-h-840:mb-4 media-h-700:mb-2">0 $</div>
                {/* <div className="text-xl mb-4">
                    <span>start </span>
                    <select className="font-medium text-green-light">
                        <option>реальный</option>
                        <option>демо</option>
                    </select>
                </div> */}
                
                <Bubble color="primary" className="text-base py-1 mb-4" onClick={payment.showModal}>Пополнить</Bubble>

                <div className="font-medium text-base text-green-light mb-4">09:28:32 (UTC +7)</div>
                <div className="text-base font-medium text-grey text-left mb-4">Время</div>
                <div className="flex justify-between mb-6 relative">
                    <Bubble color="green" className="text-xs w-8" onClick={addMinute}>+</Bubble>
                    {/* <input type="time" value={getFormatTime(time)} className="flex-grow-0 bg-primary" /> */}
                    <span onClick={ timeWindow.showWindow }>{getFormatTime(time)}</span>
                    <Bubble color="green" className="text-xs w-8" onClick={subMinute}>-</Bubble>
                    { timeWindow.showing && <Window hideWindow={timeWindow.hideWindow} className="w-full h-12 right-3/4">
                        <TimeWindow date={time} setTime={setTime} />
                    </Window> }
                </div>
                
                <div className="text-base font-medium text-grey text-left mb-4 media-h-840:mb-2">Сумма</div>
                <div className="flex justify-between mb-10 relative media-h-840:mb-7 media-h-700:mb-2">
                    <Bubble color="green" className="text-xs w-8" onClick={() => setSum(sum => sum + 1)}>+</Bubble>
                    {/* <input type="time" value={getFormatTime(time)} className="flex-grow-0 bg-primary" /> */}
                    <span onClick={ profitWindow.showWindow }>{sum} $</span>
                    <Bubble color="green" className="text-xs w-8" onClick={() => { if (sum != 0) setSum(sum => sum - 1) }}>-</Bubble>
                    { profitWindow.showing && <Window hideWindow={profitWindow.hideWindow} className="w-full h-12 right-3/4">
                        <TradeWindow setSum={setSum} />
                    </Window> }
                </div>
                
                <div className="rounded-xl py-3 bg-green-opacity mb-8 media-h-840:mb-8 media-h-760:mb-4 media-h-700:mb-2">
                    <div className="text-grey text-xl font-medium">Доходность</div>
                    <div className="text-green-light text-2xl font-medium">+47 %</div>
                    <div className="text-grey text-base font-medium">+0.47 $</div>
                </div>
                <Bubble color="green" className="py-5 mb-4 media-h-840:mb-4 media-h-640:py-0"><Icon name="arrow" className="rotate-180" width="55" /></Bubble>
                <Bubble color="primary" className="py-5 mb-8 media-h-840:mb-8 media-h-760:mb-4 media-h-700:mb-2 media-h-640:py-0"><Icon name="arrow" width="55" /></Bubble>
                <div className="flex items-center relative">
                    <div
                        onClick={support.showModal}
                        className="rounded-xl py-4 px-3 bg-green-opacity text-grey cursor-pointer hover:brightness-90 mr-6"
                    >
                        Помощь
                    </div>
                    <Icon onClick={ settingsWindow.showWindow } name="setting" width="20" className="mr-4 cursor-pointer" />
                    { settingsWindow.showing && <Window hideWindow={settingsWindow.hideWindow} className="bottom-full right-1/3 w-[454px]"><SettingsWindow /></Window> }
                    <Icon name="sound" width="20" className="cursor-pointer" />
                </div>
            </div>
            {/* {
                showing &&
                <Modal hideModal={hideModal}>
                    <div className="text-2xl font-medium mb-4 text-center">Поддержка</div>
                    <SupportForm />
                </Modal>
            } */}
            {
                support.showing &&
                <PlatformModal hideModal={support.hideModal}>
                    <SupportModal/>
                </PlatformModal>
            } 
            {   
                payment.showing &&
                <PlatformModalMini  hideModal={payment.hideModal}>
                    <PayModal/>
                </PlatformModalMini>
            }
            {   
                main.showing &&
                <PlatformModal hideModal={main.hideModal}>
                    <MainModal/>
                </PlatformModal>
            }
        </div>
    )
}

export default PlatformSidebar