import {Image, Text, TouchableOpacity, View} from "react-native";
import styles from './style'
import React from "react";
import ComponentSize from "../../../consts/componentSize";
import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";
import {Routes} from "../../../consts/routesNames";
import {RouteProp} from "@react-navigation/native";

interface IProps {
    navigation: NativeStackNavigationProp<any>,
    text: string,
    id: number,
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
                    id: props.id,
                    text: props.text}
            })}
        >
            <View style={styles.block}>
                <Image
                    source={require('./assets/circuit.png')}
                    style={getComponentSize().size}
                />
                <Text style={[styles.text, getComponentSize().font]}>
                    {props.text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default CommunityComponent