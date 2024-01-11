import {createNativeStackNavigator} from "@react-navigation/native-stack";
import routes from '../routes'

const Stack = createNativeStackNavigator();

export default function RouteComponent() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            {routes.map(({name, component}) => {
                return <Stack.Screen name={name} component={component}/>
            })}
        </Stack.Navigator>
    );
}