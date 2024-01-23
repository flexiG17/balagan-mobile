import {Image, Text, TouchableOpacity, View} from "react-native";
import styles from './style'
import React from "react";
import ComponentSize from "../../../consts/componentSize";
import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";
import {Routes} from "../../../consts/routesNames";
import ICommunity from "../../../interfaces/ICommunity";

interface IProps {
    navigation: NativeStackNavigationProp<any>,
    community: ICommunity,
    size?: ComponentSize
}

const AdvertisingComponent: React.FC<IProps> = (props) => {

    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => props.navigation.push(Routes.ADVERTISING_ROUTE,
                {
                    advertising: props.community
                })}
        >
            <View style={styles.block}>
                <Image source={{uri: props.community.image}} style={styles.image}/>
                <Text style={styles.text}>
                    {props.community.name}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default AdvertisingComponent