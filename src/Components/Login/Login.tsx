import React from 'react';
import s from './Login.module.scss'
import {FormDataType, LoginReduxForm} from "./LoginForm/LoginForm";

type LoginPropsType = {}
export const Login: React.FC<LoginPropsType> = ({}) => {
    const onSubmit = (formData: FormDataType) => {

    }

    return (
        <div className={s.loginContainer}>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};