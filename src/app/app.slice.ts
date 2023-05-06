import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type StatusType = 'idle' | 'loading' | 'failed'

const slice = createSlice({
    name: 'app',
    initialState: {
        error: null as string | null,
        isInitialized: false,
        status: 'idle' as StatusType
    },
    reducers: {
        setAppError: (state, action: PayloadAction<{ error: string | null }>) => {
            state.error = action.payload.error
        },
        setAppStatus: (state, action: PayloadAction<{ status: any }>) => {
            state.status = action.payload.status
        },
        setAppInitialized: (state, action: PayloadAction<{ isInitialized: boolean }>) => {
            state.isInitialized = action.payload.isInitialized
        },
    },
    extraReducers: builder => {

    }
})


export const {reducer: appReducer, actions: appAction} = slice
export const appThunk = {}