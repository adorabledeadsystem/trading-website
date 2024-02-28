import classNames from 'classnames'
import { useField } from 'formik'
import { useState } from 'react'

const PlatformInput = ({ className, placeholder, label, after, ...props }) => {
    const [{onBlur, ...field}, meta] = useField({ ...props})
    const [focus, setFocus] = useState(false)

    const customBlurHandler = event => {
        setFocus(false)
        onBlur(event)
    } 

    const handleFocus = () => setFocus(true)

    const showError = meta.touched && meta.error && !focus

    const borderColor = classNames({
        'border-error-300': showError,
        'border-gray-100': !showError
    })

    return (
        <div className={`${className} mb-4 w-full`}>
            <div className={`flex items-center gap-3 bg-light`}>
                <label className="flex-1">
                    {label}<br />
                    <input 
                        className="grow text-sm text-grey font-medium mt-2 py-2 pl-2 w-60
                            border border-solid border-grey"
                        type="text"
                        placeholder={placeholder}
                        {...field} 
                        onFocus={handleFocus}
                        onBlur={customBlurHandler} 
                        {...props} 
                    />
                    {after}
                </label>
                
                {
                    // showError && 
                    // <Icon 
                    //     className="text-error-500"
                    //     name="error"
                    //     width="16" 
                    //     height="16"
                    // />
                }
            </div>
            {/* { showError && <div className="text-error-500">{meta.error}</div> } */}
        </div>
    )
}

export default PlatformInput