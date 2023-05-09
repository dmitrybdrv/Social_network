import {createSlice} from "@reduxjs/toolkit";
import {appAction} from "app/app.slice";
import {createAppAsyncThunk} from "common/utils/createAppAsynkThunk";
import {authAPI} from "features/auth/auth.API";


const login = createAppAsyncThunk<{ isLoggedIn: boolean }, any>
('auth/login', async (arg, {rejectWithValue}) => {
    try {
        const res = await authAPI.login(arg)
        if (res.data.resultCode === 0) {
            return {isLoggedIn: true}
        } else {
            return rejectWithValue(res.data)
        }
    } catch (e) {
        return rejectWithValue(e)
    }
})


const logout = createAppAsyncThunk<{ isLoggedIn: boolean }, void>
('auth/logout', async (_, {rejectWithValue}) => {
    try {
        const res = await authAPI.logout()
        if (res.data.resultCode === 0) {
            return {isLoggedIn: false}
        } else {
            return rejectWithValue(null)
        }
    } catch (e) {
        return rejectWithValue(e)
    }
})

const initializeApp = createAppAsyncThunk<void, void>
('auth/initializeApp', async (_, {dispatch, rejectWithValue}) => {
    try {
        const res = await authAPI.checkMe()
        if (res.data.resultCode === 0) {
            return
        } else {
            return rejectWithValue(null)
        }
    } catch (e) {
        return rejectWithValue(null)
    } finally {
        dispatch(appAction.setAppInitialize({isInitialized: true}))
    }
})

const slice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.isLoggedIn = action.payload.isLoggedIn
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.isLoggedIn = action.payload.isLoggedIn
            })
            .addCase(initializeApp.fulfilled, (state) => {
                state.isLoggedIn = true
            })
    }
})


export const {reducer: authReducer, actions: authAction} = slice
export const authThunks = {login, logout, initializeApp}