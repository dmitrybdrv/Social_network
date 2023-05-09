import {useActions} from "common/hooks/useActions";
import {useAppSelector} from "common/hooks/useHooks";
import {AuthDataType} from "features/auth/auth.API";
import {selectIsLoggedIn} from "features/auth/auth.selector";
import {authThunks} from "features/auth/auth.slice";
import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {Navigate} from "react-router-dom";
import style from './Login.module.scss'


type LoginPropsType = {}


export const Login: React.FC<LoginPropsType> = ({}) => {

    const isLoggedIn = useAppSelector(selectIsLoggedIn)
    const {login} = useActions(authThunks)
    const {initializeApp} = useActions(authThunks)


    const {register, handleSubmit, formState: {errors}, setError} = useForm<AuthDataType>({mode: 'onBlur'})
    const onSubmit = (data: AuthDataType) => {
        login(data)
            .unwrap()
            .catch((e) => {
                if (e.fieldsErrors[0]) {
                    setError(e.fieldsErrors[0].field, {message: e.fieldsErrors[0].error})
                } else {

                }
            })
    }


    useEffect(() => {
        initializeApp()
    }, [isLoggedIn])
    if (isLoggedIn) {
        return <Navigate to={'/'}/>
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={style.formContainer}>


                <div className={style.formTitle}>
                    <h3>Login</h3>
                </div>

                <div className={style.formDescription}>
                    <p>
                        To log in get registered <a href={'https://social-network.samuraijs.com/'}
                                                    target={'_blank'} rel="noreferrer">here</a>
                    </p>
                    <p>
                        or use common test account credentials:
                    </p>
                    <p> Email: free@samuraijs.com
                    </p>
                    <p>
                        Password: free
                    </p>
                </div>

                <div className={style.formInput}>
                    <input id="email" {...register('email',
                        {required: true, maxLength: 50,
                            pattern: {
                                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                                message: 'Email should be correct'
                            }}
                    )}
                           placeholder={'Email'}
                    />
                    <div>
                        {errors.email && <span style={{color: '#ee4916'}}>{errors.email.message}</span>}
                        {errors.email && errors.email.type === "required" && <span style={{color: '#ee4916'}}>This field is required</span>}
                    </div>

                </div>

                <div className={style.formInput}>
                    <input id="pass" {...register('password',
                        {
                            required: true, maxLength: 50,
                            //TODO проверка на корректность не сходится с тестовым паролем  для входа FREE
                           /* pattern: {
                                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}$/,
                                message: 'Password should be correct'
                            }*/
                        }
                    )}
                           placeholder={'Password'}
                           type={'password'}
                    />
                    <div>
                        {errors.password && <span style={{color: '#ee4916'}}>{errors.password.message}</span>}
                        {errors.password && errors.password.type === "required" && <span style={{color: '#ee4916'}}>This field is required</span>}
                    </div>
                </div>

                <div className={style.formButton}>
                    <button type={"submit"} className={style.btn}>Login</button>
                </div>


        </form>
    )

};
