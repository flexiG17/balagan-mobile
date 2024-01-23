import {StyleSheet} from 'react-native';
import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import RouteComponent from "./src/components/RouteComponent";
import NavBarComponent from "./src/components/NavBarComponent/NavBarComponent";

export default function App() {
    return (
        <NavigationContainer>
            <RouteComponent/>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingTop: 70,
        paddingRight: 25,
        paddingBottom: 45
    },
});
