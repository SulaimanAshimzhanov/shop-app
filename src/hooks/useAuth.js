

import React from 'react'

export default function useAuth() {
    const [token, setToken] = React.useState(null);

    const getTokenData = React.useCallback(() => {
        const tokenData = localStorage.getItem("accessToken");

        if (tokenData) {
            setToken(tokenData);
        }
    }, [])

    React.useEffect(() => {
        getTokenData()
    }, [getTokenData])

    return {
        token
    }
}
