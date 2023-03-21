import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {'API-KEY': '7c4bb205-7070-4192-b7ca-d51f25e684a8'}
})


export const authAPI = {

    checkMe() {
        return instance
            .get(`/auth/me`)
    },

    login(email: string, password: string) {
        const login = {email, password}
        return instance
            .post(`/auth/${login}`)
    }


}

export const profileAPI = {
    getUsers(userCount = 5, curentPage = 1) {
        return instance
            .get(`/users?count=${userCount}&page=${curentPage}`)
    }
}