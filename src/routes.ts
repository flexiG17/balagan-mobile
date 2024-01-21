import {Routes} from "./consts/routesNames";
import RegistrationPage from "./pages/Registration/RegistrationPage";
import AuthPage from "./pages/Auth/AuthPage";
import SelectFavouritePage from "./pages/SelectFavourite/SelectFavouritePage";
import MainPage from "./pages/Main/MainPage";
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import CalendarPage from "./pages/Calendar/CalendarPage";
import CommunityListPage from "./pages/CommunityList/CommunityListPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import EventSearchPage from "./pages/EventSearch/EventSearchPage";
import ListCreatedEventsPage from "./pages/ListCreatedEvents/ListCreatedEventsPage";
import FavoritePage from "./pages/Favorite/FavoritePage";
import CreateEventPage from "./pages/CreateEvent/CreateEventPage";
import EventPage from "./pages/Event/EventPage";
import RegistrationOnEventPage from "./pages/RegistrationOnEvent/RegistrationOnEventPage";
import CreateCommunityPage from "./pages/CreateCommunity/CreateCommunityPage";
import CommunityPage from "./pages/Community/CommunityPage";
import OtherProfilePage from "./pages/OtherProfile/OtherProfilePage";
import AdvertisingPage from "./pages/Advertising/AdvertisingPage";
import VerificationPage from "./pages/Verification/VerificationPage";

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
        name: Routes.EVENT_SEARCH_ROUTE,
        component: EventSearchPage
    },
    {
        name: Routes.LIST_CREATED_EVENTS_ROUTE,
        component: ListCreatedEventsPage
    },
    {
        name: Routes.CREATING_EVENT_ROUTE,
        component: CreateEventPage
    },
    {
        name: Routes.EVENT_ROUTE,
        component: EventPage
    },
    {
        name: Routes.VERIFICATION_ROUTE,
        component: VerificationPage
    },
    {
        name: Routes.ADVERTISING_ROUTE,
        component: AdvertisingPage
    },
    {
        name: Routes.COMMUNITY_ROUTE,
        component: CommunityPage
    },
    {
        name: Routes.OTHER_PROFILE_ROUTE,
        component: OtherProfilePage
    },
    {
        name: Routes.CREATE_COMMUNITY_ROUTE,
        component: CreateCommunityPage
    },
    {
        name: Routes.REGISTRATION_ON_EVENT_ROUTE,
        component: RegistrationOnEventPage
    },
    {
        name: Routes.FAVORITE_ROUTE,
        component: FavoritePage
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
        name: Routes.COMMUNITY_LIST_ROUTE,
        component: CommunityListPage
    },
    {
        name: Routes.PROFILE_ROUTE,
        component: ProfilePage
    },
]