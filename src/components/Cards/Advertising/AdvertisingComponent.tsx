import {Text, TouchableOpacity, View} from "react-native";
import styles from './style'
import React from "react";
import ComponentSize from "../../../consts/componentSize";
import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";
import {Routes} from "../../../consts/routesNames";

interface IProps {
    navigation: NativeStackNavigationProp<any>,
    text: string,
    id: number,
    size?: ComponentSize
}

const AdvertisingComponent: React.FC<IProps> = (props) => {

    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => props.navigation.push(Routes.ADVERTISING_ROUTE, {advertising: {id: props.id, text: props.text}})}
        >
            <View style={styles.block}>
                <View style={styles.image}/>
                <Text style={styles.text}>
                    {props.text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default AdvertisingComponent