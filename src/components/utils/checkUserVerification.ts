import {Routes} from "../../consts/routesNames";

const checkUserVerification = (isVerification : boolean) => {
    return isVerification ? Routes.CREATING_EVENT_ROUTE : Routes.VERIFICATION_ROUTE
}

export default checkUserVerification