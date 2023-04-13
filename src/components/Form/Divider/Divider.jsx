
import React from 'react';
import cls from "./Divider.module.scss";

const Divider = ({ children }) => {
    return (
        <div className={cls.divider}>
            {children}
        </div>
    )
}

export default Divider;
