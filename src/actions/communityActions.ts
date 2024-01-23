import axios from "axios";
import {AUTH_TOKEN, AXIOS_URL} from "../consts/systemConsts";

export const getCommunities = async (limit : number, offset : number, only_me: 0 | 1) => {
    return await axios.get(`${AXIOS_URL}/communities`, {
        headers: {
            'Authorization': AUTH_TOKEN,
            "Content-Type": 'application/json',
        },
        params: {
            limit,
            offset,
            only_me,
        }
    })
}

export const getSingleCommunity = async (community_id : string | undefined,) => {
    return await axios.get(`${AXIOS_URL}/community`, {
        headers: {
            'Authorization': AUTH_TOKEN,
            "Content-Type": 'application/json',
        },
        params: {
            community_id,
        }
    })
}

export const createCommunity = async (dataToSave : {name: string, description: string, tags: string[], visible: boolean}) => {
    return await axios.post(`${AXIOS_URL}/community`, dataToSave, {
        headers: {
            'Authorization': AUTH_TOKEN,
            "Content-Type": 'application/json',
        }
    })
}