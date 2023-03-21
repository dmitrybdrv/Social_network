import React from 'react';
import s from './Profile.module.scss'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./ProfileInfo/MyPosts/MyPosts";


type ProfilePropsType = {}
export const Profile: React.FC<ProfilePropsType> = ({}) => {

    return (
        <div className={s.profileContainer}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
};