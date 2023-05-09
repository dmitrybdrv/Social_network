import s from 'app/App.module.scss'
import {selectAppStatus, selectIsInitialized} from "app/app.selector";
import {useActions} from "common/hooks/useActions";
import {useAppSelector} from "common/hooks/useHooks";
import {selectIsLoggedIn} from "features/auth/auth.selector";
import {authThunks} from "features/auth/auth.slice";
import {Header} from "features/header/Header";
import {NavBar} from "features/navBar/NavBar";
import React, {useEffect} from 'react';
import {Navigate, Outlet} from "react-router-dom";


function App() {

    const isLoggedIn = useAppSelector(selectIsLoggedIn)
    const isInitializeApp = useAppSelector(selectIsInitialized)
    const statusApp = useAppSelector(selectAppStatus)

    const {initializeApp} = useActions(authThunks)

    useEffect(() => {
        initializeApp()
    }, [isLoggedIn])

    if (!isLoggedIn) {
        return <Navigate to={'/login'}/>
    }

    return (
        <div className={s.App}>
            <Header/>
            <NavBar/>
            <Outlet/>
        </div>
    )

}


export default App;
