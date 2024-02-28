import { motion } from "framer-motion";

import Icon from "components/general/Icon";

const Sidebar = ({ toggleModal, children }) => {
    const handleSidebarClick = event => {
      if (event.target.dataset.layout) {
        toggleModal();
      }
    }
  
    return (
        <motion.div 
        transition={{ type: "tween" }}
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        className="fixed z-50 top-0 h-full left-0 w-full" 
        onClick={handleSidebarClick}
        data-layout
        >
            <div className="absolute top-0 h-full right-0 w-full xl:w-1/3 bg-light px-9 shadow-[25px_25px_75px_rgba(0,_0,_0,_0.25)]">
                <div className="text-center">
                    <div className="flex justify-between pt-9 mb-9">
                        <div className="flex gap-4 items-center">
                        <Icon name="logo" width="52" height="52" />
                        <div className="font-medium text-3xl md:text-4xl">Moaklion</div>
                        </div>
                        <Icon className="cursor-pointer" name="close" width="24" onClick={toggleModal} />
                    </div>
                    {children}
                </div>
            </div>
        </motion.div>
    )
}

export default Sidebar