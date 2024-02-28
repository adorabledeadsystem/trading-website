import classNames from "classnames"

const PlatformTitle = ({ children, color  }) => {
    const classes = classNames({ "text-primary": color === "primary", "text-green": color === "green"})
    
    return (
        <h2 className={`${classes} text-xl font-medium mb-4`}>{children}</h2>
    )
}

export default PlatformTitle