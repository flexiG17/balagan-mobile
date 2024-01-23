import {Image, Text, TouchableOpacity, View} from "react-native";
import styles from './style'
import React from "react";
import ComponentSize from "../../../consts/componentSize";
import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";
import {Routes} from "../../../consts/routesNames";
import {RouteProp} from "@react-navigation/native";
import ICommunity from "../../../interfaces/ICommunity";

interface IProps extends ICommunity{
    navigation: NativeStackNavigationProp<any>,
    size?: ComponentSize
}

const CommunityComponent: React.FC<IProps> = (props) => {
    const getComponentSize = () => {
        if (props.size === ComponentSize.Small) {
            return {
                'size': styles.smallImage,
                'font': {fontSize: 6}
            }
        } else if (props.size === ComponentSize.Medium)
            return {
                'size': styles.mediumImage,
                'font': {fontSize: 10}
            }
        else
            return {
                'size': styles.bigImage,
                'font': {fontSize: 10}
            }
    }

    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => props.navigation.push(Routes.COMMUNITY_ROUTE, {
                community: {
                    community_id: props.community_id,
                    name: props.name}
            })}
        >
            <View style={styles.block}>
                <Image
                    source={{uri: props.image}}
                    style={[getComponentSize().size, styles.image]}
                />
                <Text style={[styles.text, getComponentSize().font]}>
                    {props.name}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default CommunityComponent