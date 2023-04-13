

import classNames from 'classnames';
import React from 'react';
import cls from "./DotsSlider.module.scss";

export default function DotsSlider({ currentSlider, dotIndex }) {
    return (
        <div className={
            currentSlider === dotIndex + 1
                ? classNames(cls.dots, cls.activeDots)
                : cls.dots
        }
        >

        </div>
    )
}
