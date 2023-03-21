import React from 'react';
import {Post} from "./Post/Post";


type PostsPropsType = {}
export const Posts: React.FC<PostsPropsType> = ({}) => {


    return (
        <div>
           <h3>Posts</h3>
            <Post/>
            <Post/>
        </div>
    );
};