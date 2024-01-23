import {Text, TouchableOpacity, View} from "react-native";
import styles from './style'
import React from "react";
import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";
import {Routes} from "../../../consts/routesNames";
import IUser from "../../../interfaces/IUser";

interface IProps extends IUser{
    navigation: NativeStackNavigationProp<any>,
    lightMode?: boolean | false
}

const UserComponent: React.FC<IProps> = (props) => {

    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => props.navigation.push(Routes.OTHER_PROFILE_ROUTE, {
                user: {
                    user_id: props.user_id,
                    name: props.name}
            })}
        >
            <View style={styles.block}>
                <View style={[styles.image, props.lightMode && styles.lightBackground]}/>
                <Text
                    style={[styles.text, props.lightMode && styles.lightText]}>
                    {props.name}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default UserComponent