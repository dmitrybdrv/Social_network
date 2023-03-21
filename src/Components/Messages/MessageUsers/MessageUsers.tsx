import React from 'react';
import s from './MessageUser.module.scss'
import emptyAva from '../../../Assets/img/emptyProfile.png'

type MessageUsersPropsType = {
    name: string
    ava: string
}
export const MessageUsers: React.FC<MessageUsersPropsType> = ({name, ava}) => {

    return (
        <div className={s.messageUserContainer}>
            <img src={ava ? ava : emptyAva}/>
            <div>{name}</div>
        </div>
    );
};