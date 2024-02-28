import classNames from "classnames"

const Container = ({ className, children }) => {
    return (
        <div className={`${classNames(className)} px-4 sm:px-9 max-w-7xl w-full mx-auto`}>
            {children}
        </div>
    )
}

export default Container