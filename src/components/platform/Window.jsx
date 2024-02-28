import classNames from "classnames"

const Window = ({ children, className, hideWindow }) => {

    const classes = classNames(className, "absolute")

    return (
        <div className={classes}>
            <div className="bg-green-light text-light z-100" data-window>
                <div onClick={hideWindow} className="text-right pt-2 pr-3 cursor-pointer">X</div>
                {children}
            </div>
        </div>
    )
}

export default Window