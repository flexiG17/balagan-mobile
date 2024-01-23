import ITag from "./ITag";
import IUser from "./IUser";
import IEvent from "./IEvent";

export default interface ICommunity {
    community_id: string,
    description?: string,
    name: string,
    users?: {
        data: IUser[],
        count: number
    },
    events?: {
        data: IEvent[],
        count: number
    },
    tags?: {
        data: ITag[]
    },
    organizer?: IUser,
    image: string,
    i_join?: boolean,
}