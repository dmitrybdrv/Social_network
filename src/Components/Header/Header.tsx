import React, {useEffect} from 'react';
import s from './Header.module.scss'
import logo from '../../Assets/img/logo.png'
import {useAppDispatch, useAppSelector} from "../../Store/hooks/useHooks";
import {useParams} from "react-router-dom";
import {authAPI} from "../../API/API";


type HeaderPropsType = {}

export const Header: React.FC<HeaderPropsType> = ({}) => {

    const dispatch = useAppDispatch()
    let userId = useAppSelector(state => state.profile.profile)
    let userID = useParams<string>()


    /*useEffect(() => {
        authAPI.checkMe()
    }, [])*/

    return (
        <div className={s.headerContainer}>

            <img src={logo} alt="logo"/>

            <div>
                {<span>login</span>}
            </div>
        </div>
    );
};