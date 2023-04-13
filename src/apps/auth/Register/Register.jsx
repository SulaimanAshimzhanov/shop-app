
import React from 'react';
import { useForm } from 'react-hook-form';
import Container from '../../../components/Container/Container';
import { formValidate } from '../../../helpers/helpers';
import cls from "./Register.module.scss";
import * as Forms from "../../../components/Form";
import { createUser } from '../../../api/api';
import useLocations from '../../../hooks/useLocations';

export default function Register() {
    const { actions } = useLocations();

    const {
        handleSubmit,
        register,
        formState: { errors, isValid }
    } = useForm({
        mode: "onBlur"
    });

    const handleRegister = (data) => {
        const file = data.avatarka[0];
        const newObj = [];

        const formData = new FormData();

        formData.append("avatarka", file);

        Object.entries(data).forEach(item => {
            if (!item.includes("avatarka")) {
                newObj.push(item)
            }
        })

        const base = newObj.reduce((total, item) => {
            return {
                ...total,
                [item[0]]: item[1]
            }
        }, {})

        const newData = {
            ...base,
            formData
        }

        console.log(newData);

        if (!!newData) {
            const request = createUser(data)

            request
                .then(res => {
                    actions.goToLogin();
                })
        }
    }

    return (
        <Container>
            <div className={cls.register_point}>
                <h2>Create you own account, for buy your favorite clothes!</h2>

                <form onSubmit={handleSubmit(handleRegister)} className={cls.register_point_form}>
                    <Forms.Divider>
                        <Forms.TextInput
                            type="text"
                            placeholder="username"
                            {...register("username", formValidate("username"))}
                        />
                        {errors.username && <Forms.Errors err={errors.username?.message} />}
                    </Forms.Divider>
                    <Forms.Divider>
                        <Forms.TextInput
                            type="email"
                            placeholder="Email"
                            {...register("email", formValidate("Email"))}
                        />
                        {errors.email && <Forms.Errors err={errors.email?.message} />}
                    </Forms.Divider>
                    <Forms.Divider>
                        <Forms.TextInput
                            type="file"
                            placeholder="Avatar"
                            {...register("avatarka", formValidate("Avatar"))}
                        />
                        {errors.avatarka && <Forms.Errors err={errors.avatarka?.message} />}
                    </Forms.Divider>
                    <Forms.Divider>
                        <Forms.TextInput
                            type="text"
                            placeholder="Phone number"
                            {...register("phone_number", formValidate("Phone Number"))}
                        />
                        {errors.phone_number && <Forms.Errors err={errors.phone_number?.message} />}
                    </Forms.Divider>
                    <Forms.Divider>
                        <Forms.TextInput
                            type="date"
                            placeholder="Birthdate"
                            {...register("birth_date", formValidate("Birthday"))}
                        />
                        {errors.birth_date && <Forms.Errors err={errors.birth_date?.message} />}
                    </Forms.Divider>
                    <Forms.Divider>
                        <Forms.TextInput
                            type="text"
                            placeholder="About"
                            {...register("about", formValidate("About"))}
                        />
                        {errors.about && <Forms.Errors err={errors.about?.message} />}
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
                        <Forms.AuthSubmit location="Register" />
                    </Forms.Divider>

                    <Forms.Divider>
                        <Forms.AuthNavigate location={"Register"} />
                    </Forms.Divider>
                </form>
            </div>
        </Container>
    )
}
