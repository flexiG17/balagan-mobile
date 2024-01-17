import {View, Text, Button, TouchableOpacity} from "react-native";
import styles from "./style";
import React from "react";
import {MaterialIcons} from '@expo/vector-icons';
import {EvilIcons} from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
interface Props {
    count: number
}

const EventComponent: React.FC<Props> = ({count}) => {
    return (
        <View style={styles.block}>
            <View style={styles.top}>
                <View style={styles.icons}>
                    <View style={styles.price}>
                        <Text style={styles.text}>
                            {`${count} ₽`}
                        </Text>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.4}>
                        <MaterialIcons name="favorite-outline" size={18} color="black"/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.bottom}>
                <Text style={styles.title}>
                    Дегустация сыра
                </Text>
                <View style={styles.iconWithText}>
                    <EvilIcons name="clock" size={14} color="black"/>
                    <Text style={styles.descriptionText}>
                        15 августа · 12:00
                    </Text>
                </View>
                <View style={styles.iconWithText}>
                    <Feather style={styles.markerIcon} name="map-pin" size={10} color="black" />
                    <Text style={styles.descriptionText}>
                        Площадь 1985, 5 км
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default EventComponent