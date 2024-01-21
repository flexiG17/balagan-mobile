import {View, Text, TouchableOpacity} from "react-native";
import styles from './style'
import {Feather, AntDesign} from '@expo/vector-icons';
import React from "react";
import {Routes} from "../../consts/routesNames";
import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";
import {RouteProp} from "@react-navigation/native";
import checkUserVerification from "../utils/checkUserVerification";

interface Props {
    navigation: NativeStackNavigationProp<any>,

    searchAction?: boolean | false,
    createEventAction?: boolean | false,
    calendarAction?: boolean | false,
    settingsAction?: boolean | false,

    createType?: 'event' | 'community'

    title: string,
}

const Header: React.FC<Props> = (props) => {

    const getCreationType = () => {
        if (props.createType === 'event')
            return checkUserVerification(false)
        else if (props.createType === 'community')
            return Routes.CREATE_COMMUNITY_ROUTE
        else
            return Routes.PROFILE_ROUTE
    }

    return (
        <View style={styles.block}>
            <Text style={styles.title}>
                {props.title}
            </Text>
            <View style={styles.actions}>
                <View style={styles.actions}>
                    {props.searchAction && <TouchableOpacity
                        activeOpacity={0.4}
                        onPress={() => {
                            props.navigation.push(Routes.EVENT_SEARCH_ROUTE, {
                                eventId: 3
                            })
                        }}
                    >
                        <Feather name="search" size={24} color="black"/>
                    </TouchableOpacity>}
                    {props.createEventAction && <TouchableOpacity
                        activeOpacity={0.4}
                        onPress={() => {
                            props.navigation.push(getCreationType())
                        }}>
                        <AntDesign name="plus" size={24} color="black"/>
                    </TouchableOpacity>}
                    {props.calendarAction && <TouchableOpacity
                        activeOpacity={0.4}
                        onPress={() => {
                            // props.navigation.push(Routes.CALENDAR_ROUTE)
                        }}>
                        <AntDesign name="calendar" size={24} color="black"/>
                    </TouchableOpacity>}
                    {props.settingsAction && <TouchableOpacity
                        activeOpacity={0.4}
                        onPress={() => {

                        }}>
                        <AntDesign name="setting" size={24} color="black"/>
                    </TouchableOpacity>}
                </View>
            </View>
        </View>
    )
}

export default Header