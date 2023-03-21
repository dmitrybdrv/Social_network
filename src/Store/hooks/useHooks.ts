import store, {RootStateType} from "../Store";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {ThunkAction, ThunkDispatch} from "@reduxjs/toolkit";

export type AppDispatch<ReturnType = void> = ThunkDispatch<ReturnType, unknown, any>
export type ThunkType = ThunkAction<void, RootStateType, unknown, any>
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector