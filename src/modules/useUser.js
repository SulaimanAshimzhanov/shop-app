import { instance } from "../configs/config";
import React from 'react';
import useLocations from "../hooks/useLocations";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getUser = () => instance.get("/users/user/current_user/");

export default function useUser() {
    const { actions } = useLocations();
    const [currentUser, setCurrentUser] = React.useState(null);
    const [renderer, setRenderer] = React.useState("work");
    const notifyExit = () => toast("You ar exit!")

    React.useEffect(() => {
        const request = getUser();

        request
            .then(res => {
                const data = res.data;

                setCurrentUser(data);
            })
            .catch((err) => {
                const unauthorized = err.response.status === 404;

                if (unauthorized) {
                    setCurrentUser(undefined);
                }
            })
    }, [renderer])

    const logOut = React.useCallback(() => {
        localStorage.clear();
        setCurrentUser(undefined);
        actions.goToLogin();
        notifyExit();
    }, [actions])

    return {
        currentUser,
        logOut,
        setRenderer
    }
};
