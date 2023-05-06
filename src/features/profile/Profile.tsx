import React, {FC} from 'react';
import style from './Profile.module.scss'

type PropsType ={}

export const Profile: FC <PropsType> = ({}) => {

 return (
  <div className={style.profileContainer}>
   Profile
  </div>
 );
};