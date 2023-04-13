
import React from 'react';
import { useForm } from 'react-hook-form';
import Container from '../../../components/Container/Container';
import cls from "./Login.module.scss";
import * as Forms from "../../../components/Form";
import { formValidate } from '../../../helpers/helpers';
import { authUser } from '../../../api/api';
import useLocations from '../../../hooks/useLocations';
import useUser from '../../../modules/useUser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
    const { actions } = useLocations();
    const { setRenderer } = useUser();
    const notifySign = () => toast("You are logged in!")

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        mode: "onBlur"
    });

    const handleLogin = (data) => {
        const request = authUser(data);

        request
            .then(res => {
                const data = res.data;
                if (res) {
                    setRenderer("Render");
                    localStorage.setItem("accessToken", data.access);
                    localStorage.setItem("refreshToken", data.refresh);

                    actions.goToMain();
                    notifySign()
                }
            })
    }

    return (
        <Container>
            <div className={cls.login_point}>
                <h2>Authorize your account and continue your traveling!</h2>

                <form onSubmit={handleSubmit(handleLogin)}>
                    <Forms.Divider>
                        <Forms.TextInput
                            type="text"
                            placeholder="Username"
                            {...register("username", formValidate("Username"))}
                        />
                        {errors.username && <Forms.Errors err={errors.username?.message} />}
                    </Forms.Divider>
                    <Forms.Divider>
                        <Forms.TextInput
                            type="password"
                            placeholder="Password"
                            {...register("password", formValidate("Password"))}
                        />
                        {errors.password && <Forms.Errors err={errors.password?.message} />}
                    </Forms.Divider>
                    <Forms.Divider>
                        <Forms.AuthSubmit location={"Login"} />
                    </Forms.Divider>

                    <Forms.Divider>
                        <Forms.AuthNavigate location={"Login"} />
                    </Forms.Divider>
                </form>
            </div>
        </Container>
    )
}
