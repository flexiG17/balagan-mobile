import axios from 'axios'
import {AUTH_TOKEN, AXIOS_URL} from "../consts/systemConsts";

interface IProps {
    login: string,
    password: string,
    name: string,
}

export const registration = async (dataToSave: IProps) => {
    await axios.post(`${AXIOS_URL}/registration`, dataToSave, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const loginRequest = async (login: string, password: string) => {
    await axios.post(`${AXIOS_URL}/auth`, {login, password}, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const getProfile = async (user_id: string) => {
    return await axios.get(`${AXIOS_URL}/profile`, {
        headers: {
            'Content-Type': 'application/json'
        },
        params: {
            user_id
        }
    })
}

export const getMyProfile = async () => {
    return await axios.get(`${AXIOS_URL}/profile?user_id=`, {
        headers: {
            'Authorization': AUTH_TOKEN,
            'Content-Type': 'application/json'
        }
    })
}

