import {configureStore} from '@reduxjs/toolkit'
import {appReducer} from "app/app.slice";
import {authReducer} from "features/auth/auth.slice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        app: appReducer,
    },
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

//@ts-ignore
window.store = store
export default store