
import React from 'react';
import useLocations from '../../../hooks/useLocations';
import "./NotFoundButton.scss";

export default function NotFoundButton({ location }) {
    const { actions } = useLocations();

    return (
        <button
            onClick={
                location === "Auth"
                    ? actions.goToLogin()
                    : actions.goToMain()
            }
            className='notFoundBtn' >
            Go to {location}
        </button >
    )
}
