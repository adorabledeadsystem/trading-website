import Plot from 'components/platform/Plot';
import PlatformSidebar from 'components/platform/PlatformSidebar';
import PlatformHeader from 'components/platform/PlatformHeader';
import PlatformFooter from 'components/platform/PlatformFooter';
import useWindowsMonitor from 'hooks/useWindowMonitor';
import { useLocation } from 'react-router-dom'
import IconProvider from 'hooks/usePlotType';
import ToolProvider from 'hooks/useToolType';

const Platform = () => {

    const { closeWindow, setCloseWindow } = useWindowsMonitor();

    const handleOnClick = event => {
        // console.log(closeWindow, "platform")
        // if (!event.target.dataset?.window) {
        //     console.log(closeWindow, "1")
        //     // closeWindow && closeWindow();
        //     console.log(closeWindow, "2")
        //     // setCloseWindow(() => {})
        //     console.log(closeWindow, "3")
        // }
    }
    
    return (
        <div onClick={handleOnClick}>
            <div className="flex">
                <div className="flex-1 flex flex-col justify-between h-[94vh] media-h-640:h-[92vh]">
                <IconProvider>
                    <PlatformHeader />
                    <ToolProvider>
                        <Plot className="-z-50" />
                        <PlatformFooter />
                    </ToolProvider>
                </IconProvider>
                </div>
                <div className="w-48"><PlatformSidebar /></div>
            </div>
        </div>
    )
}

export default Platform