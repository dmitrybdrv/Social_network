import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import s from 'features/navBar/NavBar.module.scss'

type PropsType = {}

export const NavBar: FC<PropsType> = ({}) => {
    return (
        <nav className={s.nav}>
            <NavLink to={'/profile'}>Profile</NavLink>
            <NavLink to={'/messages'}>Messages</NavLink>
            <NavLink to={'/news'}>News</NavLink>
            <NavLink to={'/users'}>Users</NavLink>
            <NavLink to={'/settings'}>Settings</NavLink>
        </nav>
    );
};