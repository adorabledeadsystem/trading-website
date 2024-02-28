import classNames from "classnames"

const PlatformAnchor = ({ children, color, onClick }) => {
    const classes = classNames({ "text-primary": color === "primary", "text-green": color === "green"})

    return (
        <button onClick={onClick} className={`${classes} font-medium cursor-pointer`}>{children}</button>
    )
}

export default PlatformAnchor