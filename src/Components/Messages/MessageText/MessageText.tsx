import React from 'react';
import s from './messageTextContainer.module.scss'




type MessageTextPropsType = {
text: string
}
export const MessageText: React.FC<MessageTextPropsType> = ({text}) => {

    return (
        <div className={s.messageTextContainer}>
            {text}
        </div>
    );
};