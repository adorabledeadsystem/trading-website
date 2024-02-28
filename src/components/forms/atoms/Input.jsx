import classNames from 'classnames'
import { useField } from 'formik'
import { useState } from 'react'

import Icon from 'components/general/Icon'

const Input = ({ className, placeholder, icon, ...props }) => {
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
        <div className={`${className} mb-8`}>
            <div className={`flex items-center gap-3 bg-light rounded-3xl pl-8`}>
                <Icon 
                    name={icon} 
                    width="20"
                    height="20"
                />
                <input 
                    className="grow text-sm text-grey font-medium py-8"
                    type="text"
                    placeholder={placeholder}
                    {...field} 
                    onFocus={handleFocus}
                    onBlur={customBlurHandler} 
                    {...props} 
                />
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

export default Input