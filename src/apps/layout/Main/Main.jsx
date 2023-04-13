
import React from 'react';
import Clothes from '../../../components/Clothes/Clothes';
import Container from '../../../components/Container/Container';
import Slider from '../../../components/Slider/Slider';
import cls from "./Main.module.scss";

export default function Main() {
    return (
        <React.Fragment>
            <Slider />
            <Container>
                <div className={cls.clothes_point}>
                    <h2>Our Products</h2>
                    <Clothes />
                </div>
            </Container>
        </React.Fragment>
    )
}
