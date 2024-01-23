import axios from "axios";
import {AUTH_TOKEN, AXIOS_URL} from "../consts/systemConsts";

export const getEvents = async (limit : number, offset : number, is_me: 0 | 1, is_favorite: 0 | 1) => {
    return await axios.get(`${AXIOS_URL}/events`, {
        headers: {
            'Authorization': AUTH_TOKEN,
            "Content-Type": 'application/json',
        },
        params: {
            limit,
            offset,
            is_me,
            is_favorite
        }
    })
}

export const getSingleEvent = async (event_id : string | undefined) => {
    return await axios.get(`${AXIOS_URL}/event`, {
        headers: {
            'Authorization': AUTH_TOKEN,
            "Content-Type": 'application/json',
        },
        params: {
            event_id
        }
    })
}

export const createEvent = async (dataToSave : {}) => {
    //console.log('ДАТА ТУ СЕЙВ', dataToSave);
    return await axios.post(`${AXIOS_URL}/event`, dataToSave, {
        headers: {
            'Authorization': AUTH_TOKEN,
            "Content-Type": 'application/json',
        }
    })
}

export const registrationOnEvent = async (dataToSave : {event_id : string, name: string, number: string}) => {
    return await axios.post(`${AXIOS_URL}/participants`, dataToSave, {
        headers: {
            'Authorization': AUTH_TOKEN,
            "Content-Type": 'application/json',
        }
    })
}