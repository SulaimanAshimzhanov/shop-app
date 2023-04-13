

import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import AuthRoutes from '../pages/AuthRoutes/AuthRoutes';
import LayoutRoutes from '../pages/LayoutRoutes/LayoutRoutes';
import { Route, Routes as Switch } from "react-router-dom"
import useUser from '../modules/useUser';
import Loader from '../components/Loader/Loader';

export default function Routes() {
    const { currentUser } = useUser();

    if (!currentUser) return <Loader />

    return (
        <React.Fragment>
            <Header />
            <Switch>
                <Route path='/*' element={<LayoutRoutes />} />
                <Route path='/auth/*' element={<AuthRoutes />} />
            </Switch>
            <Footer />
        </React.Fragment>
    )
}
