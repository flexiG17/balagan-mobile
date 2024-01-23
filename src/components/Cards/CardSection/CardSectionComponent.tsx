import {View, Text, TouchableOpacity} from "react-native";
import React from "react";
import styles from "./style";
import {Routes} from "../../../consts/routesNames";
import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";

interface Props {
    navigation: NativeStackNavigationProp<any>,
    children: React.ReactNode;
    title: string;
    count?: number,
}

const CardSectionComponent: React.FC<Props> = ({navigation, children, title, count}) => {

    return (
        <View>
            <View style={styles.block}>
                <TouchableOpacity
                    activeOpacity={0.4}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.4}
                    onPress={() => navigation.push(Routes.EVENT_SEARCH_ROUTE)}
                >
                    <Text style={styles.count}>
                        {`${count} >`}
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cards}>
                {children}
            </View>
        </View>
    )
}

export default CardSectionComponent