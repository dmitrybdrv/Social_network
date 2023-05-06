import {RootStateType} from "app/Store";

export const selectIsInitialized = (state: RootStateType) => state.app.isInitialized
export const selectAppStatus = (state: RootStateType) => state.app.status
export const selectError = (state: RootStateType) => state.app.error