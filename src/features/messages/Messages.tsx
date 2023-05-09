import React, {FC} from 'react';
import style from './Message.module.scss'

type PropsType ={}

export const Messages: FC <PropsType> = ({}) => {
 return (
  <div className={style.messageContainer}>
   messages
  </div>
 );
};