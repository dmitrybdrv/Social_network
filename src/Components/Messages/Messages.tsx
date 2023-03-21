import React from 'react';
import s from './Messages.module.scss'
import {MessageUsers} from "./MessageUsers/MessageUsers";
import {MessageText} from "./MessageText/MessageText";

const users = [
    {id: '1', userName: 'Anton', userAva: ''},
    {id: '2', userName: 'Mark', userAva: ''},
    {id: '3', userName: 'Jax', userAva: ''},
]
const messages = [
    {id: '1', text: 'someText1'},
    {id: '2', text: 'someText1'},
    {id: '3', text: 'someText1'},
]

type MessagesPropsType = {}
export const Messages: React.FC<MessagesPropsType> = ({}) => {

    const user = users.map(el => <div key={el.id}> <MessageUsers name={el.userName} ava={el.userAva}/></div>)
    const message = messages.map(el => <div key={el.id}><MessageText text={el.text}/></div>)


    return (
        <div className={s.messagesContainer}>

                <div className={s.messageUser}>
                    {user}
                </div>

                <div className={s.massageText}>
                    {message}
                </div>


        </div>
    );
};