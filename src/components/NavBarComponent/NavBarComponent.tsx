import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {navBarRoutes} from "../../routes";

import {MaterialIcons} from '@expo/vector-icons';
import {Routes} from "../../consts/routesNames";
import {IconProps} from "@expo/vector-icons/build/createIconSet";

const homeName = Routes.NAVIGATION_HOME_ROUTE
const calendarName = Routes.CALENDAR_ROUTE
const communityName = Routes.COMMUNITY_LIST_ROUTE
const profileName = Routes.PROFILE_ROUTE

const Tab = createBottomTabNavigator();
const NavBarComponent = () => {
    return (
        <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={
            ({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName = '';
                    let routeName = route.name;

                    if (routeName === homeName) {
                        iconName = focused ? 'star' : 'star-outline';

                    } else if (routeName === calendarName) {
                        iconName = focused ? 'calendar-today' : 'calendar-today';

                    } else if (routeName === communityName) {
                        iconName = focused ? 'people' : 'people-outline';

                    } else if (routeName === profileName) {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    // @ts-ignore
                    return <MaterialIcons key={iconName} name={iconName} size={size} color={color}/>;
                },
                headerShown: false,
                tabBarActiveTintColor: '#6B4EFF',
                tabBarInactiveTintColor: '#000',
                tabBarStyle: { height: 90, paddingBottom: 40, paddingTop: 7},
                tabBarLabelStyle: {fontSize: 10},
            })
        }>
            {
                navBarRoutes.map(({name, component}) => {
                    return <Tab.Screen key={name} name={name} component={component}/>
                })
            }
        </Tab.Navigator>
    )
}

export default NavBarComponent