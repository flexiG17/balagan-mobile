import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {applicationRoutes} from '../routes'
import {Routes} from "../consts/routesNames";

const Stack = createNativeStackNavigator();

export default function RouteComponent() {
    return (
        <Stack.Navigator
            initialRouteName={Routes.NAVIGATION_ROUTE}
            screenOptions={{
                headerShown: false
            }}
        >
            {applicationRoutes.map(({name, component}) => {
                // @ts-ignore
                return <Stack.Screen key={name} name={name} component={component}/>
            })}
        </Stack.Navigator>
    );
}