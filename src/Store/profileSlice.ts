import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {authAPI} from "../API/API";


export type ProfileInitialStateType = {
    profile: null | {},
    loading: boolean,
    error: null | string
}
type ProfileType = {
    "aboutMe": string,
    "contacts": {
        "facebook": string,
        "website": string,
        "vk": string,
        "twitter": string,
        "instagram": string,
        "youtube": string,
        "github": string,
        "mainLink": string
    },
    "lookingForAJob": boolean,
    "lookingForAJobDescription": string,
    "fullName": string,
    "userId": number,
    "photos": {
        "small": string,
        "large": string
    }
}
const profileInitialState: ProfileInitialStateType = {
    profile: {} as ProfileType,
    loading: false,
    error: null,
}
export const profileSlice = createSlice({
    name: 'profile',
    initialState: profileInitialState,
    reducers: {
        setProfile(state, action: PayloadAction<{}>) {
            state.profile = action.payload
        }
    },


})





export const {setProfile} = profileSlice.actions
export const profileReducer = profileSlice.reducer