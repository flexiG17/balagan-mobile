import {Text, TouchableOpacity, View, Image, ImageBackground} from "react-native";
import styles from "./style";
import React from "react";
import {EvilIcons, Feather, MaterialIcons} from '@expo/vector-icons';
import EventStatus from "../../../consts/eventStatus";
import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";
import {Routes} from "../../../consts/routesNames";
import IEvent from "../../../interfaces/IEvent";
import {deleteExtraSpaces} from "../../utils/formatText";

interface IProps{
    navigation: NativeStackNavigationProp<any>,
    isEditMode?: boolean,
    status?: EventStatus,
    event: IEvent
}

const EventComponent: React.FC<IProps> = (props) => {
    const getAgreedBlockBackgroundColor = () => {
        if (props.event.status === 'confirm')
            return {backgroundColor: '#DFFFE8'}
        else if (props.event.status === 'check')
            return {backgroundColor: '#FCFFDF'}
        else if (props.event.status === 'cancel')
            return {backgroundColor: '#FF9898'}
        else
            return {backgroundColor: '#FFDFDF'}
    }

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => props.navigation.push(Routes.EVENT_ROUTE, {
                event_id: props.event.event_id
            })}
        >
            <View style={styles.block}>
                <ImageBackground source={{uri: props.event.image}} style={styles.image}>
                    <View style={styles.top}>
                        <View style={styles.icons}>
                            <View style={styles.editData}>
                                <View style={styles.price}>
                                    <Text style={styles.text}>
                                        {`${props.event.price} ₽`}
                                    </Text>
                                </View>
                                {props.isEditMode &&
                                    <View style={[styles.editDataBlock, getAgreedBlockBackgroundColor()]}>
                                        <Text style={styles.editDataText}>
                                            {props.event.status}
                                        </Text>
                                    </View>
                                }
                            </View>
                            {props.isEditMode
                                ?
                                <Feather name="edit" size={16} color="black"/>
                                :
                                <TouchableOpacity
                                    activeOpacity={0.4}>
                                    <MaterialIcons
                                        name={props.event.isFavorite ? 'favorite' : 'favorite-outline'}
                                        size={18}
                                        color="#3B285C"/>
                                </TouchableOpacity>
                            }
                        </View>
                    </View>
                </ImageBackground>
                <View style={styles.bottom}>
                    <Text
                        numberOfLines={1}
                        style={styles.title}>
                        {deleteExtraSpaces(props.event.name)}
                    </Text>
                    <View style={styles.iconWithText}>
                        <EvilIcons name="clock" size={14} color="black"/>
                        <Text style={styles.descriptionText}>
                            {props.event.date} · 12:00
                        </Text>
                    </View>
                    <View style={styles.iconWithText}>
                        <Feather style={styles.markerIcon} name="map-pin" size={10} color="black"/>
                        <Text
                            numberOfLines={1}
                            style={styles.descriptionText}>
                            {
                                // @ts-ignore
                                deleteExtraSpaces(props.event.place)}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default EventComponent