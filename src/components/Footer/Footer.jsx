

import React from 'react';
import { Link } from 'react-router-dom';
import { aboutCompany, forBuyerList, partnerList, socielNet } from '../../utils/Lists';
import Container from '../Container/Container';
import cls from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer>
            <Container>
                <div className={cls.footer}>
                    <ul>
                        <h2>Partners</h2>
                        {
                            forBuyerList.map(item => (
                                <li key={item.id}>
                                    <Link to={""}>
                                        {item.caption}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>

                    <ul>
                        <h2>For Buyers</h2>
                        {
                            partnerList.map(item => (
                                <li key={item.id}>
                                    <Link to={""}>
                                        {item.caption}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>

                    <ul>
                        <h2>Company</h2>
                        {
                            aboutCompany.map(item => (
                                <li key={item.id}>
                                    <Link to={""}>
                                        {item.caption}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>

                    <ul>
                        <h2>Sociel Networks</h2>
                        {
                            socielNet.map(item => (
                                <li key={item.id}>
                                    <Link to={""}>
                                        {item.caption}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;
