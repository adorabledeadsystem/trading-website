import classNames from "classnames"

const Button = ({ className, children, hierarchy = 'default', disabled = false, ...props }) => {

    const styleClasses = classNames({
        'bg-primary text-light text-lg font-bold px-5 py-4': hierarchy === 'default',
        'bg-green text-light text-lg font-bold px-5 py-4': hierarchy === 'secondary',
        'text-3xl text-grey font-normal': hierarchy === 'text',
    })

    return (
        <button 
            className={`${className} cursor-pointer text-center ${styleClasses} transition-all rounded-3xl disabled:cursor-not-allowed hover:brightness-90`}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button