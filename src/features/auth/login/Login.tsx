import {Form} from "common/components/Form/Form";
import {ModalAlert} from "common/components/ModalAlerts/ModalAlert";
import {useActions} from "common/hooks/useActions";
import {useAppSelector} from "common/hooks/useHooks";
import {selectIsLoggedIn} from "features/auth/auth.selector";
import {authThunks} from "features/auth/auth.slice";
import React, {useEffect} from 'react';
import {Navigate} from "react-router-dom";


type LoginPropsType = {}


export const Login: React.FC<LoginPropsType> = ({}) => {
    const isLoggedIn = useAppSelector(selectIsLoggedIn)
    const {initializeApp, login} = useActions(authThunks)

    useEffect(() => {
        initializeApp()
    }, [isLoggedIn])


    if (isLoggedIn) {
        return <Navigate to={'/'}/>
    }

    return (
        <div>
            <ModalAlert/>
            <Form loginHandler={login} title={'Login'}/>
        </div>
    )
};