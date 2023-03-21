import React from 'react';
import s from './LoginForm.module.scss'
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {


    return (
        <div className={s.loginForm}>
            <form onSubmit={props.handleSubmit}>

                <div> <Field component={'input'} name={'login'} placeholder={'login'}/> </div>
                <div> <Field component={'input'} name={'password'} placeholder={'password'}/> </div>

                <div> <Field component={'input'} name={'rememberMe'} type={'checkbox'}/> remember me </div>

                <div> <button>Login</button> </div>

            </form>
        </div>
    );
};
export const LoginReduxForm = reduxForm<FormDataType>({
    form: 'loginized'
})(LoginForm)