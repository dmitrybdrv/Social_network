import React from 'react';
import s from './MyPosts.module.scss'
import {Posts} from "./Posts/Posts";


type MyPostsPropsType = {

}
export const MyPosts: React.FC<MyPostsPropsType> = ({}) => {



    return (
        <div className={s.myPostsContainer}>
            <h3>My Post</h3>
            <div><input type="text"/><button>add</button></div>
            <Posts/>
        </div>
    );
};