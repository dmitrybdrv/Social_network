import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NavBar/NavBar";
import {Profile} from "./Components/Profile/Profile";
import s from './App.module.scss'
import {Messages} from "./Components/Messages/Messages";
import {News} from "./Components/News/News";
import {Users} from "./Components/Users/Users";
import {Settings} from "./Components/Settings/Settings";
import {Login} from "./Components/Login/Login";
import {AuthorizationHoc} from "./Components/HOC/LoginAuth/Authorization";


function App() {

    return (
        <div className={s.App}>
            <Header/>
            <NavBar/>
            <Routes>
                <Route path={'/profile'} element={<AuthorizationHoc component={Profile}/>}/>
                <Route path={'/messages'} element={<AuthorizationHoc component={Messages}/>}/>
                <Route path={'/news'} element={<AuthorizationHoc component={News}/>}/>
                <Route path={'/users'} element={<AuthorizationHoc component={Users}/>}/>
                <Route path={'/settings'} element={<AuthorizationHoc component={Settings}/>}/>
                <Route path={'/login'} element={<Login/>}/>
            </Routes>
        </div>
    );
}
export default App;
