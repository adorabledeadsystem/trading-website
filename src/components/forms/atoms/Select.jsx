import Icon from "components/general/Icon";
import { useField } from "formik";
import { useState } from "react";
import classNames from "classnames";

const Select = ({ className, label, placeholder, icon, options, ...props }) => {
    const [field, meta, helpers] = useField(props);

    return (
        <div className={`${className} flex items-center bg-light rounded-3xl px-8 relative`}>
            <Icon 
                className="mr-3"
                name={icon} 
                width="20"
                height="20"
            />
            <select {...field} {...props}  className="peer grow text-sm text-grey font-medium py-8" />
            <Icon
                name="arrowDown" 
                width="32"
                height="32"
            />
                {/* <div className="hidden peer-focus:block absolute bottom-0 left-0 w-full translate-y-full">
                    { options.map(({value, text}) => 
                    <div onClick={() => select(value)} className="bg-light last:rounded-b-3xl">{text}</div>) }
                </div> */}
            
            {/* {meta.touched && meta.error ? (
            <div className="error">{meta.error}</div>
            ) : null} */}
        </div>
    )
}

export default Select