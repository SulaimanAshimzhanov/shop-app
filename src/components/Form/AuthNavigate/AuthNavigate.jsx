

import React from 'react';
import { Link } from 'react-router-dom';
import { path } from '../../../service/path';
import "./AuthNavigate.scss";

export default function AuthNavigate({ location }) {
    return (
        <Link
            className='authNavigate_link'
            to={
                location === "Register"
                    ? "/auth/login"
                    : "/auth/register"
            }>
            {
                location === "Register"
                    ? "Already have an account?"
                    : "You dont have an account"
            }
        </Link>
    )
}
