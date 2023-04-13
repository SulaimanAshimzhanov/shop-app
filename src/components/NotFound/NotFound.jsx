

import React from 'react';
import cls from "./NotFound.module.scss";
import NotFoundButton from './NotFoundButton/NotFoundButton';

export default function NotFound({ location }) {
    return (
        <section className={cls.notFound_point}>
            <h1>This page is not found!</h1>

            <NotFoundButton location={location} />
        </section>
    )
}
