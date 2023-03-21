import {configureStore} from '@reduxjs/toolkit'
import {profileReducer} from "./profileSlice";
import {userReducer} from "./usersSlice";
import {reducer as formReducer} from 'redux-form'

const store = configureStore({
    reducer: {
        profile: profileReducer,
        users: userReducer,
        form: formReducer,
    },
})
export type RootStateType = ReturnType<typeof store.getState>

//@ts-ignore
window.store = store
export default store