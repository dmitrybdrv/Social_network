import {createAsyncThunk} from "@reduxjs/toolkit";
import {AppDispatch, RootStateType} from "app/Store";

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
    state: RootStateType
    dispatch: AppDispatch
    rejectValue: any
}>()