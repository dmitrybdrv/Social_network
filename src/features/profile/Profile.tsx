import {useAppSelector} from "common/hooks/useHooks";
import {selectIsLoggedIn} from "features/auth/auth.selector";
import React, {FC} from 'react';
import {Navigate} from "react-router-dom";
import style from './Profile.module.scss'

type PropsType ={}

export const Profile: FC <PropsType> = ({}) => {
    const isLoggedIn = useAppSelector(selectIsLoggedIn)

    if (!isLoggedIn) {
        return <Navigate to={'/login'}/>
    }
 return (
  <div className={style.profileContainer}>
   Profile
  </div>
 );
};