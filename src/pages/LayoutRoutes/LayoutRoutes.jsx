

import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import * as LayoutPages from "../../apps/layout"
import NotFound from '../../components/NotFound/NotFound';
import { path } from '../../service/path';

export default function LayoutRoutes() {
    return (
        <React.Fragment>
            <Routes>
                <Route index element={<LayoutPages.Main />} />
                <Route path={path.notFound} element={<NotFound location={"Layout"} />} />
                <Route path={path.favorite} element={<LayoutPages.Favorite />} />
                <Route path={path.cart} element={<LayoutPages.Cart />} />

                <Route path='*' element={<Navigate to={path.notFound} />} />
            </Routes>
        </React.Fragment>
    )
}
