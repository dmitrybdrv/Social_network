import React from 'react';
import s from './navBarContainer.module.scss'
import {NavLink} from "react-router-dom";


type NavBarPropsType = {}
export const NavBar: React.FC<NavBarPropsType> = ({}) => {


    return (


        <div className={s.navBarContainer}>

                <div><NavLink to={'/profile'}>Profile</NavLink></div>
                <div><NavLink to={'/messages'}>Messages</NavLink></div>
                <div><NavLink to={'/news'}>News</NavLink></div>
                <div><NavLink to={'/users'}>Users</NavLink></div>
                <div><NavLink to={'/settings'}>Settings</NavLink></div>


        </div>


    );
};