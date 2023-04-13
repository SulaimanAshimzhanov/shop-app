import React from "react";
import cls from "./TextInput.module.scss";


export const TextInput = React.forwardRef(({
    type = "",
    placeholder = "",
    ...rest
}, ref) => (
    < input
        type={type}
        placeholder={placeholder}
        ref={ref}
        {...rest}
        className={cls.textInput}
    />
))