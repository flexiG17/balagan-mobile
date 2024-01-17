import {View, Text, TouchableOpacity} from "react-native";
import React from "react";
import styles from "./style";

interface Props {
    children: React.ReactNode;
    title: string;
    count: number
}

const CardSectionComponent: React.FC<Props> = ({children, title, count}) => {
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
                    activeOpacity={0.4}>
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