import Icon from "components/general/Icon"

const Option = ({ onClick, children }) => {
    return (
        <div 
            onClick={onClick}
            className="bg-green-light hover:bg-green transition-all cursor-pointer
                flex items-center text-xs gap-4 p-2 last:pb-3"
        >
            {children}
        </div>
    )
}

export default Option