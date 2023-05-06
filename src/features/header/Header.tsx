import {buttonClasses} from "@mui/material";
import {appThunk} from "app/app.slice";
import {useActions} from "common/hooks/useActions";
import {useAppSelector} from "common/hooks/useHooks";
import {selectIsLoggedIn} from "features/auth/auth.selector";
import {authThunks} from "features/auth/auth.slice";
import React, {FC, useEffect} from 'react';
import style from './Header.module.scss'


type PropsType = {}

export const Header: FC<PropsType> = ({}) => {
    const isLoggedIn = useAppSelector(selectIsLoggedIn)
    const {logout} = useActions(authThunks)



    const logOutHandler = () => {
        logout()
    }

    return (
        <header className={style.headerContainer}>
            Header
            {isLoggedIn ? <button onClick={logOutHandler}>logout</button> : ''}
        </header>
    );
};