import App from "app/App";
import store from "app/Store";
import {Login} from "features/auth/login/Login";
import {ErrorPage} from "features/error_page/ErrorPage";
import {Messages} from "features/messages/Messages";
import {Profile} from "features/profile/Profile";
import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
    {
        path: '/',
        element:<App/>,
        children: [
            {
                path: '*',
                element: <ErrorPage/>
            },
            {
                path: '/profile',
                element: <Profile/>,

            },
            {
                path: '/messages',
                element: <Messages/>,
                index: true
            },
        ]
    },
    {
        path: '/login',
        element: <Login/>,
    },

]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);


reportWebVitals();