import {RootStateType} from "app/Store";

export const selectIsLoggedIn = (state: RootStateType) => state.auth.isLoggedIn