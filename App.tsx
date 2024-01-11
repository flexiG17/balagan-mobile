import {StyleSheet} from 'react-native';
import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import RouteComponent from "./src/components/RouteComponent";


export default function App() {
    return (
        <NavigationContainer>
            {/*<View style={styles.container}>
                <StatusBar style="auto"/>*/}
                <RouteComponent/>
            {/*</View>*/}
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingTop: 80,
        paddingRight: 25,
        paddingBottom: 45
    },
});
