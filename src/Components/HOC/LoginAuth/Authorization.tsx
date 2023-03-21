import React from 'react';
import { Navigate } from 'react-router-dom';


type AuthorizationPropsType = {
    component: React.ElementType;
}

export const AuthorizationHoc: React.FC<AuthorizationPropsType> = (props) => {
    const{ component: WrapperComponent }=props

    const isAuth = false


    if(!isAuth) {
       return <Navigate to={'/login'}/>
    }



    return <WrapperComponent />

}