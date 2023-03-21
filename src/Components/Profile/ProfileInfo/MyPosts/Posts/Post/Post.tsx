import React from 'react';
import s from './Posts.module.scss'
import emptyAva from '../../../../../../Assets/img/emptyProfile.png'


type PostPropsType = {

}
export const Post: React.FC<PostPropsType> = ({}) => {

    const ava = false
    const likeCount = 0
    const dislikeCount = 0

    const avaStyle = {
        width: '60x',
        height: '60px',
        borderRadius: '50%'
    }
    const postText = 'SomePostText'

    return (
        <div className={s.postContainer}>
            <div className={s.postAvaDescriptionBlock}>
                <img src={!ava ? emptyAva : ava} alt="ava" style={avaStyle}/>
                <p>{postText}</p>
            </div>
            <div>
               <button>like {likeCount}</button>
               <button>disLike {dislikeCount}</button>
            </div>
        </div>

    );
};