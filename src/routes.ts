import Registration from "./pages/Registration/Registration";
import Auth from "./pages/Auth/Auth";
import SelectFavourite from "./pages/SelectFavourite/SelectFavourite";
import {AUTH_ROUTE, REGISTRATION_ROUTE, SELECT_FAVORITE_ROUTE} from "./consts/routesNames";

const routes = [
    {
        name: REGISTRATION_ROUTE,
        component: Registration
    },
    {
        name: AUTH_ROUTE,
        component: Auth
    },
    {
        name: SELECT_FAVORITE_ROUTE,
        component: SelectFavourite
    }
]

export default routes