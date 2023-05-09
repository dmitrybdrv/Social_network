import React, {FC} from 'react';
import style from './ErrorPage.module.scss'

type PropsType ={}

export const ErrorPage: FC <PropsType> = ({}) => {
 return (
  <div className={style.errorContainer}>
   404
  </div>
 );
};