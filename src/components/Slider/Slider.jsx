

import classNames from 'classnames';
import React from 'react';
import { SliderList } from '../../utils/Lists';
import Container from '../Container/Container';
import DotsSlider from '../DotsSlider/DotsSlider';
import SliderButton from '../SliderButton/SliderButton';
import cls from "./Slider.module.scss";

const Slider = () => {
    const [currentSlider, setCurrentSlider] = React.useState(1);

    const nextSlide = () => {
        if (currentSlider !== SliderList.length) {
            setCurrentSlider(currentSlider + 1)
        } else {
            setCurrentSlider(1)
        }
    }

    const prevSlide = () => {
        if (currentSlider > 1) {
            setCurrentSlider(currentSlider - 1)
        } else {
            setCurrentSlider(SliderList.length)
        }
    }

    return (
        <Container>
            <div className={cls.slider_parent}>
                <div className={cls.slider_parent_container}>
                    {SliderList.map((item, index) =>
                        <div
                            className=
                            {
                                currentSlider === index + 1
                                    ? classNames(cls.slider_item, cls.activeSlider)
                                    : cls.slider_item
                            }

                            key={item.id}
                            style={{ background: `url("${item.url}") center / cover` }}
                        >
                            <SliderButton direct="left" handleClick={prevSlide} />
                            <SliderButton direct="right" handleClick={nextSlide} />
                        </div>
                    )}
                </div>

                <div className={cls.slider_parent_dots}>
                    {Array.from({ length: SliderList.length }).map((item, index) =>
                        <DotsSlider 
                        dotIndex={index}
                        currentSlider={currentSlider} 
                        key={index} />
                    )}
                </div>
            </div>
        </Container >
    )
}

export default Slider;
