import ICommunity from "./ICommunity";
import IEvent from "./IEvent";
import ITag from "./ITag";

export default interface IUser {
    city?: string,
    name: string,
    user_id: string,
    verify?: boolean,
    community?: {
        data: ICommunity[],
        count: number
    },
    events?: {
        data: IEvent[],
        count: number
    },
    tags?: {
        data: ITag[],
        count: number
    },
}