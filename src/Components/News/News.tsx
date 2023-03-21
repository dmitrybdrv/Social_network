import React from 'react';
import s from './News.module.scss'

type NewsPropsType = {

}
export const News: React.FC<NewsPropsType> = ({}) => {
    return (
        <div className={s.newsContainer}>
            news
        </div>
    );
};