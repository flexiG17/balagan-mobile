import RegistrationPage from "./pages/Registration/RegistrationPage";
import AuthPage from "./pages/Auth/AuthPage";
import SelectFavouritePage from "./pages/SelectFavourite/SelectFavouritePage";
import {Routes} from "./consts/routesNames";
import MainPage from "./pages/Main/MainPage";
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import CalendarPage from "./pages/Calendar/CalendarPage";
import CommunityPage from "./pages/CommunityPage/CommunityPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

export const applicationRoutes = [
    {
        name: Routes.NAVIGATION_ROUTE,
        component: NavBarComponent
    },
    {
        name: Routes.REGISTRATION_ROUTE,
        component: RegistrationPage
    },
    {
        name: Routes.AUTH_ROUTE,
        component: AuthPage
    },
    {
        name: Routes.SELECT_FAVORITE_ROUTE,
        component: SelectFavouritePage
    },
    {
        name: Routes.MAIN_ROUTE,
        component: MainPage
    }
]

export const navBarRoutes = [
    {
        name: Routes.NAVIGATION_HOME_ROUTE,
        component: MainPage
    },
    {
        name: Routes.CALENDAR_ROUTE,
        component: CalendarPage
    },
    {
        name: Routes.COMMUNITY_ROUTE,
        component: CommunityPage
    },
    {
        name: Routes.PROFILE_ROUTE,
        component: ProfilePage
    },
]