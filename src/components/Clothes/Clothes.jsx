
import React from 'react';
import useLayout from '../../hooks/useLayout';
import Loader from '../Loader/Loader';
import cls from "./Clothes.module.scss";
import ClothesCards from './ClothesCards/ClothesCards';

const Clothes = () => {
    const { product } = useLayout();
    return (
        <section>
            <div className={cls.clothes_inline}>
                {product?.length === 0 && <p>Empty</p>}

                {!product && <Loader />}

                {product?.map(item => <ClothesCards
                    isFavorite={false}
                    key={item.id}
                    base={item}
                />)}
            </div>
            <div className={cls.clothes_more_btn}>
                <button>More Clothes</button>
            </div>
        </section>
    )
}

export default Clothes;
