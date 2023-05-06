import {instance} from "common/api";


export const authAPI = {

    checkMe() {
        return instance.get<ResponseDataType<UserType>>(`/auth/me`)
    },

    login(data: {email: string, password: string, rememberMe?: boolean, captcha?: boolean}) {
        return instance.post<ResponseDataType<{userId: number}>>(`/auth/login`, data)
    },

    logout() {
        return instance.delete<ResponseDataType>(`/auth/login`)
    },
}

export type ResponseDataType<D = {}> = {
    resultCode: 0
    messages: []
    fieldsErrors: []
    data: D
}

export type UserType = {
    id: number
    login: string
    email: string
}
export type AuthDataType = { email: string, password: string, rememberMe?: boolean, captcha?: boolean }