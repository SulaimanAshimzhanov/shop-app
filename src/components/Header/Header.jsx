
import React from 'react';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import cls from "./Header.module.scss";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { GrFavorite } from "react-icons/gr";
import { VscSignOut } from "react-icons/vsc"
import useLocations from '../../hooks/useLocations';
import useUser from '../../modules/useUser';



const Header = () => {
    const { actions } = useLocations();
    const { currentUser, logOut } = useUser();

    return (
        <header>
            <Container>
                <div className={cls.navbar}>
                    <Logo />

                    <div className={cls.icons}>
                        {
                            currentUser && (
                                <React.Fragment>
                                    <AiOutlineShoppingCart onClick={actions.goTOCart} />
                                    <GrFavorite onClick={actions.goToFavorite} />
                                    <VscSignOut onClick={logOut} />
                                </React.Fragment>
                            )
                        }

                        {
                            currentUser === undefined && <AiOutlineUser onClick={actions.goToRegister} />
                        }

                        {
                            !currentUser && currentUser !== undefined && <p>Loading...</p>
                        }
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header;
