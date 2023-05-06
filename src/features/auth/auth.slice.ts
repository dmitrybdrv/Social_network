import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {appAction} from "app/app.slice";
import {createAppAsyncThunk} from "common/utils/createAppAsynkThunk";
import {authAPI, AuthDataType} from "features/auth/auth.API";


const slice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
    },
    reducers: {
        loggedInOut: (state, action: PayloadAction<{ isLoggedIn: boolean }>) => {
            state.isLoggedIn = action.payload.isLoggedIn
        }
    },
    extraReducers: builder => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.isLoggedIn = action.payload.isLoggedIn
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.isLoggedIn = action.payload.isLoggedIn
            })
            .addCase(initializeApp.fulfilled, (state, action) => {
                state.isLoggedIn = action.payload.isLoggedIn
            })
    }
})


const initializeApp = createAppAsyncThunk<{ isLoggedIn: boolean }, void>
('app/initializeApp', async (_, thunkAPI) => {
    const {dispatch, rejectWithValue} = thunkAPI
    try {
        const res = await authAPI.checkMe()
        if (res.data.resultCode === 0) {
            return {isLoggedIn: true}
        } else {
            return rejectWithValue(null)
        }
    } catch (e) {
        return rejectWithValue(null)
    } finally {
        dispatch(appAction.setAppInitialized({isInitialized: true}));
    }
})


const login = createAppAsyncThunk<{ isLoggedIn: boolean }, any>
('auth/login', async (arg, thunkAPI) => {
    const {dispatch, rejectWithValue} = thunkAPI
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
('auth/logout', async (_, thunkAPI) => {
    const { rejectWithValue} = thunkAPI
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


export const {reducer: authReducer, actions: authAction} = slice
export const authThunks = {login, logout, initializeApp}