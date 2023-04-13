

import classNames from 'classnames';
import React from 'react';
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import cls from "./SliderButton.module.scss";

function SliderButton({ direct, handleClick }) {
    const mode = ["left", "right"]

    return (
        <button
            onClick={handleClick}
            className={
                mode.includes(direct)
                && classNames(cls.sliderButton, cls[direct])
            }>
            {
                direct === "left"
                    ? <MdArrowBackIosNew />
                    : <MdArrowForwardIos />
            }

        </button >
    )
}

export default SliderButton;