import classNames from 'classnames'
import { useField } from 'formik'
import { useState } from 'react'

const Checkbox = ({ className, label, ...props }) => {
    const [{onBlur, ...field}, meta] = useField({ ...props})
    const [focus, setFocus] = useState(false)

    const customBlurHandler = event => {
        setFocus(false)
        onBlur(event)
    } 

    const handleFocus = () => setFocus(true)

    const showError = meta.touched && meta.error && !focus

    return (
        <div className={`${className} mb-8`}>
            <label className='block text-xs font-medium' htmlFor={props.name}>
                <input 
                    className="w-4 h-4 border-solid border-gray-400 border 
                    rounded-sm cursor-pointer checked:before:content-['✓'] before:grid before:place-items-center mr-2 align-bottom"
                    type="checkbox"
                    {...field} 
                    onFocus={handleFocus}
                    onBlur={customBlurHandler} 
                    {...props} 
                />
                {label}
            </label>
            { showError && <div className="text-error-500">{meta.error}</div> }
        </div>
    )
}

export default Checkbox