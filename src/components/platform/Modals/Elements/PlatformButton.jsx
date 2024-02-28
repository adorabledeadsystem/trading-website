import classNames from "classnames"

const PlatformButton = ({ children, color, onClick }) => {
    const classes = classNames({ "bg-primary": color === "primary", "bg-green": color === "green"})

    return (
        <button className={`${classes} text-light w-60 py-2 text-center mt-3 mb-8 cursor-pointer`}>{children}</button>
    )
}

export default PlatformButton