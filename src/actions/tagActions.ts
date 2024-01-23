import axios from 'axios'
import {AUTH_TOKEN, AXIOS_URL} from "../consts/systemConsts";
import ITag from "../interfaces/ITag";

interface IProps {
    login: string,
    password: string,
    name: string,
}

export const pushTags = async (tagList: string[]) => {
    return await axios.post(`${AXIOS_URL}/tags-user`, {tags: tagList}, {
        headers: {
            'Authorization': AUTH_TOKEN,
            'Content-Type': 'application/json'
        }
    })
}

export const getTags = async (limit : number, offset : number) => {
    return await axios.get(`${AXIOS_URL}/tags`, {
        headers: {
            "Content-Type": 'application/json',
        },
        params: {
            limit,
            offset,
        }
    })
}