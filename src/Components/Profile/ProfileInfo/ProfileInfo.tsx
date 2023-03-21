import React from 'react';
import s from './ProfileInfo.module.scss'
import wallpaper from '../../../Assets/img/wallpaper.jpg'
import ava from '../../../Assets/img/ava.jpg'
import emptyAva from '../../../Assets/img/emptyProfile.png'
import {useAppDispatch} from "../../../Store/hooks/useHooks";


type ProfileInfoPropsType = {}
export const ProfileInfo: React.FC<ProfileInfoPropsType> = ({}) => {




    const wallpaperImg = {
        width: '100%',
        height: '200px',
        backgroundImage: `url(${wallpaper})`
    }
    const status = 'someStatus'
    const description = 'someDescription'

    return (
        <div className={s.profileInfoContainer}>

            <div className={s.wallpaperBlock} style={wallpaperImg}></div>

            <div className={s.avaAndDescription}>
                <img src={!ava ? emptyAva : ava} alt="ava"/>

                <p>{description}</p>
            </div>

            <div className={s.profileStatus}>{status}</div>

            <div className={s.profileName}>userName</div>

        </div>
    );
};