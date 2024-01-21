import {Text, TouchableOpacity, View} from "react-native";
import styles from "./style";
import React from "react";
import {EvilIcons, Feather, MaterialIcons} from '@expo/vector-icons';
import EventStatus from "../../../consts/eventStatus";
import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";
import {Routes} from "../../../consts/routesNames";

interface IProps {
    navigation: NativeStackNavigationProp<any>,
    id: number,
    isEditMode?: boolean,
    status?: EventStatus,
    isFavorite?: boolean
}

const EventComponent: React.FC<IProps> = ({navigation,
                                              isEditMode,
                                              status,
                                              isFavorite,
                                              id}) => {
    const getAgreedBlockBackgroundColor = () => {
        if (status === EventStatus.Agreed)
            return {backgroundColor: '#DFFFE8'}
        else if (status === EventStatus.Wait)
            return {backgroundColor: '#FCFFDF'}
        else if (status === EventStatus.Completed)
            return {backgroundColor: '#FF9898'}
        else
            return {backgroundColor: '#FFDFDF'}
    }

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.push(Routes.EVENT_ROUTE, {
                eventId: id
            })}
        >
            <View style={styles.block}>
                <View style={styles.top}>
                    <View style={styles.icons}>
                        <View style={styles.editData}>
                            <View style={styles.price}>
                                <Text style={styles.text}>
                                    {`${300} ₽`}
                                </Text>
                            </View>
                            {isEditMode &&
                                <View style={[styles.editDataBlock, getAgreedBlockBackgroundColor()]}>
                                    <Text style={styles.editDataText}>
                                        {status}
                                    </Text>
                                </View>
                            }
                        </View>
                        {isEditMode
                            ?
                            <Feather name="edit" size={16} color="black"/>
                            :
                            <TouchableOpacity
                                activeOpacity={0.4}>
                                <MaterialIcons
                                    name={isFavorite ? 'favorite' : 'favorite-outline'}
                                    size={18}
                                    color="#3B285C"/>
                            </TouchableOpacity>
                        }
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
                        <Feather style={styles.markerIcon} name="map-pin" size={10} color="black"/>
                        <Text style={styles.descriptionText}>
                            Площадь 1985, 5 км
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default EventComponent